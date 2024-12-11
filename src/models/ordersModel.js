import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, default: "" },
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

const ordersModel = mongoose.model("orders", ordersSchema);
export default ordersModel;
