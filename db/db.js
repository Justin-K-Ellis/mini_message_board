const cleanDate = require("../modules/clean_date.js");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: cleanDate(),
    likes: 1,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: cleanDate(),
    likes: 1,
  },
];

module.exports = messages;
