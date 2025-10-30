import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-black flex justify-center items-center ">
      <div
        style={{
          background: "linear-gradient(120deg, #8234c5, #230952)",
        }}
        className="relative flex flex-col justify-center items-center w-full py-10 md:pb-10 md:pt-16 mx-auto rounded-t-4xl overflow-hidden"
      >
        <div className="max-w-8xl mx-auto px-6 ">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
            {/* Company */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <div className="flex flex-col space-y-3">
                <a href="#!" className="hover:text-purple-300 transition">
                  About Us
                </a>
                <a href="#!" className="hover:text-purple-300 transition">
                  Careers
                </a>
                <a href="#!" className="hover:text-purple-300 transition">
                  Terms of Use
                </a>
                <a href="#!" className="hover:text-purple-300 transition">
                  Privacy Policy
                </a>
                <a href="#!" className="hover:text-purple-300 transition">
                  Contact Us
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <div className="flex flex-col space-y-3">
                <a href="#!" className="hover:text-purple-300 transition">
                  Vendor Payment
                </a>
                <a href="#!" className="hover:text-purple-300 transition">
                  Rent Payment
                </a>
                <a href="#!" className="hover:text-purple-300 transition">
                  Education Fee
                </a>
                <a href="#!" className="hover:text-purple-300 transition">
                  Mobile Prepaid / Postpaid
                </a>
                <a href="#!" className="hover:text-purple-300 transition">
                  DTH
                </a>
              </div>
            </div>

            {/* Download App */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Download App</h3>
              <p className="text-gray-300 mb-4">
                Available in any kind of ready version
              </p>
              <div className="flex space-x-3">
                <a href="#">
                  <img
                    src="https://kbillpay.com/assets/front/images/app_store.webp"
                    alt="App Store"
                    className="h-12 hover:opacity-80 transition"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://kbillpay.com/assets/front/images/google_play.webp"
                    alt="Google Play"
                    className="h-12 hover:opacity-80 transition"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bg-black border-gray-700 p-6 flex flex-col md:flex-row justify-between items-center text-center lg:text-left rounded-xl">
            <p className="text-md text-gray-400 mb-6 md:mb-0">
              © 2025 KEPTO FINTECH PVT. LTD — ALL RIGHTS RESERVED.
            </p>

            <div className="flex space-x-4 text-gray-300">
              {[
                { icon: <FaXTwitter />, label: "Twitter X" },
                { icon: <FaFacebook />, label: "Facebook" },
                { icon: <FaLinkedinIn />, label: "LinkedIn" },
                { icon: <FaTelegram />, label: "Telegram" },
              ].map(({ icon, label }, i) => (
                <a
                  key={i}
                  href="#!"
                  aria-label={label}
                  className="
                     relative flex items-center justify-center 
                     text-2xl text-gray-300 
                     bg-neutral-900 
                     p-2 rounded-full 
                     overflow-hidden
                     transition-all duration-300
                     group
                   "
                >
                  <span
                    className="
                    absolute inset-0 rounded-full 
                    bg-linear-to-br from-green-400 via-yellow-400 to-orange-400
                    opacity-0 scale-0 
                    group-hover:opacity-100 group-hover:scale-100 
                    transition-all duration-300
                    "
                  ></span>

                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
