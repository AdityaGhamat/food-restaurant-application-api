const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    items: [
      {
        products: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Menuitem",
        },
        quantity: {
          type: Number,
        },
      },
    ],
    totalPrice: {
      type: Number,
    },
    orderDate: {
      type: Date,
      default: Date.now(),
    },
    status: {
      type: String,
      enum: [
        "Pending",
        "Processing",
        "Shipped",
        "Devlivered",
        "Out for Delivery",
      ],
      default: "Pending",
    },
    shippingAddress: {
      type: String,
    },
    paymentMethod: {
      type: String,
      enum: ["Stripe,Cash on delivery"],
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
