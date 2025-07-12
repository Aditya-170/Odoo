"use client";
import React, { useState } from "react";

import { Menu, X, Recycle } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (

    <nav className="bg-gradient-to-b from-[#140024] to-[#2d0052] text-white px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-xl font-extrabold">
          <Recycle className="w-5 h-5 text-[#ec4899]" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#ec4899]">
            ReWear
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-bold">
          <li><Link href="#" className="hover:text-[#ff4ecd]">Home</Link></li>
          <li><Link href="#" className="hover:text-[#ff4ecd]">About</Link></li>
          <li><Link href="#" className="hover:text-[#ff4ecd]">Features</Link></li>
          <li><Link href="#" className="hover:text-[#ff4ecd]">Items</Link></li>
          <li><Link href="#" className="hover:text-[#ff4ecd]">Contact</Link></li>
        </ul>

        {/* Auth Buttons for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <SignedOut>
            <SignInButton>
              <button className="text-sm text-white hover:text-[#ff4ecd] font-bold">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-3 text-sm font-bold text-center">
          <Link href="#" className="block text-white hover:text-[#ff4ecd]">Home</Link>
          <Link href="#" className="block text-white hover:text-[#ff4ecd]">About</Link>
          <Link href="#" className="block text-white hover:text-[#ff4ecd]">Features</Link>
          <Link href="#" className="block text-white hover:text-[#ff4ecd]">Items</Link>
          <Link href="#" className="block text-white hover:text-[#ff4ecd]">Contact</Link>
          <hr className="border-purple-600 my-2" />
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="flex justify-center">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </div>
      )}
    </nav>

  );
}
