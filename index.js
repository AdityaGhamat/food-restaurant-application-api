import express from "express";
const app = express();
const port = 8000;
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectionDb } from "./Utils/connection.js";
import cors from "cors";

//routes
import userRouter from "./Routes/user.js";
import menuRouter from "./Routes/menuItem.js";
import cartRouter from "./Routes/cart.js";
import addressRouter from "./Routes/address.js";
//middlewares
dotenv.config();
app.use(cors({ origin: "https://food-restaurant-client.vercel.app", credentials: true }));
app.use(express.json());
app.use(cookieParser());

//main routes
app.get("/", (req, res) => {
  res.json({
    name: "aditya",
    api: "restaurant",
  });
});
connectionDb();
app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", menuRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/user-address", addressRouter);
//connection of backend server and database

//app listening on port
app.listen(process.env.port || port, () => {
  console.log(`server is running on port ${port}`);
});
