const { StatusCodes } = require("http-status-codes");
const { CartValidation } = require("../validations");
const { ErrorMessage } = require("../utils/comman");
const validateCart = (req, res, next) => {
  try {
    req.body = CartValidation.cartSchema.parse(req.body);
    next();
  } catch (error) {
    ErrorMessage.message = "Something went wrong while validatingCart";
    if (error instanceof z.ZodError) {
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorMessage);
    }
    next(error);
  }
};

module.exports = { validateCart };
