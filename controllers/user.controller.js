class UserController {
  getUser = (req, res, next) => {
    const data = [
      {
        id: 1,
        userName: "userName1",
        userAddress: "userAddress",
        userContact: 980000000,
        userEmail: "useremail@gmail.com",
      },
    ];

    res.json({
      data: data,
      message: "user fetched successfully",
      status: "OK",
    });
  };
}

const userController = new UserController();

module.exports = userController;
