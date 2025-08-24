const menuRouter = require("express").Router()
const menuController = require("../controllers/menu.controller")
const { CreateOrderDTO } = require("../dto/order/create-order.dto")
const UpdateOrderDTO = require("../dto/order/update-order-status.dto")
const validateBodyData = require("../middlewares/validator.middleware")

menuRouter.get("/", menuController.getMenu)
menuRouter.post("/menu/create", validateBodyData(CreateOrderDTO) ,menuController.creteMenu)
menuRouter.put("/menu/update", validateBodyData(UpdateOrderDTO) ,menuController.updateMenu)

module.exports = menuRouter