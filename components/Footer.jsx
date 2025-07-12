import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Recycle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#140024] to-[#2d0052] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Slogan */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <Recycle className="w-6 h-6 text-[#ec4899]" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#ec4899]">
              ReWear
            </span>
          </div>
          <p className="text-sm text-gray-300">
            Giving clothes a second chance and the planet a better future.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-[#ff4ecd]" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-[#ff4ecd]" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="w-5 h-5 hover:text-[#ff4ecd]" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:text-[#ff4ecd]" />
            </a>
          </div>
        </div>

        {/* Platform */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-[#ff4ecd]">Platform</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-[#ec4899]">How It Works</a></li>
            <li><a href="#" className="hover:text-[#ec4899]">Browse Items</a></li>
            <li><a href="#" className="hover:text-[#ec4899]">List an Item</a></li>
            <li><a href="#" className="hover:text-[#ec4899]">Points System</a></li>
            <li><a href="#" className="hover:text-[#ec4899]">Earn & Redeem</a></li>
          </ul>
        </div>

        {/* Community */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-[#ff4ecd]">Community</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-[#ec4899]">Our Mission</a></li>
            <li><a href="#" className="hover:text-[#ec4899]">Success Stories</a></li>
            <li><a href="#" className="hover:text-[#ec4899]">Events</a></li>
            <li><a href="#" className="hover:text-[#ec4899]">Blog</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-[#ff4ecd]">Support</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-[#ec4899]">Help Center</a></li>
            <li><a href="#" className="hover:text-[#ec4899]">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#ec4899]">Shipping Info</a></li>
            <li><a href="#" className="hover:text-[#ec4899]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#ec4899]">Terms of Use</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-8">
        © {new Date().getFullYear()} ReWear. All rights reserved.
      </div>
    </footer>
  );
}
