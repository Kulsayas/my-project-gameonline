import newsModel from "../models/newsModel.js";

export const getNews = async (req, res) => {
  try {
    const news = await newsModel.find();
    if (!news) {
      return res.status(400).send("News not found");
    }
    res.status(200).json({
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

export const getNewsById = async (req, res) => {
  try {
    const id = req.params.newsId;
    let newById = await newsModel.findById(id);
    if (!newById) {
      return res.status(400).send("News not found");
    } else {
      res.json({ data: newById });
    }
  } catch (error) {
    res.status(500).send({
      status: "failure",
      message: "Internal server error.",
    });
  }
};
