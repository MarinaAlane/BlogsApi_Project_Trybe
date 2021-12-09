const router = require('express').Router();
const authToken = require('../auth/authUser');
const { createPost, getPosts, getPostsById } = require('../controllers/postController');
// const { validateCategorieExists } = require('../middlewares/categorieMiddlewares');
const { validatePostFields, validatePostExist } = require('../middlewares/postMiddlewares');

router.post('/post', authToken, validatePostFields, createPost);
router.get('/post/:id', authToken, validatePostExist, getPostsById);
router.get('/post', authToken, getPosts);

module.exports = router;
