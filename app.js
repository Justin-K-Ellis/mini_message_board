const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;
const router = require("./router.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
