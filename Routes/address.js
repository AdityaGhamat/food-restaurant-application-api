import express from "express";
const app = express.Router();
import {
  createAddress,
  getUserAddresses,
  updateAddress,
} from "../Controllers/user.js";

app.post("/address/:userId", createAddress);
app.get("/getaddress/:userId", getUserAddresses);
app.put("/updateaddress/:userId/:addressId", updateAddress);

export default app;
