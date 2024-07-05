const { RestaurantRepository } = require("../repositories");
const { Logger } = require("../config");
const restaurantRepository = new RestaurantRepository();

const createRestaurant = async (data) => {
  try {
    const response = await restaurantRepository.create(data);
    return response;
  } catch (error) {
    Logger.error("Something went wrong in restaurantServices:createRestaurant");
    throw error;
  }
};

const getRestaurant = async (data) => {
  try {
    const response = await restaurantRepository.findAll(data);
    return response;
  } catch (error) {
    Logger.error("Something went wrong in restaurantServices:getRestaurant");
    throw error;
  }
};

module.exports = { createRestaurant, getRestaurant };
