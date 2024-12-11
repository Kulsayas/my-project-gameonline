import gamesDataModel from "../models/gamesDataModel.js";

export const getGamesData = async (req, res) => {
  try {
    const gamesData = await gamesDataModel.find();
    res.status(200).send({
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

export const getdetailGamesById = async (req, res) => {
  try {
    const id = req.params.gameId;
    const detailValue = await gamesDataModel.findById(id);
    if (!detailValue) {
      res.status(400).send({
        status: "failure",
        message: "Games not found",
      });
      return;
    }
    res.status(200).json({
      data: detailValue,
    });
  } catch (error) {
    res.status(500).send({
      status: "failure",
      message: "Internal server error.",
    });
  }
};
