const express = require("express")
const ErrorHandler = require("../middlewares/error-handling.middleware")
const router = require("./router.config")
const app = express()

/*                      ** example of modular router** 
const Router = require("express").Router()
const authController = require("../controllers/auth.controller")
Router.post("/register", authController.registerUser)
 */

// global router
app.get('/', (req, res, next) => {
    res.send("API is running")
})


// Parser
app.use(express.json({
    limit: "5mb"
}))

app.use(express.urlencoded({
    limit: "5mb"
}))

// use modular routers under versioned API path
app.use("/api/v1", router)

// 404 Error
app.use((req, res, next)  => {
    next({
        error: null,
        message: "not found",
        status: "NOT_FOUND_ERR"
    })
})

// Error handling middleware
app.use(ErrorHandler)

module.exports = app