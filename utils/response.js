import { res } from "express";

export const SuccessResponse = (res, statusCode, message) => {
  res.status(statusCode).json({
    status: "success",
    message,
    data,
  });
};

export const errorRespon = (res, statusCode, message) => {
  res.status(statusCode).json({
    status: "fial",
    message,
  });
};
