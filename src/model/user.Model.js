import mongoose, { Document, Schema, Model } from "mongoose";

//ติดต่อของที่อยู่กับ database
const userSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  firstname: { type: String, require: true },
  lastname: { type: String, required: true },
  cartData: [
    {
      type: mongoose.Schema.Types.ObjectId,
      default: {},
    },
  ],
});

export default userModel = mongoose.model("user", userSchema);
