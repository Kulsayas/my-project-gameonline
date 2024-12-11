import {
  getBannersHomePage,
  getNewsHomepage,
  getreccomendGames,
  getPopularGames,
} from "../service.js/main-product.js";

export const getMainProduct = async (req, res, next) => {
  try {
    const banners = await getBannersHomePage();
    const News = await getNewsHomepage();
    const reccomend = await getreccomendGames();
    const popular = await getPopularGames();
    return res.status(200).json({ banners, News, reccomend, popular });
  } catch (error) {
    next(error);
  }
};
