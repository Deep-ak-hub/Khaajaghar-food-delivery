class MenuController {
  getMenu = (req, res, next) => {
    res.json({
      data: {},
      message: "Menu items fetched successull",
      status: "OK",
    });
  };

  creteMenu = (req, res, next) => {
    res.json({
      data: {},
      message: "Menu has been created successfully",
      status: "OK",
    });
  };

  updateMenu = (req, res, next) => {
    res.json({
      data: {},
      message: "Menu has been updated Successfully",
      status: "OK",
    });
  };
}

const menuController = new MenuController();

module.exports = menuController;
