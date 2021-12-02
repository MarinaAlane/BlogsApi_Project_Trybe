const router = require('express').Router();
const rescue = require('express-rescue');

const blogPostsController = require('../controllers/blogPostsController');

const middleware = require('../middlewares/validates');

router.post('/', middleware.validatePosts, rescue(blogPostsController.createPostBlog));

module.exports = router;
