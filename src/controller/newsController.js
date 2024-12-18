import { getNews, getNewsById } from "../service/newsService.js";

export const allNews = async (req, res) => {
  try {
    const news = await getNews();
    if (!news || news.length === 0) {
      return res.status(404).json({ message: "No news found" }); //ไม่พบข้อมูล
    }
    res.status(200).json({ data: news });
  } catch (error) {
    res.status(500).send({
      error: error,
      status: "failure",
      message: "Internal server error.",
    });
  }
};

export const newsById = async (req, res) => {
  try {
    const newsById = await getNewsById(req);
    if (!newsById) {
      return res.status(404).json({ message: "No news found" }); //ไม่พบข้อมูล
    }
    res.status(200).json({ data: newsById });
  } catch (error) {
    res.status(500).send({
      status: "failure",
      message: "Internal server error.",
    });
  }
};
