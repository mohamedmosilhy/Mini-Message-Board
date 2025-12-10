const {
  homeController,
  newController,
  getMessageById,
} = require("../controllers/indexController");

const express = require("express");
const { body } = require("express-validator");
const router = express.Router();

router.get("/", homeController);
router.get("/new", newController.get);

router.post(
  "/new",
  [
    body("author")
      .trim()
      .notEmpty()
      .withMessage("Author is required")
      .isLength({ max: 50 })
      .withMessage("Author too long"),

    body("message")
      .trim()
      .notEmpty()
      .withMessage("Message is required")
      .isLength({ max: 500 })
      .withMessage("Message too long"),
  ],
  newController.post
);
router.get("/messages/:id", getMessageById);

module.exports = router;
