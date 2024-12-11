import express from "express";
import { getNews } from "../controller/newsController.js";

const newsRouter = express.Router();

newsRouter.get("/", getNews);

export default newsRouter;
