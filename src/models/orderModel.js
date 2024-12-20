import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    items: { type: Array, required: true },
    amount: { type: Number, required: true },
    status: { type: String, required: true, default: "Waiting for verify" },
    paymentMethod: { type: String, required: true },
    payment: { type: Boolean, required: true, default: false },
    date: { type: Date, required: true, default: Date.now },
  },
  {
    versionKey: false,
  }
);

const orderModel = mongoose.model("order", orderSchema);
export default orderModel;
