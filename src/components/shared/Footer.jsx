import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-10 px-4">
        {/* Branding */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Job <span className="text-violet-800 font-bold">Portal</span>
          </h1>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6 text-gray-600">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-800"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-800"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-800"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-800"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Copyright Text */}
        <div className="text-center text-gray-500">
          <p>&copy; 2024 Job Portal. All rights reserved. Built with React.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
