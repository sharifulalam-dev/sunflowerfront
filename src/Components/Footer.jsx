import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Sunflower Visa</h2>
            <p className="text-gray-400 text-sm">
              Simplifying your visa application process.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-blue-400">
              Home
            </a>
            <a href="#" className="hover:text-blue-400">
              About Us
            </a>
            <a href="#" className="hover:text-blue-400">
              Contact
            </a>
            <a href="#" className="hover:text-blue-400">
              Privacy Policy
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm mt-4">
          &copy; 2024 Sunflower Visa. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
