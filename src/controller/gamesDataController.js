import {
  getGames as fetchGames,
  getdetailGamesById,
} from "../service.js/gamesDataService.js";

export const getAllGames = async (req, res) => {
  try {
    const gamesData = await fetchGames();
    res.status(200).json({
      data: gamesData,
    });
  } catch (error) {
    res.status(500).send({
      error: error,
      status: "failure",
      message: "Internal server error.",
    });
  }
};

export const detailGamesById = async (req, res) => {
  try {
    const detailGame = await getdetailGamesById(req);
    return res.status(200).json({ detailGame });
  } catch (error) {
    res.status(500).send({
      status: "failure",
      message: "Internal server error.",
    });
  }
};
