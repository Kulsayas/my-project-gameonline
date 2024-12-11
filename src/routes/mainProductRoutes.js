import express from "express";
import { getMainProduct } from "../controller/mainProductController.js";

const mainProductRouter = express.Router();

mainProductRouter.get("/", getMainProduct);

export default mainProductRouter;
