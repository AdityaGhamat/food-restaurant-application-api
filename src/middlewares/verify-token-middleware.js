const jwt = require("jsonwebtoken");
const { ErrorMessage } = require("../utils/comman");
const { AppError } = require("../utils/errors");
const { StatusCodes } = require("http-status-codes");
const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError("User not logged in", StatusCodes.NOT_FOUND);
    }
    const words = token.split(" ");
    const jwtToken = words[1];
    const decoded = jwt.verify(jwtToken, process.env.JWT_KEY);
    req.id = decoded.id;
    next();
  } catch (error) {
    ErrorMessage.error = error;
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

module.exports = verifyToken;
