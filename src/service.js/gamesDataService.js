import gamesDataModel from "../models/gamesDataModel.js";

export const getGames = async () => {
  try {
    const allGames = await gamesDataModel.find().skip(0).limit(20);
    return allGames;
  } catch (error) {
    res.status(500).json({
      status: "fial",
      message: "Internet Server Error",
    });
  }
};

export const getdetailGamesById = async (req, res) => {
  try {
    const id = req.params.gameId;
    const detailgame = await gamesDataModel.findById(id);
    if (!detailgame) {
      res.status(400).send({
        status: "failure",
        message: "Games not found",
      });
    }
    return detailgame;
  } catch (error) {
    res.status(500).send({
      status: "failure",
      message: "Internal server error.",
    });
  }
};
