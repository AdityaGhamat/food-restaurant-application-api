const express = require("express");
const router = express.Router();
const { RestaurantController } = require("../../controllers");

router.post("/create", RestaurantController.createRestaurant);
router.get("/", RestaurantController.getRestaurant);

module.exports = router;
