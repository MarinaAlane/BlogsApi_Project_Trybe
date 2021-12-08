const router = require('express').Router();
const auth = require('../middlewares/validations/auth');
const { createPost } = require('../middlewares/post');
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

module.exports = router;