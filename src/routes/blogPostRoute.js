const router = require('express').Router();
const controller = require('../controllers/blogPostsController');
const { validateToken } = require('../middlewares/validateToken');
const { validateTitle, 
  validateContent, 
  validateCategorysId } = require('../middlewares/blogPostValidation');

router.post('/post', 
  validateToken,
  validateTitle, 
  validateContent, 
  validateCategorysId,
  controller.createPost);

module.exports = router;