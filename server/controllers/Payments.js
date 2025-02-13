const express = require("express");
const Insta = require("instamojo-nodejs");
const Course = require("../models/Course");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const { courseEnrollmentEmail } = require("../mail/templates/courseEnrollmentEmail");
const mongoose = require("mongoose");
require("dotenv").config();

// Set Instamojo API Keys from .env
Insta.setKeys(process.env.INSTAMOJO_PRIVATE_KEY, process.env.INSTAMOJO_AUTH_TOKEN);
Insta.isSandboxMode(true); // Change to false in production

// Capture Payment and Initiate Instamojo Order
exports.capturePayment = async (req, res) => {
    try {
        const { course_id } = req.body;
        const userId = req.user.id;

        if (!course_id) {
            return res.json({ success: false, message: "Please provide a valid course ID" });
        }

        let course = await Course.findById(course_id);
        if (!course) {
            return res.json({ success: false, message: "Course not found" });
        }

        const uid = new mongoose.Types.ObjectId(userId);
        if (course.studentsEnrolled.includes(uid)) {
            return res.status(200).json({ success: false, message: "Student is already enrolled" });
        }

        const data = new Insta.PaymentData();
        data.purpose = `Purchase: ${course.courseName}`;
        data.amount = course.price;
        data.buyer_name = req.user.name;
        data.email = req.user.email;
        data.phone = req.user.phone || "9999999999";
        data.redirect_url = "http://localhost:3000/payment-success";
        data.send_email = true;
        data.webhook = "http://localhost:5000/api/payment/verify-signature";

        Insta.createPayment(data, (error, response) => {
            if (error) {
                console.error("Payment Creation Error:", error);
                return res.status(500).json({ success: false, message: "Could not initiate order" });
            }

            const paymentLink = JSON.parse(response).payment_request.longurl;
            res.json({
                success: true,
                paymentLink,
                courseName: course.courseName,
                courseDescription: course.courseDescription,
                thumbnail: course.thumbnail,
            });
        });
    } catch (error) {
        console.error("Error in Capture Payment:", error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

// Verify Instamojo Payment Signature
exports.verifySignature = async (req, res) => {
    try {
        const { payment_id, payment_request_id, status } = req.body;

        if (status !== "Credit") {
            return res.status(400).json({ success: false, message: "Payment Failed" });
        }

        const courseId = req.body.purpose.split(": ")[1];
        const userId = req.user.id;

        const enrolledCourse = await Course.findOneAndUpdate(
            { _id: courseId },
            { $push: { studentsEnrolled: userId } },
            { new: true }
        );

        if (!enrolledCourse) {
            return res.status(500).json({ success: false, message: "Course not found" });
        }

        const enrolledStudent = await User.findOneAndUpdate(
            { _id: userId },
            { $push: { courses: courseId } },
            { new: true }
        );

        await mailSender(
            enrolledStudent.email,
            "Enrollment Successful!",
            `Congratulations! You are now enrolled in ${enrolledCourse.courseName}.`
        );

        return res.status(200).json({ success: true, message: "Payment verified, course added." });
    } catch (error) {
        console.error("Error in Payment Verification:", error);
        return res.status(500).json({ success: false, message: error.message });
    }
};