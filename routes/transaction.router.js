const transactionRouter = require("express").Router()
const transactionController = require("../controllers/transaction.controller")

transactionRouter.get("/", transactionController.getTransaction)

module.exports = transactionRouter