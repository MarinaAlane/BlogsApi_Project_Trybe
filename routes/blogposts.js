const express = require('express');

const router = express.Router();

const { createBlogPosts } = require('../controller/blogposts');

const { checkToken, checkBlogPost, checkCategoryIds } = require('../middleware/checkInfoUser');

router.post('/', checkToken, checkBlogPost, checkCategoryIds, createBlogPosts);

module.exports = router;