import React from "react";
import { PiFlowerLotusThin } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-pink-100 py-6">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-6 md:gap-0">
          {/* Logo Section */}
          <div className="flex items-center text-center md:text-left">
            <PiFlowerLotusThin className="text-5xl text-pink-600 mr-2" />
            <h1 className="font-dancing text-3xl md:text-4xl font-bold text-black">
              Bloom Cart
            </h1>
          </div>

          {/* Subscribe Section */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full md:w-48 rounded-md text-black"
            />
            <button className="bg-pink-300 text-black p-3 rounded-md hover:bg-light-pink w-full md:w-auto">
              Subscribe
            </button>
          </div>

          {/* Social Media Section */}
          <div className="flex justify-center md:justify-start gap-4">
            <div className="bg-pink-300 rounded-full p-2 hover:bg-pink-500 transition-colors">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-2xl text-black" />
              </a>
            </div>
            <div className="bg-pink-300 rounded-full p-2 hover:bg-pink-500 transition-colors">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl text-black" />
              </a>
            </div>
            <div className="bg-pink-300 rounded-full p-2 hover:bg-pink-500 transition-colors">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

