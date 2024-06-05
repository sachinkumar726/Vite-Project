import React from "react";
import {
  FaGamepad,
  FaUsers,
  FaQuestionCircle,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="px-4 bg-gradient-to-b from-black to-pink-500 to-purple-700 text-white">
      <div className="container flex flex-col justify-between py-10 mx-auto lg:flex-row">
        <div className="lg:w-1/3">
          <a
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <FaGamepad className="self-center text-3xl" />
            <span className="self-center text-3xl font-bold">GamingWorld</span>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase font-bold">Products</h3>
            <ul className="space-y-1">
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">Consoles</a>
              </li>
              <li>
                <a href="#">Merchandise</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase font-bold">Community</h3>
            <ul className="space-y-1">
              <li>
                <a href="#">Forums</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Contests</a>
              </li>
              <li>
                <a href="#">Challenges</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase font-bold">Support</h3>
            <ul className="space-y-1">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase font-bold">Connect</h3>
            <div className="flex justify-start space-x-3">
              <a
                href="#"
                title="Facebook"
                className="flex items-center p-1 bg-pink-600 rounded-full"
              >
                <FaUsers className="text-white" />
              </a>
              <a
                href="#"
                title="Twitter"
                className="flex items-center p-1 bg-pink-600 rounded-full"
              >
                <FaEnvelope className="text-white" />
              </a>
              <a
                href="#"
                title="Instagram"
                className="flex items-center p-1 bg-pink-600 rounded-full"
              >
                <FaQuestionCircle className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-400">
        &copy; {new Date().getFullYear()} Workforyou. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;