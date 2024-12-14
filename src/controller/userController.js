import { loginUserService, createUserService } from "../service/userService.js";

export const userlogin = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: "failure",
        message: "Email and password are required.",
      });
    }

    const token = await loginUserService(email, password);

    return res.status(200).json({
      massage: "Login successfully",
      token: token,
    });
  } catch (error) {
    res.status(500).send({
      status: "failure",
      message: "Internal server error.",
    });
  }
};

export const userRegister = async (req, res) => {
  try {
    const { email, password, firstName, lastName, displayName } = req.body;

    const newUser = await createUserService(
      email,
      password,
      firstName,
      lastName,
      displayName
    );

    console.log("New User Created:", newUser);

    return res.status(201).json({
      status: "success",
      message: "User registered successfully.",
      user: newUser,
    });
  } catch (error) {
    console.error("Error in userRegister:", error.message);
    return res.status(500).json({
      status: "failure",
      message: "Internal server error.",
    });
  }
};
