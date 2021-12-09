const router = require('express').Router();
const auth = require('../middlewares/validations/auth');
const {
  createPost,
  getAllPosts,
  getPostById,
} = require('../middlewares/post');
const {
  validateTitle,
  validateContent,
  validateCategoryId,
  validateCategory,
} = require('../middlewares/validations/post');

router.post(
  '/',
  auth,
  validateTitle,
  validateContent,
  validateCategoryId,
  validateCategory,
  createPost,
);

router.get(
  '/',
  auth,
  getAllPosts,
);

router.get(
  '/:id',
  auth,
  getPostById,
);

module.exports = router;