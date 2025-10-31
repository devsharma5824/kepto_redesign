import React, { useEffect, useRef } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "../layout/Footer";

const ContactUs = () => {
  return (
    <>
      <div className="relative w-full bg-[url('./assets/BG.jpg')] bg-cover bg-center min-h-screen overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start justify-center min-h-screen gap-6 px-6 md:px-16 py-12">
          {/* Leftt */}
          <div className="flex-1 md:w-[70%] bg-zinc-900 bg-opacity-80 border border-gray-700 rounded-2xl p-8 backdrop-blur-md shadow-xl">
            <h2 className="text-3xl font-semibold text-white mb-2">
              Send us a Message
            </h2>
            <p className="text-gray-400 mb-8">
              Give us a chance to serve and bring magic to your finance.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-transparent border border-gray-700 rounded-md text-gray-100 focus:border-lime-300 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full p-3 bg-transparent border border-gray-700 rounded-md text-gray-100 focus:border-lime-300 outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm text-gray-300 mb-2">
                  Phone*
                </label>
                <input
                  type="tel"
                  placeholder="+88 (0) 101 0000 000"
                  className="w-full p-3 bg-transparent border border-gray-700 rounded-md text-gray-100 focus:border-lime-300 outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm text-gray-300 mb-2">
                  Message*
                </label>
                <textarea
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full p-3 bg-transparent border border-gray-700 rounded-md text-gray-100 focus:border-lime-300 outline-none"
                ></textarea>
              </div>

              <div className="md:col-span-2 flex items-center cursor-pointer">
                <button
                  type="button"
                  className="w-full cursor-pointer my-2 py-3
                  relative flex items-center justify-center 
                  text-lg text-gray-300 
                  bg-neutral-800 
                  p-2 rounded-lg 
                  overflow-hidden
                  transition-all duration-300
                  group"
                >
                  <span
                    className="absolute inset-0 rounded-lg 
                    bg-white
                    opacity-0 scale-0 
                    group-hover:opacity-100 group-hover:scale-100 
                    transition-all duration-300"
                  ></span>

                  <span className="w-full relative z-10 group-hover:text-black transition-colors duration-300 px-2">
                    Send Message
                  </span>
                </button>
              </div>
            </form>
          </div>
          {/* Right */}
          <div className="md:w-[30%] bg-zinc-900 bg-opacity-80 border border-gray-700 rounded-2xl p-8 backdrop-blur-md shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaPhoneAlt className="text-lime-300 text-lg" />
                <span className="text-gray-300 text-sm">
                  +88 (0) 101 0000 000
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <FaEnvelope className="text-lime-300 text-lg" />
                <span className="text-gray-300 text-sm">support@kepto.com</span>
              </div>

              <div className="flex gap-4 text-gray-300 text-lg mb-10">
                <a href="#" className="hover:text-lime-300">
                  <FaXTwitter />
                </a>
                <a href="#" className="hover:text-lime-300">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-lime-300">
                  <FaLinkedinIn />
                </a>
              </div>

              <hr className="border-gray-700 mb-6" />

              <div>
                <h4 className="text-gray-200 font-medium mb-2">
                  United States Office:
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Sunshine Business Park,
                  <br />
                  Floor No 05A, Sector-94,
                  <br />
                  California, USA
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full my-10">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.723764769047!2d-73.97012!3d40.80499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f63c7c112a1d%3A0xaaa0b5f839d4479c!2s2880%20Broadway%2C%20New%20York%2C%20NY%2010025%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className=" shadow-lg"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
