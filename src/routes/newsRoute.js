import express from "express";
import { allNews, newsById } from "../controller/newsController.js";

const newsRouter = express.Router();

newsRouter.get("/", allNews);
newsRouter.get("/:newsId", newsById);

export default newsRouter;
