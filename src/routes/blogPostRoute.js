const router = require('express').Router();
const controller = require('../controllers/blogPostsController');
const { validateToken } = require('../middlewares/validateToken');
const { 
  validateTitle, 
  validateContent, 
  validateCategorysId,
  validateUpdatePostNoCategories,
  validateAuthorizedUser } = require('../middlewares/blogPostValidation');

router.post('/post', 
  validateToken,
  validateTitle, 
  validateContent, 
  validateCategorysId,
  controller.createPost);

router.get('/post', validateToken, controller.getAllPosts);

router.get('/post/:id', validateToken, controller.getPostById);

router.put('/post/:id', 
  validateToken, 
  validateAuthorizedUser,
  validateUpdatePostNoCategories,
  validateTitle, 
  validateContent, 
  controller.updatePostById);

router.delete('/post/:id', 
  validateToken, 
  validateAuthorizedUser,
  controller.deletePostById);

module.exports = router;