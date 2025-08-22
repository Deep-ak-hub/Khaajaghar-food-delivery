const restaurantRouter = require("express").Router();

const restaurantController = require("../controllers/restaurant.controller");

restaurantRouter.get("/", restaurantController.getRestaurant);

module.exports = restaurantRouter;
