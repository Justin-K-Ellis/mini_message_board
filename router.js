const express = require("express");
const router = express.Router();
const controller = require("./controllers/controller.js");

router.get("/", controller.getMessages);
router.get("/new", controller.getNewMessage);
router.post("/new", controller.postMessage);
router.put("/upvote", controller.upVote);
router.post("/delete/:id", controller.deletePost);

module.exports = router;
