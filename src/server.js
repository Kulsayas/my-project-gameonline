import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";

const app = express();
const port = process.env.PORT || 4000;

connectDB();

//api
app.use(express.json()); //ทำให้มันเป็น json ได้
app.use(express.urlencoded({ extended: true })); //เอาไว้อ่าน payload ได้
app.use(cors()); //อนุญาตให้ origin  ให้ 2 port ที่แตกต่างกันเข้าถึงกันได้

app.get("/", (req, res) => {
  res.send("API Working");
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
