import express from "express";
import { getNews, getNewsById } from "../controller/newsController.js";

const newsRouter = express.Router();

newsRouter.get("/", getNews);
newsRouter.get("/:newsId", getNewsById);

export default newsRouter;
