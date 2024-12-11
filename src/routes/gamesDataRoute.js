import express from "express";
import {
  getGamesData,
  getdetailGamesById,
} from "../controller/gamesDataController.js";

const gamesRouter = express.Router();

gamesRouter.get("/", getGamesData);
gamesRouter.get("/:gameId", getdetailGamesById);

export default gamesRouter;
