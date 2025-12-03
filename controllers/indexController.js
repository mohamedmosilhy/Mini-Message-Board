const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "How's everyone doing?",
    user: "Sara",
    added: new Date(),
  },
  {
    text: "Just finished a Node.js project!",
    user: "Mohamed",
    added: new Date(),
  },
  {
    text: "Learning Express is fun!",
    user: "Lina",
    added: new Date(),
  },
  {
    text: "Anyone up for a quick code review?",
    user: "David",
    added: new Date(),
  },
];

const homeController = (req, res) => {
  res.render("index", { title: "Mini Message Board", messages });
};

const newController = {
  get: (req, res) => {
    res.render("form", { title: "New Message" });
  },
  post: (req, res) => {
    const messageText = req.body.message;
    const messageUser = req.body.author;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/");
  },
};

const getMessageById = (req, res) => {
  const messageId = parseInt(req.params.id, 10);
  if (messageId >= 0 && messageId < messages.length) {
    const message = messages[messageId];
    res.render("message", { title: `Message from ${message.user}`, message });
  } else {
    res.status(404).send("Message not found");
  }
};
module.exports = {
  homeController,
  newController,
  getMessageById,
};
