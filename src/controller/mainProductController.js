import {
  getBannersHomePage,
  getNewsHomepage,
  getreccomendGames,
  getPopularGames,
} from "../service/main-product.js";

export const getMainProduct = async (req, res) => {
  try {
    const banners = await getBannersHomePage();
    const News = await getNewsHomepage();
    const reccomend = await getreccomendGames();
    const popular = await getPopularGames();
    return res.status(200).json({ banners, News, reccomend, popular });
  } catch (error) {
    res.status(500).send({
      status: "failure",
      message: "Internal server error.",
    });
  }
};
