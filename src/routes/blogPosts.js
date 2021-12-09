const router = require('express').Router();

const blogPostsController = require('../controllers/blogPostsController');

const { tokenExists, tokenValid, 
  checkTitle, checkContent, 
  checkCategoryIds, notUpdateCategory, validateUser } = require('../middlewares/validations');

router.post('/', tokenExists, tokenValid, 
checkTitle, checkContent, checkCategoryIds, blogPostsController.createBlogPost);

router.get('/', tokenExists, 
tokenValid, blogPostsController.getAllPosts);

router.get('/:id', tokenExists, tokenValid, blogPostsController.findPostId);

router.put('/:id', 
tokenExists, tokenValid, checkTitle, 
checkContent, validateUser, notUpdateCategory, blogPostsController.updatePost);

module.exports = router;