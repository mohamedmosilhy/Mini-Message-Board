const express = require("express");
const app = express();
const port = 3000;
let indexRouter = require("./routers/indexRouter");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", indexRouter);

app.listen(port);
