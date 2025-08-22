const frontRouter = require("express").Router();

const frontController = require("../controllers/front.controller");

frontRouter.get("/", frontController.getFrontHome);
frontRouter.get("/about-us", frontController.getFrontAboutUs);

module.exports = frontRouter;
