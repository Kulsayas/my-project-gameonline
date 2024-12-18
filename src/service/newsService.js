import newsModel from "../models/newsModel.js";

export const getNews = async (req, res) => {
  try {
    const news = await newsModel.find();
    return news; // ส่งข้อมูลกลับไปให้ Controller
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
    const newsById = await newsModel.findById(id);
    return newsById;
  } catch (error) {
    res.status(500).send({
      status: "failure",
      message: "Internal server error.",
    });
  }
};
