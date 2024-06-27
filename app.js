const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.redirect("/index.html");
});

app.use("/index.html", express.static("views"));

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
