const { UserRepository } = require("../repositories");
const bcrypt = require("bcrypt");
const userRepository = new UserRepository();
const jwt = require("jsonwebtoken");
const { Logger } = require("../config");

const signupUser = async (name, email, password) => {
  try {
    const ExistingUser = await userRepository.findOne({ email });
    if (!ExistingUser) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const response = await userRepository.create({
        name,
        email,
        password: hashedPassword,
      });
      return response;
    }
  } catch (error) {
    Logger.error("Error in user-services.js:signupUser");
    throw error;
  }
};

const signinUser = async (email, password) => {
  try {
    const ExistingUser = await userRepository.findOne({ email });
    const MatchPassword = await bcrypt.compare(password, ExistingUser.password);
    const token = jwt.sign({ id: ExistingUser._id }, process.env.JWT_KEY, {
      expiresIn: "2h",
    });
    return token;
  } catch (error) {
    Logger.error("Error in user-services.js:signinUser");
    throw error;
  }
};

const getUser = async (id) => {
  try {
    const user = await userRepository.findById(id);
    return user;
  } catch (error) {
    Logger.error("Error in user-services:getUser");
    throw error;
  }
};

const getAllUser = async () => {
  try {
    const user = await userRepository.findAll();
    return user;
  } catch (error) {
    Logger.error("Error in user-services:getAllUser");
    throw error;
  }
};

const createAddress = async (id, data) => {
  try {
    const user = await userRepository.findById(id);
    user.address = data;
    await user.save();
    return user;
  } catch (error) {
    Logger.error("Error in user-services:createAddress");
    throw error;
  }
};

const getAddress = async (id) => {
  try {
    const user = await userRepository.findById(id);
    return user.address;
  } catch (error) {
    Logger.error("Error in user-services:createAddress");
    throw error;
  }
};

const updateAddress = async (id, data) => {
  try {
    const user = await userRepository.update(id, data);
    return user;
  } catch (error) {
    Logger.error("Error in user-services:updateAddress");
    throw error;
  }
};

const updatePhoneNumber = async (id, data) => {
  try {
    const user = await userRepository.update(id, data);
    return user;
  } catch (error) {
    Logger.error("Error in user-services:updatePhoneNumber");
    throw error;
  }
};

module.exports = {
  signinUser,
  signupUser,
  getAllUser,
  getUser,
  createAddress,
  getAddress,
  updateAddress,
  updatePhoneNumber,
};
