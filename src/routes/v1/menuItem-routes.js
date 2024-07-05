const express = require("express");
const { MenuItemController } = require("../../controllers");
const {
  MenuItemValidationMiddleware,
  VerifyToken,
} = require("../../middlewares");
const router = express.Router();
router.post(
  "/create",
  VerifyToken,
  MenuItemValidationMiddleware.validateMenuItem,
  MenuItemController.createMenuItem
);
router.get("/menuitem/:id", MenuItemController.menuItem);
router.get("/allmenuitems", MenuItemController.AllMenuItems);
router.put(
  "/menuitem/:id",
  VerifyToken,
  MenuItemValidationMiddleware.validateMenuItem,
  MenuItemController.updateMenuItem
);
router.delete("/menuitem/:id", VerifyToken, MenuItemController.removeMenuItem);
router.put(
  "/createreview/:id",
  VerifyToken,
  MenuItemValidationMiddleware.validateReview,
  MenuItemController.createReview
);

module.exports = router;
