const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try {
        // Create a transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST, // SMTP server host (e.g., smtp.gmail.com)
            auth: {
                user: process.env.MAIL_USER, // Email address (e.g., your Gmail)
                pass: process.env.MAIL_PASS, // Email password or app-specific password
            },
        });

        // Send the email
        let info = await transporter.sendMail({
            from: `"Learnly" <${process.env.MAIL_USER}>`, // Sender address
            to: email, // Recipient address
            subject: title, // Subject line
            html: body, // HTML body
        });

        console.log("Email sent successfully:", info.response);
        return info; // Return the info object for further processing
    } catch (error) {
        console.error("Error sending email:", error.message);
        throw error; // Propagate the error to the caller
    }
};

module.exports = mailSender;