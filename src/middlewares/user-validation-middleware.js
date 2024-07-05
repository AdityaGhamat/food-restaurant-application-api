const { ErrorMessage } = require("../utils/comman");
const { UserValidation } = require("../validations");
const { z } = require("zod");
const { StatusCodes } = require("http-status-codes");

const validateUserLogin = (req, res, next) => {
  try {
    req.body = UserValidation.userSignInValidationSchema.parse(req.body);
    next();
  } catch (error) {
    ErrorMessage.message = "Invalid email or password";
    ErrorMessage.error = error.errors;
    if (error instanceof z.ZodError) {
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorMessage);
    }
    next(error);
  }
};

const validateUserRegistration = (req, res, next) => {
  try {
    req.body = UserValidation.userSignInValidationSchema.parse(req.body);
    next();
  } catch (error) {
    ErrorMessage.message = "Invalid name, email or password";
    ErrorMessage.error = error.errors;
    if (error instanceof z.ZodError) {
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorMessage);
    }
    next(error);
  }
};

const validateUserAddress = (req, res, next) => {
  try {
    req.body = UserValidation.addressValidation.parse(req.body);
    next();
  } catch (error) {
    ErrorMessage.message = "Invalid Address";
    ErrorMessage.error = error.errors;
    if (error instanceof z.ZodError) {
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorMessage);
    }
    next(error);
  }
};

const validatePhoneNumber = (req, res, next) => {
  try {
    req.body = UserValidation.phoneNumberValidation.parse(req.body);
    next();
  } catch (error) {
    ErrorMessage.message = "Invalid Address";
    ErrorMessage.error = error.errors;
    if (error instanceof z.ZodError) {
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorMessage);
    }
    next(error);
  }
};
module.exports = {
  validateUserLogin,
  validateUserRegistration,
  validateUserAddress,
  validatePhoneNumber,
};
