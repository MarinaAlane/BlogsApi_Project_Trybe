const express = require('express');

const {
  createPost,
  listAllPosts,
} = require('../controllers/blog-post-controller');

const { validToken } = require('../middlewares/validateToken');

const {
  validatefields,
  getCategories,
} = require('../middlewares/validatePosts');

const router = express.Router();

router.get('/', listAllPosts);

router.post('/',
validatefields,
getCategories,
validToken,
createPost);

module.exports = router;