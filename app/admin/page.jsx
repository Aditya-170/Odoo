"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tabs = ["Manage Users", "Manage Orders", "Manage Listings"];

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("Manage Users");

  const users = [
    { id: 1, name: "Anjali Kapoor", email: "anjali@example.com", phone: "+91-9876543210", image: "/img4.png" },
    { id: 2, name: "Rahul Singh", email: "rahul@example.com", phone: "+91-9876543211", image: "/img4.png" },
    { id: 3, name: "Priya Mehta", email: "priya@example.com", phone: "+91-9876543212", image: "/img4.png" },
    { id: 4, name: "Aman Verma", email: "aman@example.com", phone: "+91-9876543213", image: "/img4.png" },
    { id: 5, name: "Sneha Joshi", email: "sneha@example.com", phone: "+91-9876543214", image: "/img4.png" },
  ];

  const orders = [
    { id: 1, user: "Anjali Kapoor", item: "Denim Jacket", status: "Pending" },
    { id: 2, user: "Rahul Singh", item: "Leather Boots", status: "Shipped" },
    { id: 3, user: "Priya Mehta", item: "Flannel Shirt", status: "Delivered" },
    { id: 4, user: "Aman Verma", item: "Vintage Tee", status: "Pending" },
    { id: 5, user: "Sneha Joshi", item: "Wool Sweater", status: "Returned" },
  ];

  const listings = [
    { id: 1, title: "Denim Jacket", owner: "Anjali Kapoor", status: "Active" },
    { id: 2, title: "Leather Boots", owner: "Rahul Singh", status: "Inactive" },
    { id: 3, title: "Flannel Shirt", owner: "Priya Mehta", status: "Pending" },
    { id: 4, title: "Vintage Tee", owner: "Aman Verma", status: "Active" },
    { id: 5, title: "Wool Sweater", owner: "Sneha Joshi", status: "Rejected" },
  ];

  const renderContent = () => {
    if (activeTab === "Manage Users") {
      return users.map((user) => (
        <div key={user.id} className="flex flex-col sm:flex-row items-center justify-between bg-[#1f012f] p-4 rounded-xl shadow-md gap-4 border border-purple-700 transition-transform duration-300 hover:scale-[1.02]">
          <img src={user.image} alt={user.name} className="w-16 h-16 rounded-full object-cover border-2 border-pink-500" />
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-lg font-bold text-[#ff4ecd]">{user.name}</h3>
            <p className="text-sm text-gray-300">{user.email}</p>
            <p className="text-xs text-purple-300">Phone: {user.phone}</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold shadow-md hover:scale-105 transition-transform">Promote</button>
            <button className="px-4 py-1 rounded-full bg-red-500 hover:bg-red-600 text-white text-xs font-bold shadow-md hover:scale-105 transition-transform">Remove</button>
          </div>
        </div>
      ));
    } else if (activeTab === "Manage Orders") {
      return orders.map((order) => (
        <div key={order.id} className="flex flex-col sm:flex-row items-center justify-between bg-[#1f012f] p-4 rounded-xl shadow-md gap-4 text-sm border border-purple-700 transition-transform duration-300 hover:scale-[1.02]">
          <p className="text-[#ff4ecd] font-bold">{order.user}</p>
          <p className="text-white">Item: {order.item}</p>
          <p className="text-purple-300">Status: {order.status}</p>
          <div className="flex gap-2">
            <button className="px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold shadow-md hover:scale-105 transition-transform">Update</button>
            <button className="px-4 py-1 rounded-full bg-red-500 hover:bg-red-600 text-white text-xs font-bold shadow-md hover:scale-105 transition-transform">Cancel</button>
          </div>
        </div>
      ));
    } else {
      return listings.map((listing) => (
        <div key={listing.id} className="flex flex-col sm:flex-row items-center justify-between bg-[#1f012f] p-4 rounded-xl shadow-md gap-4 text-sm border border-purple-700 transition-transform duration-300 hover:scale-[1.02]">
          <p className="text-[#ff4ecd] font-bold">{listing.title}</p>
          <p className="text-white">Owner: {listing.owner}</p>
          <p className="text-purple-300">Status: {listing.status}</p>
          <div className="flex gap-2">
            <button className="px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold shadow-md hover:scale-105 transition-transform">Approve</button>
            <button className="px-4 py-1 rounded-full bg-red-500 hover:bg-red-600 text-white text-xs font-bold shadow-md hover:scale-105 transition-transform">Reject</button>
          </div>
        </div>
      ));
    }
  };

  return (
    <>
      <Navbar />
      <div className="px-4 py-6 bg-gradient-to-b from-[#140024] to-[#2d0052] min-h-screen text-white">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold text-sm bg-gradient-to-r from-[#a855f7] to-[#ec4899] hover:from-[#9333ea] hover:to-[#f472b6] transition duration-300 ${
                activeTab === tab ? "ring-2 ring-pink-400" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="space-y-6 max-w-4xl mx-auto">{renderContent()}</div>
      </div>
      <Footer />
    </>
  );
}
