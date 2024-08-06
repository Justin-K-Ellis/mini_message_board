const pool = require("./pool.js");
const cleanDate = require("../modules/clean_date.js");

getAllPostData = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
};

insertPost = async (postData) => {
  const { userName, userPost } = postData;
  const date = cleanDate();
  await pool.query(
    "INSERT INTO posts (user_name, user_post, likes, date) VALUES ($1, $2, 1, $3)",
    [userName, userPost, date]
  );
};

deletePost = async (id) => {
  await pool.query("DELETE FROM posts WHERE ID = $1", [id]);
};

module.exports = { getAllPostData, insertPost, deletePost };
