const { CartRepository, UserRepository } = require("../repositories");
const { Logger } = require("../config");

const cartRepository = new CartRepository();
const userRepository = new UserRepository();

const addToCart = async (
  userId,
  { id, name, price, rating, image, quantity }
) => {
  try {
    const existingItem = await cartRepository.findOne({ id, userId });
    if (existingItem) {
      const updatedItem = await cartRepository.update(
        existingItem._id,
        {
          $set: {
            quantity: existingItem.quantity + 1,
            totalPrice: existingItem.price * (existingItem.quantity + 1),
          },
        },
        {
          upsert: true,
          new: true,
        }
      );
      return updatedItem;
    }
    if (!existingItem) {
      const newCartItem = await cartRepository.create({
        id,
        name,
        price,
        rating,
        image,
        quantity,
        userId,
        totalPrice: price * quantity,
      });
      const savedCartItem = await newCartItem.save();
      const user = await userRepository.update(userId, {
        $push: {
          cartItems: savedCartItem._id,
        },
      });
      const savedCartItems = await user.save();
      return savedCartItems;
    }
  } catch (error) {
    Logger.error("Something went wrong in cart-services:addToCart");
    throw error;
  }
};

const getCart = async (id) => {
  try {
    console.log(id);
    const user = await userRepository.findByIdAndPopulate(id, "cartItems");
    const cartItems = user.cartItems;
    return cartItems;
  } catch (error) {
    Logger.error("Something went wrong in cart-services:getCart");
    throw error;
  }
};

const removeFromCart = async (id) => {
  try {
    const response = await cartRepository.deleteById(id);
    return response;
  } catch (error) {
    Logger.error("Something went wrong in cart-services:removeFromCart");
    throw error;
  }
};

const clearCart = async (userId) => {
  try {
    const response = await cartRepository.deleteMany(userId);
    const user = await userRepository.update(
      { userId },
      {
        cartItems: [],
      }
    );
    return response;
  } catch (error) {
    Logger.error("Something went wrong in cart-services:clearCart");
    throw error;
  }
};

const increaseQuantity = async (cartId) => {
  try {
    const cartItem = await cartRepository.findById(cartId);
    const quantity = cartItem.quantity + 1;
    const totalPrice = cartItem.price * (cartItem.quantity + 1);
    const cart = await cartRepository.update(cartId, {
      $set: {
        quantity: quantity,
        totalPrice: totalPrice,
      },
    });
    return cart;
  } catch (error) {
    Logger.error("Something went wrong in cart-services.js:increaseQuantity");
    throw error;
  }
};

const decreaseQuantity = async (cartId) => {
  try {
    const cartItem = await cartRepository.findById(cartId);
    const quantity = cartItem.quantity - 1;
    const totalPrice = cartItem.totalPrice - cartItem.price;
    const cart = await cartRepository.update(cartId, {
      $set: {
        quantity: quantity,
        totalPrice: totalPrice,
      },
    });
    return cart;
  } catch (error) {
    Logger.error("Something went wrong in cart-services.js:decreaseQuantity");
    throw error;
  }
};

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
};
