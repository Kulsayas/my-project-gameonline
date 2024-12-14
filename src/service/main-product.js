import newsModel from "../models/newsModel.js";
import bannersModel from "../models/newsModel.js";
import gamesDataModel from "../models/gamesDataModel.js";

export const getBannersHomePage = async (req, res) => {
  try {
    const bannerValue = await bannersModel.find({ active: true });
    if (!bannerValue) {
      res.status(400).send("Banner not found");
    }
    return bannerValue;
  } catch (error) {
    res.status(500).json({
      status: "fial",
      message: "Internet Server Error",
    });
  }
};

export const getNewsHomepage = async (req, res) => {
  try {
    const newsValue = await newsModel
      .find()
      .select("title imageUrl mainContent");
    if (!newsValue) {
      res.status(400).send("News not found");
    }
    return newsValue;
  } catch (error) {
    res.status(500).json({
      status: "fial",
      message: "Internet Server Error",
    });
  }
};

export const getreccomendGames = async (req, res) => {
  try {
    const reccomend = await gamesDataModel.find({ categories: "recommend" });
    return reccomend;
  } catch (error) {
    res.status(500).json({
      status: "fial",
      message: "Internet Server Error",
    });
  }
};

export const getPopularGames = async (req, res) => {
  try {
    const popular = await gamesDataModel.find().sort({ rating: -1 });
    return popular;
  } catch (error) {
    res.status(500).json({
      status: "fial",
      message: "Internet Server Error",
    });
  }
};
