const express = require("express");
const V1Routes = require("./v1");
const Router = express.Router();
Router.use("/v1", V1Routes);
module.exports = Router;
