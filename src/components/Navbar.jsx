import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#e74c3c] p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white text-lg font-bold">
          <a href="/">SubXpress</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a
            href="/"
            className="text-white hover:text-[#f4d58d] focus:text-[#8d0801] transition duration-300"
          >
            Home
          </a>
          <a
            href="/contact"
            className="text-white hover:text-[#f4d58d] focus:text-[#8d0801] transition duration-300"
          >
            Contact Us
          </a>
          <a
            href="/signup"
            className="text-white hover:text-[#f4d58d] focus:text-[#8d0801] transition duration-300"
          >
            Register
          </a>
          <a
            href="/signin"
            className="text-white hover:text-[#f4d58d] focus:text-[#8d0801] transition duration-300"
          >
            Login
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fas fa-bars h-6 w-6"></i> {/* FontAwesome Hamburger Icon */}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-[#001427] p-4`}
      >
        <a
          href="/"
          className="text-white block py-2 hover:text-[#f4d58d] focus:text-[#8d0801] transition duration-300"
        >
          Home
        </a>
        <a
          href="/contact"
          className="text-white block py-2 hover:text-[#f4d58d] focus:text-[#8d0801] transition duration-300"
        >
          Contact Us
        </a>
        <a
          href="/signup"
          className="text-white block py-2 hover:text-[#f4d58d] focus:text-[#8d0801] transition duration-300"
        >
          Register
        </a>
        <a
          href="/signin"
          className="text-white block py-2 hover:text-[#f4d58d] focus:text-[#8d0801] transition duration-300"
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;