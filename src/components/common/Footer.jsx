import React from "react";
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/Logo/Logo-Full-Light.png";

// Icons
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="w-11/12 max-w-maxContent mx-auto py-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 border-b border-richblack-700 pb-8">
          {/* Left Section - Logo and Socials */}
          <div className="flex flex-col gap-4">
            <img src={Logo} alt="Learnaly Logo" className="w-40" />
            <p className="text-richblack-300 text-sm">
              Empowering learners worldwide with accessible and innovative education.
            </p>
            <div className="flex gap-4 text-richblack-300">
              <a
                href="https://facebook.com/learnaly"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-all duration-200"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://twitter.com/learnaly"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-all duration-200"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://linkedin.com/company/learnaly"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-all duration-200"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://youtube.com/learnaly"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-all duration-200"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Right Section - Essential Links */}
          <div className="flex flex-wrap gap-8 lg:gap-16">
            {/* Company */}
            <div className="flex flex-col gap-3">
              <h3 className="text-richblack-50 font-semibold">Company</h3>
              <Link
                to="/about"
                className="text-richblack-300 text-sm hover:text-yellow-300 transition-all duration-200"
              >
                About
              </Link>
              <Link
                to="/careers"
                className="text-richblack-300 text-sm hover:text-yellow-300 transition-all duration-200"
              >
                Careers
              </Link>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-3">
              <h3 className="text-richblack-50 font-semibold">Support</h3>
              <Link
                to="/help-center"
                className="text-richblack-300 text-sm hover:text-yellow-300 transition-all duration-200"
              >
                Help Center
              </Link>
              <Link
                to="/contact"
                className="text-richblack-300 text-sm hover:text-yellow-300 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 pt-8 text-richblack-300 text-sm">
          <div className="flex gap-4">
            <Link
              to="/privacy-policy"
              className="hover:text-yellow-300 transition-all duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-yellow-300 transition-all duration-200"
            >
              Terms of Service
            </Link>
          </div>
          <p className="text-center">
            &copy; {new Date().getFullYear()} Learnaly. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;