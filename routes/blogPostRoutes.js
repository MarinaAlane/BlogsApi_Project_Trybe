const express = require('express');

const { validateJWT } = require('../auth/validateJWT');
const validateBlogPost = require('../middlewares/validateBlogPost');
const postController = require('../controllers/BlogPost');

const router = express.Router();

router.post('/', validateBlogPost, validateJWT, postController.createBlogPost);

module.exports = router;
