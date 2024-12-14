import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

//logic ที่เกี่ยวกับ database
export const createUserService = async (
  email,
  password,
  firstName,
  lastName,
  displayName
) => {
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      //ถ้าเจอว่ามี email นี้ในระบบอยู่แล้ว
      throw new Error("This email already exists.");
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }
    // hashing user password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      displayName,
    });

    await newUser.save();

    return newUser;
  } catch (error) {
    throw error;
  }
};

export const loginUserService = async (email, password) => {
  try {
    const existingUser = await userModel.findOne({ email });
    console.log(existingUser, "user");
    if (!existingUser) {
      throw new Error("Email not found.");
    }
    const dbPassword = existingUser.password;
    const isPasswordMatch = await bcrypt.compare(password, dbPassword);
    if (!isPasswordMatch) {
      throw new Error("Email or Password is invalid.");
    }
    // Generating a JWT Token
    const token = jwt.sign(
      { email: existingUser.email, password: existingUser.password },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    console.log("token = ", token);
    return token;
  } catch (error) {
    console.error("Error in loginUserService:", error.message);
    throw error;
  }
};
