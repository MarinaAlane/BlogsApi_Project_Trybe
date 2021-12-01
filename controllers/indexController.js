const loginUser = require('./loginController');
const { getAllUsers, createUser, getUserById } = require('./userController');
const { createCategory, getCategories } = require('./categoryController');
const { createPost, getAllPosts } = require('./postController');

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  createCategory,
  getCategories,
  createPost,
  getAllPosts,
};