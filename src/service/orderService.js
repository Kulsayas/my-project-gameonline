import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

export const createOrderService = async (req, res) => {
  try {
    const { userId, items, amount } = req.body;
    const orderData = new ordersModel({
      userId,
      items,
      amount,
      paymentMethod: "stripe",
      payment: false,
      date: Date.now(),
    });

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    return orderData;
  } catch (error) {
    res.status(500).json({
      status: "fial",
      message: "Internet Server Error",
    });
  }
};

const userOrderService = async (req, res) => {
  try {
    const { userId } = req.body;
    const userOrder = await orderModel.find({ userId });
    return userOrder;
  } catch (error) {
    res.status(500).json({
      status: "fial",
      message: "Internet Server Error",
    });
  }
};

const allOrder = async (req, res) => {
  try {
    const { userId } = req.params.userId;
    const order = await orderModel.find({ userId });
    if (!order) {
      res.status(400).send("Order is not found.");
    }
    return order;
  } catch (error) {
    res.status(500).json({
      status: "fial",
      message: "Internet Server Error",
    });
  }
};
