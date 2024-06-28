const express = require("express");
const router = express.Router();
const cleanDate = require("./modules/clean_date.js");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: cleanDate(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: cleanDate(),
  },
];

router.get("/", (req, res) => {
  res.render("index", { messages });
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/new", (req, res) => {
  const userName = req.body.user_name;
  const userPost = req.body.user_post;
  messages.push({ text: userPost, user: userName, added: cleanDate() });
  res.redirect("/");
});

router.get("/cats", (req, res) => {
  res.render("cats", { cats: cats });
});

module.exports = router;
