const { createUser, getAllUsers, getUserById } = require('./userService');
const { loginUser } = require('./loginService');
const { createCategory, getCategories } = require('./categoryServices');
const { createPost, getAllPosts } = require('./postServices');

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