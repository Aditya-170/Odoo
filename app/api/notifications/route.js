// File: app/api/notifications/route.js (App Router)

import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import dbConnect from "@/lib/db";
import notification_model from "@/model/notification_model";


// GET all notifications for current user
export async function GET(req) {
  try {
    await dbConnect();
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const notifications = await notification_model.find({ user: userId }).sort({ createdAt: -1 });

    return NextResponse.json(notifications);
  } catch (err) {
    console.error("Error fetching notifications:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

