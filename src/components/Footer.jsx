import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#121743] text-gray-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-2 md:mb-0">
            &copy; 2023 Your Name. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition duration-300">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
