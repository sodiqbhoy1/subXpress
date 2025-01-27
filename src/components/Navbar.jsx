import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white text-lg font-bold">
          <a href="/">SubXpress</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-yellow-400">Home</a>
          <a href="/contact" className="text-white hover:text-yellow-400">Contact Us</a>
          <a href="/signup" className="text-white hover:text-yellow-400">Register</a>
          <a href="/signin" className="text-white hover:text-yellow-400">Login</a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-blue-600 p-4`}
      >
        <a href="/" className="text-white block py-2 hover:text-yellow-400">Home</a>
        <a href="/contact" className="text-white block py-2 hover:text-yellow-400">Contact Us</a>
        <a href="/signup" className="text-white block py-2 hover:text-yellow-400">Register</a>
        <a href="/signin" className="text-white block py-2 hover:text-yellow-400">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
