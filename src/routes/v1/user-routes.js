const express = require("express");
const Router = express.Router();
const { UserController } = require("../../controllers");
const { UserValidationsMiddleware, VerifyToken } = require("../../middlewares");

Router.post(
  "/register",
  UserValidationsMiddleware.validateUserRegistration,
  UserController.createUser
);

Router.post(
  "/login",
  UserValidationsMiddleware.validateUserLogin,
  UserController.loginUser
);

Router.post(
  "/phone-number",
  UserValidationsMiddleware.validatePhoneNumber,
  UserController.updatePhoneNumber
);

Router.get("/user", VerifyToken, UserController.getUser);

Router.get("/allusers", UserController.getAllUsers);

Router.post(
  "/address",
  VerifyToken,
  UserValidationsMiddleware.validateUserAddress,
  UserController.createAddress
);

Router.get("/address", VerifyToken, UserController.getAddress);

Router.put(
  "/edit-address/:id",
  VerifyToken,
  UserValidationsMiddleware.validateUserAddress,
  UserController.updateAddress
);

module.exports = Router;
