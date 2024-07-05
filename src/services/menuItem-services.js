const { MenuItemRepository, RestaurantRepository } = require("../repositories");
const { Logger } = require("../config");

const menuItemRepository = new MenuItemRepository();
const restaurantRepository = new RestaurantRepository();
const createMenuItem = async (data) => {
  try {
    const response = await menuItemRepository.create(data);
    const { restaurantId } = data;
    console.log(restaurantId);
    if (restaurantId) {
      const restaurant = await restaurantRepository.update(
        { _id: restaurantId },
        { $push: { menu: response._id } },
        { new: true }
      );
    }
    return response;
  } catch (error) {
    Logger.error("Error in menuitem-services:createMenuItem");
    throw error;
  }
};

const getMenuItem = async (id) => {
  try {
    const response = await menuItemRepository.findById(id);
    return response;
  } catch (error) {
    Logger.error("Error in menuitem-services:getMenuItems");
    throw error;
  }
};

const getAllMenuItems = async () => {
  try {
    const response = await menuItemRepository.findAll();
    return response;
  } catch (error) {
    Logger.error("Error in menuitem-services:getAllMenuItems");
    throw error;
  }
};

const updateMenuItem = async (id, data) => {
  try {
    const response = await menuItemRepository.update(id, data);
    return response;
  } catch (error) {
    Logger.error("Error in menuitem-services:updateMenuItems");
    throw error;
  }
};

const removeMenuItem = async (id) => {
  try {
    const response = await menuItemRepository.deleteOnlyOne(id);
    return response;
  } catch (error) {
    Logger.error("Error in menuitem-services:removeMenuItem");
    throw error;
  }
};

const searchMenuItem = async (q) => {
  try {
    const keys = ["itemName", "category", "ingredients", "dietaryInfo"];
    const search = (data) => {
      return data.filter((item) => {
        keys.some((key) => {
          const itemValue = item[key];
          return (
            itemValue === "string" &&
            itemValue.toLowerCase().includes(q.toLowerCase())
          );
        });
      });
    };
    const menuItems = await menuItemRepository.findAll();
    return q ? search(menuItems) : menuItems;
  } catch (error) {
    Logger.error("Error in menuitem-services:searchMenuItem");
    throw error;
  }
};

const createReview = async (id, data) => {
  try {
    const menuItem = await menuItemRepository.findById(id);
    const response = menuItem.reviews.push(data);
    await menuItem.save();
    return menuItem;
  } catch (error) {
    Logger.error("Error in menuitem-services:createReview");
    throw error;
  }
};

module.exports = {
  createMenuItem,
  getAllMenuItems,
  getMenuItem,
  updateMenuItem,
  removeMenuItem,
  searchMenuItem,
  createReview,
};
