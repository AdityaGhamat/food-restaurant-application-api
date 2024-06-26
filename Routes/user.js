import express from "express";
import { adminChecker } from "../Middlewares/adminChecker.js";
import { verifyToken } from "../Middlewares/verifyToken.js";
const app = express.Router();
import {
  register,
  login,
  allUsersList,
  getSingleUser,
  deleteUser,
  logout,
  getUser,
  createAddress,
  getUserAddresses,
  updateAddress,
} from "../Controllers/user.js";

app.post("/register", register);
app.post("/login", login);
app.put("/logout", logout);
app.get("/allusers", adminChecker, allUsersList);
app.get("/singleuser/:id", adminChecker, getSingleUser);
app.get("/get-user", verifyToken, getUser);
app.delete("/deleteuser/:id", adminChecker, deleteUser);
app.post("/address/:userId", createAddress);
app.get("/getaddress/:userId", getUserAddresses);
app.put("/updateaddress/:userId/:addressId", updateAddress);
export default app;
