const { ErrorMessage } = require("../utils/comman");
const { MenuItemValidation } = require("../validations");
const { z } = require("zod");
const { StatusCodes } = require("http-status-codes");

const validateMenuItem = (req, res, next) => {
  try {
    req.body = MenuItemValidation.menuItemValidationSchema.parse(req.body);
    next();
  } catch (error) {
    ErrorMessage.message = "Something went wrong.Invalid email or password";
    ErrorMessage.error = error.errors;
    if (error instanceof z.ZodError) {
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorMessage);
    }
    next(error);
  }
};

const validateReview = (req, res, next) => {
  try {
    req.body = MenuItemValidation.reviewValidation.parse(req.body);
    next();
  } catch (error) {
    ErrorMessage.message = "Invalid review";
    ErrorMessage.error = error.errors;
    if (error instanceof z.ZodError) {
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorMessage);
    }
    next(error);
  }
};
module.exports = { validateMenuItem, validateReview };
