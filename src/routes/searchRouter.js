import express from "express";
import { searchProduct } from "../controller/searchController.js";

const searchProductRouter = express.Router();

searchProductRouter.get("/", searchProduct);

export default searchProductRouter;
