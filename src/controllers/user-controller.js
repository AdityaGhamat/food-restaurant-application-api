const { UserServices } = require("../services");
const { SuccessMessage, ErrorMessage } = require("../utils/comman");
const { StatusCodes } = require("http-status-codes");
const errorMessage = require("../utils/message/error-message.json");
const successMessage = require("../utils/message/success-message.json");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const response = await UserServices.signupUser(name, email, password);
    SuccessMessage.data = response;
    SuccessMessage.message = successMessage.user.createUser;
    res.status(StatusCodes.CREATED).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.message;
    ErrorMessage.message = errorMessage.user.createUser;
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await UserServices.signinUser(email, password);
    SuccessMessage.data = response;
    SuccessMessage.message = successMessage.user.loginUser;
    res.status(StatusCodes.OK).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.message;
    ErrorMessage.message = errorMessage.user.loginUser;
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

const getUser = async (req, res) => {
  try {
    const response = await UserServices.getUser(req.id);
    SuccessMessage.data = response;
    SuccessMessage.message = successMessage.user.getUser;
    res.status(StatusCodes.OK).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.errors;
    ErrorMessage.message = errorMessage.user.getUser;
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const response = await UserServices.getAllUser();
    SuccessMessage.data = response;
    SuccessMessage.message = successMessage.user.getAllUsers;
    res.status(StatusCodes.OK).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.errors;
    ErrorMessage.message = errorMessage.user.getAllUsers;
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

const createAddress = async (req, res) => {
  try {
    const response = await UserServices.createAddress(req.id, req.body.address);
    SuccessMessage.data = response;
    SuccessMessage.message = successMessage.user.createAddress;
    res.status(StatusCodes.CREATED).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.errors;
    ErrorMessage.message = errorMessage.user.createAddress;
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

const getAddress = async (req, res) => {
  try {
    const response = await UserServices.getAddress(req.id);
    SuccessMessage.data = response;
    SuccessMessage.message = successMessage.user.getAddress;
    res.status(StatusCodes.OK).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error;
    ErrorMessage.message = errorMessage.user.getAddress;
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

const updateAddress = async (req, res) => {
  try {
    const id = req.params.id;
    const { address } = req.body;
    const ExistingUser = await UserServices.getUser(id);
    ExistingUser.address = address;
    await ExistingUser.save();
    const response = ExistingUser;
    SuccessMessage.data = response;
    SuccessMessage.message = successMessage.user.updateAddress;
    res.status(StatusCodes.ACCEPTED).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.message;
    ErrorMessage.message = errorMessage.user.updateAddress;
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

const updatePhoneNumber = async (req, res) => {
  try {
    const id = req.params.id;
    const { phoneNumber } = req.body;
    const ExistingUser = await UserServices.getUser(id);
    ExistingUser.phoneNumber = phoneNumber;
    await ExistingUser.save();
    const response = ExistingUser;
    SuccessMessage.data = response;
    SuccessMessage.message = successMessage.user.updatePhoneNumber;
    res.status(StatusCodes.ACCEPTED).json(SuccessMessage);
  } catch (error) {
    ErrorMessage.error = error.message;
    ErrorMessage.message = errorMessage.user.updatePhoneNumber;
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorMessage);
  }
};

module.exports = {
  createUser,
  loginUser,
  getUser,
  getAllUsers,
  createAddress,
  getAddress,
  updateAddress,
  updatePhoneNumber,
};
