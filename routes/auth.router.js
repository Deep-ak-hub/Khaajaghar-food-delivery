const authRouter = require("express").Router()

const authController = require("../controllers/auth.controller")
const loginCheck = require("../middlewares/auth.middleware")

authRouter.post("/register",authController.registerUser)
authRouter.post("/login", authController.userLogin)
authRouter.post("/password/forget", authController.userForgetPassword)
authRouter.patch("/password/change", authController.changePassword)
authRouter.patch("/passoword/reset", authController.userResetPassword)
authRouter.patch("/account/deactivate", authController.deactivateAccount)

authRouter.get("/activate/:token", authController.activateUserByToken)

authRouter.get("/me", loginCheck(['admin']) ,authController.getUserProfile)
authRouter.patch("/profile/update", loginCheck() ,authController.updateUserProfile)

authRouter.post("/logout", authController.logoutUserAccount)

module.exports = authRouter
