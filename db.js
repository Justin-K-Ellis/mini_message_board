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

module.exports = messages;
