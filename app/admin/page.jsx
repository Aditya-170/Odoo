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

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'delivered':
        return 'text-green-400';
      case 'pending':
        return 'text-yellow-400';
      case 'shipped':
        return 'text-blue-400';
      case 'inactive':
      case 'returned':
      case 'rejected':
        return 'text-red-400';
      default:
        return 'text-purple-300';
    }
  };

  const renderContent = () => {
    if (activeTab === "Manage Users") {
      return users.map((user) => (
        <div key={user.id} className="group p-6 bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:bg-purple-900/30 transition-all duration-300 transform hover:scale-[1.02]">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative">
              <img 
                src={user.image} 
                alt={user.name} 
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/50 shadow-lg" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-purple-200 mb-1">{user.name}</h3>
              <p className="text-sm text-purple-300 mb-1">{user.email}</p>
              <p className="text-xs text-purple-400">{user.phone}</p>
            </div>
            
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                Promote
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full text-white text-sm font-semibold shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                Remove
              </button>
            </div>
          </div>
        </div>
      ));
    } else if (activeTab === "Manage Orders") {
      return orders.map((order) => (
        <div key={order.id} className="group p-6 bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:bg-purple-900/30 transition-all duration-300 transform hover:scale-[1.02]">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-purple-200 mb-1">{order.user}</h3>
              <p className="text-sm text-purple-300 mb-1">Item: {order.item}</p>
              <p className={`text-sm font-semibold ${getStatusColor(order.status)}`}>
                Status: {order.status}
              </p>
            </div>
            
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                Update
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full text-white text-sm font-semibold shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                Cancel
              </button>
            </div>
          </div>
        </div>
      ));
    } else {
      return listings.map((listing) => (
        <div key={listing.id} className="group p-6 bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:bg-purple-900/30 transition-all duration-300 transform hover:scale-[1.02]">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-purple-200 mb-1">{listing.title}</h3>
              <p className="text-sm text-purple-300 mb-1">Owner: {listing.owner}</p>
              <p className={`text-sm font-semibold ${getStatusColor(listing.status)}`}>
                Status: {listing.status}
              </p>
            </div>
            
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                Approve
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full text-white text-sm font-semibold shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                Reject
              </button>
            </div>
          </div>
        </div>
      ));
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Main Content */}
      <div className="relative pt-24 pb-16 px-4 overflow-hidden">
        {/* Animated Background Elements - matching home page */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
              Admin Panel
            </h1>
            <p className="text-xl text-purple-200 leading-relaxed">
              Manage your platform with ease and efficiency
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab 
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25" 
                    : "bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 text-purple-200 hover:bg-purple-500/30"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Content Area */}
          <div className="space-y-6">
            {renderContent()}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
