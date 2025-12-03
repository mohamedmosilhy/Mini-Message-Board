const {
  homeController,
  newController,
  getMessageById,
} = require("../controllers/indexController");

const express = require("express");

const router = express.Router();

router.get("/", homeController);
router.get("/new", newController.get);
router.post("/new", newController.post);
router.get("/messages/:id", getMessageById);

module.exports = router;
