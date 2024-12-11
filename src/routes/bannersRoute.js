import express from "express";
import { getBanners } from "../controller/bannersController.js";

const bannersRouter = express.Router();

bannersRouter.get("/", getBanners);

export default bannersRouter;
