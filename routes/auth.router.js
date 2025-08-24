const authRouter = require("express").Router()

const authController = require("../controllers/auth.controller")

const { ChangePasswordDTO } = require("../dto/auth/change-password.dto")
const { DeactivateAccountDTO } = require("../dto/auth/deactivate-account.dto")
const { forgotPasswordDTO } = require("../dto/auth/forget-password.dto")
const { LoginDTO } = require("../dto/auth/login.dto")
const { RefreshTokenDTO } = require("../dto/auth/refresh-token.dto")
const { RegisterDTO } = require("../dto/auth/register.dto")
const { resetPasswordDTO } = require("../dto/auth/reset-password.dto")
const { UpdateProfileDTO } = require("../dto/auth/update-profile.dto")

const loginCheck = require("../middlewares/auth.middleware")
const uploader = require("../middlewares/uploader.middleware")
const validateBodyData = require("../middlewares/validator.middleware")

authRouter.post("/register", uploader().single('image') , validateBodyData(RegisterDTO),authController.registerUser)
authRouter.post("/login", validateBodyData(LoginDTO), authController.userLogin)

authRouter.post("/password/forget", validateBodyData(forgotPasswordDTO), authController.userForgetPassword)
authRouter.patch("/password/change", validateBodyData(ChangePasswordDTO), authController.changePassword)
authRouter.patch("/passoword/reset", validateBodyData(resetPasswordDTO), authController.userResetPassword)

authRouter.patch("/account/deactivate", validateBodyData(DeactivateAccountDTO), authController.deactivateAccount)

authRouter.get("/activate/:token", authController.activateUserByToken)

authRouter.get("/me", loginCheck(['admin']) ,authController.getUserProfile)
authRouter.patch("/profile/update", loginCheck(UpdateProfileDTO), validateBodyData() ,authController.updateUserProfile)

authRouter.post("/token/refresh", validateBodyData(RefreshTokenDTO) ,authController.refreshToken)

authRouter.post("/logout", authController.logoutUserAccount)

module.exports = authRouter
