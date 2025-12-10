const db = require("../db/queries");

const homeController = async (req, res) => {
  const messages = await db.getMessages();
  console.log(messages);
  res.render("index", { title: "Mini Message Board", messages });
};

const newController = {
  get: (req, res) => {
    res.render("form", { title: "New Message" });
  },
  post: async (req, res) => {
    const messageText = req.body.message?.trim();
    const messageUser = req.body.author?.trim();

    if (!messageText || !messageUser)
      return res.status(400).send("Invalid input");

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
