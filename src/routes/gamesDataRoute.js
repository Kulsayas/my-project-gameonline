import express from "express";
import {
  getAllGames,
  detailGamesById,
} from "../controller/gamesDataController.js";

const gamesRouter = express.Router();

gamesRouter.get("/", getAllGames);
gamesRouter.get("/games/:gameId", detailGamesById);

export default gamesRouter;
