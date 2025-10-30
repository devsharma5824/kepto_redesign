import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "../common/NavLinks";
import logo from "../../assets/Pi7_Logo.png";
import { LuLogIn } from "react-icons/lu";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="px-8 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link to="/">
              <img className="h-10 mr-2 cursor-pointer" src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Navigation Links */}
          <NavLinks />

          {/* Auth Buttons */}
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <Link to="/login">
              <button className="relative group overflow-hidden py-2 px-3 rounded-lg font-medium cursor-pointer bg-black text-white transition-all duration-300 transform hover:scale-110 border-none">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black flex items-center gap-2">
                  <LuLogIn className="text-lg" />
                  Log In
                </span>
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
