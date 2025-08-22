const deliveryRouter = require("express").Router()
const deliveryController = require("../controllers/delivery.controller")


deliveryRouter.get("/", deliveryController.createDelivery)

module.exports = deliveryRouter