import bannersModel from "../models/bannersModel.js";

export const getBanners = async (req, res) => {
  try {
    const banners = await bannersModel.find();
    res.status(200).send({
      data: banners,
    });
  } catch (error) {
    res.status(500).send({
      error: error,
      status: "failure",
      message: "Internal server error.",
    });
  }
};
