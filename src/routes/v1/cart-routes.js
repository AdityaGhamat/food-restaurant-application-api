const express = require("express");
const { CartController } = require("../../controllers");
const { CartValidationMiddleware } = require("../../middlewares");
const router = express.Router();

router.post(
  "/addtocart/:id",
  CartValidationMiddleware.validateCart,
  CartController.addToCart
);
router.get("/get/:id", CartController.getCart);

router.delete(
  "/removefromcart/:id",

  CartController.removeFromCart
);
router.put("/increment/:id", CartController.increaseQuantity);
router.put("/decrement/:id", CartController.decreaseQuantity);
router.put("/clear/:id", CartController.clearCart);

module.exports = router;
