const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      enum: [
        "Appetizers",
        "Soups",
        "Salads",
        "Entrees",
        "Sides",
        "Desserts",
        "Beverages",
      ],
      default: "Entrees",
    },
    price: {
      type: Number,
      min: 0,
    },
    quantity: {
      type: Number,
      min: 1,
    },
    totalPrice: {
      type: Number,
      min: 0,
    },
    imageUrl: {
      type: String,
    },
    ingredients: {
      type: [String],
    },
    dietryInfo: {
      type: String,
    },
    ratings: {
      type: Number,
      min: 0,
      max: 5,
    },
    reviews: {
      type: [String],
    },
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
  },
  { timestamps: true }
);
const Menuitem = mongoose.model("Menuitem", menuItemSchema);

module.exports = Menuitem;
