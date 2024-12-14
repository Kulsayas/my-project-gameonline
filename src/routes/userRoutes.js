import express from "express";
import { userlogin, userRegister } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/login", userlogin);
userRouter.post("/register", userRegister);

export default userRouter;
