import { getNews, getNewsById } from "../service/newsService.js";

export const allNews = async (req, res) => {
  try {
    const allNews = await getNews();
    return res.status(200).json({ allNews });
  } catch (error) {
    res.status(500).send({
      error: error,
      status: "failure",
      message: "",
    });
  }
};

export const newsById = async (req, res) => {
  try {
    const newsId = await getNewsById();
    if (!newsId) {
      return res.status(400).send("News not found");
    } else {
      return res.status(200).json({ newsId });
    }
  } catch (error) {
    res.status(500).send({
      status: "failure",
      message: "Internal server error.",
    });
  }
};
