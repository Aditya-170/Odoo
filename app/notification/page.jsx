"use client";

import { useEffect, useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate fetch — replace with your actual API
    const fetchData = async () => {
      const res = await fetch("/api/notifications"); // GET accepted/rejected etc.
      const data = await res.json();
      setNotifications(data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-black/90 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto bg-[#1a1a1a] p-8 border border-purple-500/20 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-purple-200 mb-6 text-center">Your Notifications</h2>

        {notifications.length === 0 ? (
          <p className="text-purple-400 text-center">No notifications yet.</p>
        ) : (
          <ul className="space-y-4">
            {notifications.map((note) => (
              <li key={note._id} className="p-4 rounded bg-purple-500/10 border border-purple-500/30">
                <div className="flex items-center justify-between">
                  <p className="text-purple-200">{note.message}</p>
                  {note.status === "accepted" ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400" />
                  )}
                </div>
                <p className="text-xs text-purple-400 mt-1">
                  {new Date(note.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
