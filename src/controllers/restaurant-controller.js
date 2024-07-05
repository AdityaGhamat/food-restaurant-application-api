const { RestaurantServices } = require("../services");
const { SuccessMessage, ErrorMessage } = require("../utils/comman");
const { StatusCodes } = require("http-status-codes");
const errorMessage = require("../utils/message/error-message.json");
const successMessage = require("../utils/message/success-message.json");

const createRestaurant = async (req, res) => {
  try {
    const response = await RestaurantServices.createRestaurant(req.body);
    SuccessMessage.data = response;
    SuccessMessage.message = successMessage.restaurant.createRestaurant;
    res.status(StatusCodes.CREATED).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.message;
    ErrorMessage.message = errorMessage.restaurant.createRestaurant;
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

const getRestaurant = async (req, res) => {
  try {
    const data = { ...req.query };
    console.log(data);
    const response = await RestaurantServices.getRestaurant(data);
    console.log(response);
    SuccessMessage.data = response;
    SuccessMessage.message = successMessage.restaurant.getRestaurant;
    res.status(StatusCodes.OK).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.message;
    ErrorMessage.message = errorMessage.restaurant.createRestaurant;
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

module.exports = { createRestaurant, getRestaurant };
