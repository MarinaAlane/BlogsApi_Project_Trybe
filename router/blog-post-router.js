const express = require('express');

const { createPost } = require('../controllers/blog-post-controller');

const { validToken } = require('../middlewares/validateToken');

const {
  validatefields,
  getCategories,
} = require('../middlewares/validatePosts');

const router = express.Router();

router.post('/',
validatefields,
getCategories,
validToken,
createPost);

module.exports = router;