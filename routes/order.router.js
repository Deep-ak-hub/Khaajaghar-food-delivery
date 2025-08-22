const orderRouter = require("express").Router()
const orderController = require("../controllers/order.controller")

orderRouter.get('/', orderController.getOrder)

module.exports = orderRouter
