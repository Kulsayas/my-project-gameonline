import { getSearch } from "../service/searchService.js";

export const searchProduct = async (req, res) => {
  try {
    const key = req.query.key;
    console.log("key", key);
    const searchProducts = await getSearch(key);
    return searchProducts;
  } catch (error) {
    res.status(500).send({
      status: "failure",
      message: "Internal server error.",
    });
  }
};
