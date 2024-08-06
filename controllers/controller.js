const db = require("../db/queries.js");

const getMessages = async (req, res) => {
  const posts = await db.getAllPostData();
  res.render("index", { posts });
};

const getNewMessage = (req, res) => {
  res.render("new");
};

const postMessage = async (req, res) => {
  const userName = req.body.user_name;
  const userPost = req.body.user_post;
  await db.insertPost({ userName, userPost });
  res.redirect("/");
};

// todo: delete post
const deletePost = async (req, res) => {
  const id = req.params.id;
  await db.deletePost(id);
  res.redirect("/");
};

// Todo; upvote post
const upVote = (req, res) => {
  console.log("One upvote!");
  res.end();
};

module.exports = {
  getMessages,
  getNewMessage,
  postMessage,
  upVote,
  deletePost,
};
