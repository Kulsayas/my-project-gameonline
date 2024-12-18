import express from "express";
import {
  getAllGames,
  detailGamesById,
  searchProduct,
} from "../controller/gamesController.js";

const gamesRouter = express.Router();

gamesRouter.get("/", getAllGames);
gamesRouter.get("/games/:gameId", detailGamesById);
gamesRouter.get("/search/:gameTitle", searchProduct);

export default gamesRouter;
