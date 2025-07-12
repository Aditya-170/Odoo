// If not already created
const notificationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  swap: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SwapItem",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected", "cancelled", "completed"],
    default: "pending",
  },
}, { timestamps: true });

export default mongoose.models.Notification || mongoose.model("Notification", notificationSchema);
