const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

const homeController = async (req, res) => {
  const messages = await db.getMessages();
  res.render("index", { title: "Mini Message Board", messages });
};

const newController = {
  get: (req, res) => {
    res.render("form", { title: "New Message" });
  },
  post: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        title: "New Message",
        errors: errors.array(),
        data: req.body,
      });
    }
    const messageText = req.body.message;
    const messageUser = req.body.author;

    await db.addMessage(messageText, messageUser);
    res.redirect("/");
  },
};

const getMessageById = async (req, res) => {
  const id = Number(req.params.id);
  const message = await db.getMessageById(id);

  if (!message) return res.status(404).send("Message not found");

  res.render("message", {
    title: `Message from ${message.username}`,
    message,
  });
};

module.exports = { homeController, newController, getMessageById };
