import {
  getGames as fetchGames,
  getdetailGamesById,
  getSearch,
} from "../service/gamesService.js";

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
    res.status(200).json({ detailGame });
  } catch (error) {
    res.status(500).send({
      status: "failure",
      message: "Internal server error.",
    });
  }
};

export const searchProduct = async (req, res) => {
  try {
    const key = req.params.gameTitle;
    const searchProducts = await getSearch(key);
    res.status(200).json({ searchProducts });
  } catch (error) {
    res.status(500).send({
      status: "failure",
      message: "Internal server error.",
    });
  }
};
