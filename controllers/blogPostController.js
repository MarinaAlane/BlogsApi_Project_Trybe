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
  res.status(allPosts.code).json(allPosts.posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await blogPostService.getPostById(id);
  return post.message
    ? res.status(post.code).json({ message: post.message })
    : res.status(post.code).json(post.postData);
};

const editPost = async (req, res) => {
  const { id } = req.params;
  const userId = req.decoded.id;
  const dataToEdit = req.body;
  const post = blogPostService.editPost(
    id, userId, dataToEdit,
  );
  
  return post.message
    ? res.status(post.code).json({ message: post.message })
    : res.status(post.code).json(post.postData);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const userId = req.decoded.id;
  const post = await blogPostService.deletePost(id, userId);

  return post.message
    ? res.status(post.code).json({ message: post.message })
    : res.status(post.code).json();
};

module.exports = {
  addPost,
  getAllPosts,
  getPostById,
  editPost,
  deletePost,
};