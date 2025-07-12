"use client";
import React, { useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Bell, Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-purple-500/20">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              ReWear
            </span>

          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/home" className="text-purple-300 hover:text-purple-200 transition-colors">Home</Link>
            <Link href="/about" className="text-purple-300 hover:text-purple-200 transition-colors">About</Link>
            <Link href="/swaps" className="text-purple-300 hover:text-purple-200 transition-colors">Swaps</Link>
            <Link href="/products" className="text-purple-300 hover:text-purple-200 transition-colors">Items</Link>
            <Link href="/contact" className="text-purple-300 hover:text-purple-200 transition-colors">Contact</Link>
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            <SignedOut>
              <SignInButton>
                <button className="px-4 py-2 text-purple-200 hover:text-purple-300 transition-colors">
                  Sign In
                </button>
              </SignInButton>

            </SignedOut>

            <SignedIn>
              <div className="flex items-center gap-x-4">
                {/* Notification Bell */}
                <div
                  className="relative cursor-pointer"
                  onClick={() => router.push("/notification")}
                >
                  <Bell className="w-6 h-6 text-purple-300 hover:text-purple-100" />
                  {/* Unread Count */}
                  <span className="absolute -top-1 -right-1 text-xs bg-pink-500 text-white rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                    3 {/* Replace with dynamic count */}
                  </span>
                </div>

                <p
                  className="text-sm text-purple-300 cursor-pointer hover:text-purple-100"
                  onClick={() => router.push("/profile")}
                >
                  Hi, {user?.firstName}
                </p>
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-purple-400" />
              ) : (
                <Menu className="w-6 h-6 text-purple-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-sm font-bold text-center text-purple-300">
          <Link href="/home" className="block hover:text-purple-200">Home</Link>
          <Link href="/about" className="block hover:text-purple-200">About</Link>
          <Link href="/swaps" className="block hover:text-purple-200">Swaps</Link>
          <Link href="/products" className="block hover:text-purple-200">Items</Link>
          <Link href="/contact" className="block hover:text-purple-200">Contact</Link>
          <hr className="border-purple-600/40 my-2" />

          <SignedOut>
            <SignInButton>
              <button className="w-full px-4 py-2 text-purple-200 hover:text-purple-300 transition-colors">
                Sign In
              </button>
            </SignInButton>

          </SignedOut>

          <SignedIn>
            <div className="flex items-center justify-center gap-x-3">
              <p
                className="cursor-pointer hover:text-purple-200"
                onClick={() => router.push("/profile")}
              >
                Hi, {user?.firstName}
              </p>
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </div>
      )}
    </nav>
  );
}
