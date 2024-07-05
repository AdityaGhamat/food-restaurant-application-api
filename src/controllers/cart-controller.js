const { CartServices } = require("../services");
const { SuccessMessage, ErrorMessage } = require("../utils/comman");
const { StatusCodes } = require("http-status-codes");
const errorMessage = require("../utils/message/error-message.json");
const successMessage = require("../utils/message/success-message");

const addToCart = async (req, res) => {
  try {
    const response = await CartServices.addToCart(req.params.id, req.body);
    SuccessMessage.data = response;
    SuccessMessage.message = successMessage.cart.addToCart;
    return res.status(StatusCodes.CREATED).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.message;
    ErrorMessage.message = errorMessage.cart.addToCart;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

const getCart = async (req, res) => {
  //:id
  try {
    const response = await CartServices.getCart(req.params.id);
    SuccessMessage.data = response;
    SuccessMessage.message = successMessage.cart.getCart;
    return res.status(StatusCodes.OK).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.message;
    ErrorMessage.message = errorMessage.cart.getCart;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

const removeFromCart = async (req, res) => {
  //:id
  try {
    const response = await CartServices.removeFromCart(req.params.id);
    SuccessMessage.data = response;
    SuccessMessage.message = successMessage.cart.removeFromCart;
    return res.status(StatusCodes.OK).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.message;
    ErrorMessage.message = errorMessage.cart.removeFromCart;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

const clearCart = async (req, res) => {
  //userid
  try {
    const response = await CartServices.clearCart(req.params.id);
    SuccessMessage.data = response;
    SuccessMessage.message = successMessage.cart.clearCart;
    return res.status(StatusCodes.OK).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.message;
    ErrorMessage.message = errorMessage.cart.clearCart;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

const increaseQuantity = async (req, res) => {
  //:id
  try {
    const response = await CartServices.increaseQuantity(req.params.id);
    SuccessMessage.data = response;
    SuccessMessage.message = successMessage.cart.increaseQuantity;
    return res.status(StatusCodes.OK).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.message;
    ErrorMessage.message = errorMessage.cart.increaseQuantity;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

const decreaseQuantity = async (req, res) => {
  try {
    const response = await CartServices.decreaseQuantity(req.params.id);
    SuccessMessage.message = successMessage.cart.decreaseQuantity;
    SuccessMessage.data = response;
    return res.status(StatusCodes.OK).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.message;
    ErrorMessage.message = errorMessage.cart.decreaseQuantity;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

module.exports = {
  addToCart,
  clearCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  getCart,
};
