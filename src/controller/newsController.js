import newsModel from "../models/newsModel.js";

export const getNews = async (req, res) => {
  try {
    const news = (await newsModel.find()) || [];
    res.status(200).send({
      data: news,
    });
  } catch (error) {
    res.status(500).send({
      error: error,
      status: "failure",
      message: "Internal server error.",
    });
  }
};
