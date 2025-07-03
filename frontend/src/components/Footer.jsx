import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3c2f78] text-white px-6 pt-8 pb-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & description */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl" />
            <h1 className="text-2xl font-bold">KreaTech Hub</h1>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Youth-driven IT solutions built for the modern world.
          </p>

          {/* Email Subscription */}
          <form className="flex flex-col sm:flex-row items-center gap-2 mt-12">
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-auto flex-1 bg-[#5a4ca0] text-white placeholder:text-gray-300 px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="bg-purple-400 hover:bg-purple-500 px-8 py-3 text-white font-semibold rounded-full transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Platform */}
        <div>
          <h3 className="font-bold mb-4">Platform</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Overview</li>
            <li>Features</li>
            <li>About</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-bold mb-4">Help</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>How does it works?</li>
            <li>Where to ask question?</li>
            <li>How to play?</li>
            <li>What is needed for this?</li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="font-bold mb-4">Contacts</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>9845047014/9811240470</li>
            <li>Chitwan, Syaulibazar</li>
            <li>kreatechhub@gmail.com</li>
            <li>www.kreatechhub.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-400 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <p className="text-sm text-gray-300">
          @ KreaTechHub. All rights reserved.
        </p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <a
            href="#"
            className="text-white bg-[#5a4ca0] p-2 rounded transition duration-300 hover:text-[#1877F2]" // Facebook blue
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="#"
            className="text-white bg-[#5a4ca0] p-2 rounded transition duration-300 hover:text-[#E1306C]" // Instagram pink
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="#"
            className="text-white bg-[#5a4ca0] p-2 rounded transition duration-300 hover:text-[#1DA1F2]" // Twitter blue
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="#"
            className="text-white bg-[#5a4ca0] p-2 rounded transition duration-300 hover:text-[#0A66C2]" // LinkedIn blue
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>  
      </div>
    </footer>
  );
};

export default Footer;
