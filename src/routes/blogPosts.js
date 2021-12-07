const router = require('express').Router();

const blogPostsController = require('../controllers/blogPostsController');

const { tokenExists, tokenValid, 
  checkTitle, checkContent, checkCategoryIds } = require('../middlewares/validations');

router.post('/', tokenExists, tokenValid, 
checkTitle, checkContent, checkCategoryIds, blogPostsController.createBlogPost);

module.exports = router;