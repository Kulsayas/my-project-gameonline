import mongoose from "mongoose";

const bannersSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    imagesUrl: { type: String, required: true },
    active: { type: Boolean, required: true, default: true },
    updateAt: { type: Date, required: true, default: Date.now },
  },
  {
    versionKey: false,
  }
);
const bannersModel = mongoose.model("banners", bannersSchema);
export default bannersModel;
