import mongoose from "mongoose";

//ติดต่อของที่อยู่กับ database
const userSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  firstName: { type: String, require: true },
  lastName: { type: String, required: true },
  displayName: { type: String, require: true },
  cartData: [
    {
      type: mongoose.Schema.Types.ObjectId,
      default: {},
    },
  ],
});

const userModel = mongoose.model("users", userSchema);
export default userModel;
