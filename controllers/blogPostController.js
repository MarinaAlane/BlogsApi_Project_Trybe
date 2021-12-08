const blogPostService = require('../services/blogPostService');

const addPost = async (req, res) => {
  const { id } = req.decoded;
  const postData = req.body;
  const post = await blogPostService
    .addPost(postData.categoryIds, id, postData.title, postData.content);
  return post.message
    ? res.status(post.code).json({ message: post.message })
    : res.status(post.code).json(post.postData);
};

const getAllPosts = async (_req, res) => {
  const allPosts = await blogPostService.getAllPosts();
  res.status(200).json(allPosts);
};

module.exports = {
  addPost,
  getAllPosts,
};