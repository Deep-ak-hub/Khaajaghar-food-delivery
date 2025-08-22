const feedbackRouter = require("express").Router();

const feedbackController = require("../controllers/feedback.controller");

feedbackRouter.get("/", feedbackController.getFeedback);

module.exports = feedbackRouter;
