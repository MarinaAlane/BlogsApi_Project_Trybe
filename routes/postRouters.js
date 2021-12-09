const router = require('express').Router();
const authToken = require('../auth/authUser');
const {
  createPost,
  getPosts,
  getPostsById,
  deletePosts,
} = require('../controllers/postController');
const { validateCategorieExists } = require('../middlewares/categorieMiddlewares');
const {
  validatePostFields,
  validatePostExist,
  validateUserOwnerPost,
} = require('../middlewares/postMiddlewares');

router.post('/post', authToken, validatePostFields, validateCategorieExists, createPost);
router.get('/post/:id', authToken, validatePostExist, getPostsById);
router.get('/post', authToken, getPosts);
router.delete('/post/:id', authToken, validatePostExist, validateUserOwnerPost, deletePosts);

module.exports = router;
