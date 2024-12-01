import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on();
};

export default connectDB;
