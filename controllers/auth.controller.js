class AuthController {
  registerUser = (req, res, next) => {
    const data = req.body;
    res.json({
      data: { data },
      message: "Your account has been registered successfully",
      status: "OK",
    });
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

const authController = new AuthController()
module.exports = authController