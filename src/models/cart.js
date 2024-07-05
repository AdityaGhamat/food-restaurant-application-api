const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    totalPrice: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    image: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
