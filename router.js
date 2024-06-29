const express = require("express");
const router = express.Router();
const cleanDate = require("./modules/clean_date.js");
const messages = require("./db.js");

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

module.exports = router;
