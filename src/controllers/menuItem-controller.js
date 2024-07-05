const { MenuItemServices } = require("../services");
const { SuccessMessage, ErrorMessage } = require("../utils/comman");
const { StatusCodes } = require("http-status-codes");
const errorMessage = require("../utils/message/error-message.json");
const successMessage = require("../utils/message/success-message.json");

const createMenuItem = async (req, res) => {
  try {
    const response = await MenuItemServices.createMenuItem(req.body);
    if (!response) {
      ErrorMessage.message = errorMessage.menuItem.createMenuItem;
      ErrorMessage.error = {};
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorMessage);
    }
    SuccessMessage.data = response;
    SuccessMessage.message = successMessage.menuItem.createMenuItem;
    return res.status(StatusCodes.CREATED).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.message;
    ErrorMessage.message = errorMessage.menuItem.createMenuItem;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

const menuItem = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await MenuItemServices.getMenuItem(id);
    if (!response) {
      ErrorMessage.message = errorMessage.menuItem.getMenuItem;
      ErrorMessage.error = {};
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorMessage);
    }
    SuccessMessage.data = response;
    SuccessMessage.message = successMessage.menuItem.getMenuItem;
    return res.status(StatusCodes.OK).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.message;
    ErrorMessage.message = errorMessage.menuItem.getMenuItem;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

const AllMenuItems = async (req, res) => {
  try {
    const q = req.query.q;
    const response = await MenuItemServices.searchMenuItem(q);
    if (!response) {
      ErrorMessage.message = errorMessage.menuItem.getMenuItem;
      ErrorMessage.error = {};
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorMessage);
    }
    SuccessMessage.data = response;
    SuccessMessage.message = successMessage.menuItem.getMenuItem;
    return res.status(StatusCodes.OK).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.message;
    ErrorMessage.message = errorMessage.menuItem.getMenuItem;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

const updateMenuItem = async (req, res) => {
  try {
    const {
      itemName,
      description,
      category,
      price,
      quantity,
      ratings,
      totalPrice,
      imageUrl,
      ingredients,
      dietryInfo,
    } = req.body;
    const id = req.params.id;
    const ExisitingMenuItem = await MenuItemServices.updateMenuItem(id);
    if (!ExisitingMenuItem) {
      ErrorMessage.message = errorMessage.menuItem.updateMenuItem;
      ErrorMessage.error = {};
      return es.status(StatusCodes.BAD_REQUEST).json(ErrorMessage);
    }
    const updatedItem = await MenuItemServices.updateMenuItem(id, {
      itemName,
      description,
      category,
      price,
      quantity,
      ratings,
      totalPrice,
      imageUrl,
      ingredients,
      dietryInfo,
    });
    if (!updatedItem) {
      ErrorMessage.message = errorMessage.menuItem.updateMenuItem;
      ErrorMessage.error = {};
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorMessage);
    }
    SuccessMessage.data = updatedItem;
    SuccessMessage.message = successMessage.menuItem.updateMenuItem;
    return res.status(StatusCodes.ACCEPTED).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.message;
    ErrorMessage.message = errorMessage.menuItem.updateMenuItem;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

const removeMenuItem = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await MenuItemServices.removeMenuItem(id);
    if (!response) {
      ErrorMessage.message = errorMessage.menuItem.removeMenuItem;
      ErrorMessage.error = {};
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorMessage);
    }
    SuccessMessage.data = response;
    SuccessMessage.message = successMessage.menuItem.removeMenuItem;
    return res.status(StatusCodes.OK).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.message;
    ErrorMessage.message = errorMessage.menuItem.removeMenuItem;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

const createReview = async (req, res) => {
  try {
    const id = req.params.id;
    const { review } = req.body;
    const response = await MenuItemServices.createReview(id, review);
    SuccessMessage.data = response;
    SuccessMessage.message = successMessage.menuItem.createReview;
    return res.status(StatusCodes.CREATED).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.message;
    ErrorMessage.message = errorMessage.menuItem.createReview;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

module.exports = {
  createMenuItem,
  menuItem,
  AllMenuItems,
  updateMenuItem,
  removeMenuItem,
  createReview,
};
