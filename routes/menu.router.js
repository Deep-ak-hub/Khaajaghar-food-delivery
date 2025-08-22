const menuRouter = require("express").Router()
const menuController = require("../controllers/menu.controller")

menuRouter.get("/", menuController.getMenu)

module.exports = menuRouter