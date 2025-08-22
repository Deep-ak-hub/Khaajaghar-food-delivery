const bannerRouter = require("express").Router();
const bannerController = require("../controllers/banner.controller");

bannerRouter.get("/", bannerController.getBanner);
module.exports = bannerRouter;
