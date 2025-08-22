const orderDetailsRouter = require("express").Router();
const orderDetailsController = require("../controllers/order-details.controller");

orderDetailsRouter.get("/", orderDetailsController.getOrderDetails);

module.exports = orderDetailsRouter;
