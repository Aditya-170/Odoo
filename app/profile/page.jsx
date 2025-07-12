"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const profile = {
  name: "Anjali Kapoor",
  email: "anjali@example.com",
  phone: "+91-9876543210",
  points: 120,
  swaps: 8,
  memberSince: "January 2024",
  image: "/img4.png",
};

const listings = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: `Listed Item ${i + 1}`,
  image: `/img4.png`,
}));

const purchases = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: `Purchased Item ${i + 1}`,
  image: `/img4.png`,
}));

export default function ProfilePage() {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-[#140024] to-[#2d0052] text-white px-6 pt-24 py-10 min-h-screen">
        {/* Profile Header */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-center">
          <div className="flex justify-center">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-40 h-40 rounded-full object-cover border-4 border-pink-500 shadow-lg"
            />
          </div>
          <div className="md:col-span-2 space-y-4 text-center md:text-left bg-[#1f012f] p-6 rounded-xl border border-purple-700 shadow-md">
            <h2 className="text-3xl font-extrabold text-[#ff4ecd]">{profile.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
              <p><span className="font-semibold text-white">📧 Email:</span> {profile.email}</p>
              <p><span className="font-semibold text-white">📱 Phone:</span> {profile.phone}</p>
              <p><span className="font-semibold text-white">🌟 Points Earned:</span> {profile.points} pts</p>
              <p><span className="font-semibold text-white">👕 Clothes Swapped:</span> {profile.swaps}</p>
              <p><span className="font-semibold text-white">📅 Member Since:</span> {profile.memberSince}</p>
              <p><span className="font-semibold text-white">🏆 Level:</span> Premium Recycler ♻️</p>
            </div>
            <p className="text-purple-300 italic pt-2">“Reusing fashion, rewriting the future ✨”</p>
          </div>
        </div>

        {/* Listings */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-4 text-pink-400">My Listings</h3>
          <div className="flex overflow-x-auto gap-4 pb-4 custom-scrollbar">
            {listings.map((item) => (
              <div
                key={item.id}
                className="min-w-[160px] bg-[#1f012f] rounded-lg shadow-md border border-purple-700 p-3 hover:scale-105 transition-transform"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-cover rounded-md mb-2"
                />
                <p className="text-sm font-medium text-center text-white truncate">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Purchases */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-4 text-pink-400">My Purchases</h3>
          <div className="flex overflow-x-auto gap-4 pb-4 custom-scrollbar">
            {purchases.map((item) => (
              <div
                key={item.id}
                className="min-w-[160px] bg-[#1f012f] rounded-lg shadow-md border border-purple-700 p-3 hover:scale-105 transition-transform"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-cover rounded-md mb-2"
                />
                <p className="text-sm font-medium text-center text-white truncate">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
