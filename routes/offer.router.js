const offerRouter = require("express").Router();
const offerController = require("../controllers/offer.controller");

offerRouter.get("/", offerController.getOffers);

module.exports = offerRouter;
