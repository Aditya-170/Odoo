"use client"
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Users, Package, Recycle, Search, Heart, Sparkles, TrendingUp, Shield, Leaf } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-purple-500/20">
          <div className="w-full px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <span className="text-xl font-bold text-purple-200">ReWear</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-purple-300 hover:text-purple-200 transition-colors">Home</a>
              <a href="#" className="text-purple-300 hover:text-purple-200 transition-colors">About</a>
              <a href="#" className="text-purple-300 hover:text-purple-200 transition-colors">Features</a>
              <a href="#" className="text-purple-300 hover:text-purple-200 transition-colors">Items</a>
              <a href="#" className="text-purple-300 hover:text-purple-200 transition-colors">Contact</a>
            </div>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 text-purple-200 hover:text-purple-300 transition-colors">Sign In</button>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </nav>
  );
}
