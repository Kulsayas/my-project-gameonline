import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    mainContent: { type: String, required: true },
    mainParagraph: { type: String, required: true },
    subParagraph: { type: String, required: true },
    date: { type: String, required: true },
    contributor: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const newsModel = mongoose.model("news", newsSchema);
export default newsModel;
