const { cloudinaryServices } = require("../services/cloudinary.services");
const createDate = require("../utils/createDate");
const { randomStringGenerator } = require("../utils/randomStringGenerator");
const bcrypt = require("bcryptjs");

class AuthController {
  registerUser = async (req, res, next) => {
    try {
      const data = req.body;
      const file = req.file;

      data.image = await cloudinaryServices.singleFileUpload(
        file.path,
        "users/"
      );

      // const salt = bcrypt.genSaltSync(12)
      // data.password = bcrypt.hashSync(data.password, salt)
      data.password = bcrypt.hashSync(data.password, 12);

      data.activationTOken = randomStringGenerator();

      data.expiryTime = createDate(new Date(), 1);

      data.status = "inactive";

      res.json({
        data: data,
        message: "Your account has been registered successfully",
        status: "OK",
      });
    } catch (exception) {
      next(exception);
    }
  };

  activateUserByToken = (req, res, next) => {
    res.json({
      data: {},
      message: "Your account has been activated successfully",
      status: "OK",
    });
  };

  userLogin = (req, res, next) => {
    res.json({
      data: {},
      message: "Your account has been logged in successfully",
      status: "OK",
    });
  };

  userForgetPassword = (req, res, next) => {
    res.json({
      data: {},
      message: "Do you want to forget your password ?",
      status: "OK",
    });
  };

  userResetPassword = (req, res, next) => {
    res.json({
      data: {},
      message: "Do you want to reset your password ?",
      status: "OK",
    });
  };

  getUserProfile = (req, res, next) => {
    res.json({
      data: {},
      message: "Profile Fetched Successfully",
      status: "OK",
    });
  };

  updateUserProfile = (req, res, next) => {
    res.json({
      data: {},
      message: "Profile updated Successfully",
      status: "OK",
    });
  };

  changePassword = (req, res, next) => {
    res.json({
      data: {},
      message: "Your password has been changed successfully",
      status: "OK",
    });
  };

  deactivateAccount = (req, res, next) => {
    res.json({
      data: {},
      message: "Your account has been deactivated successfully",
      status: "OK",
    });
  };

  logoutUserAccount = (req, res, next) => {
    res.json({
      data: {},
      message: "Your account has been logged out successfully",
      status: "OK",
    });
  };

  refreshToken = (req, res, next) => {
    res.json({
      data: {
        accessToken: "newlyGeneratedAccessToken123",
      },
      message: "Token refreshed successfully",
      status: "OK",
    });
  };
}

const authController = new AuthController();
module.exports = authController;
