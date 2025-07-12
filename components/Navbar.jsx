"use client"
import React, { useState } from "react";
import { Menu, X, Recycle, User } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-[#140024] to-[#2d0052] text-white px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo with icon */}
        <div className="flex items-center space-x-2 text-xl font-extrabold">
          <Recycle className="w-5 h-5 text-[#ec4899]" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#ec4899]">
            ReWear
          </span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-bold">
          <li><a href="#" className="hover:text-[#ff4ecd]">Home</a></li>
          <li><a href="#" className="hover:text-[#ff4ecd]">About</a></li>
          <li><a href="#" className="hover:text-[#ff4ecd]">Features</a></li>
          <li><a href="#" className="hover:text-[#ff4ecd]">Items</a></li>
          <li><a href="#" className="hover:text-[#ff4ecd]">Contact</a></li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-sm text-white hover:text-[#ff4ecd] font-bold">Sign In</button>
          <User className="w-7 h-7 text-[#ff4ecd] hover:text-[#f9a8d4] cursor-pointer" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#ff4ecd]" />
            ) : (
              <Menu className="w-6 h-6 text-[#ff4ecd]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-3 text-sm font-bold text-center">
          <a href="#" className="block text-white hover:text-[#ff4ecd]">Home</a>
          <a href="#" className="block text-white hover:text-[#ff4ecd]">About</a>
          <a href="#" className="block text-white hover:text-[#ff4ecd]">Features</a>
          <a href="#" className="block text-white hover:text-[#ff4ecd]">Items</a>
          <a href="#" className="block text-white hover:text-[#ff4ecd]">Contact</a>
          <hr className="border-purple-600 my-2" />
          <button className="block w-full text-white hover:text-[#ff4ecd] font-bold">Sign In</button>
          <User className="mx-auto w-7 h-7 text-[#ff4ecd] hover:text-[#f9a8d4] cursor-pointer" />
        </div>
      )}
    </nav>
  );
}
