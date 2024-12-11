import gamesDataModel from "../models/gamesDataModel.js";

export const getSearch = async (key) => {
  try {
    const searchData = await gamesDataModel.find({
      $or: [
        { title: { $regex: key, $options: "i" } },
        { categories: { $regex: key, $options: "i" } },
      ],
    });
    return searchData;
  } catch (error) {
    console.error("Error in getSearch:", error.message);
    throw new Error("Database search failed");
  }
};
