const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const { GlobalErrorHandler } = require("../middlewares");
const middlewareConfig = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(GlobalErrorHandler);
  app.use(cors());
};

module.exports = middlewareConfig;
