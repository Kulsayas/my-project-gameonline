import bcrypt from "bcrypt";
import { userModel } from "../model/user.Model ";

//logic ที่เกี่ยวกับ database
export const createUserService = async (req, res) => {
  try {
    const { email, password, firstname, lastname } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      //ถ้าเจอว่ามี email นี้ในระบบอยู่แล้ว
      throw new Error("This email already exists in the system.");
    }
    // hashing user password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return newUser;
  } catch (error) {
    throw error;
  }
};
