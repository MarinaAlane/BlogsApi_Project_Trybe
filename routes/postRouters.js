const router = require('express').Router();
const authToken = require('../auth/authUser');
const { createPost, getPosts } = require('../controllers/postController');
// const { validateCategorieExists } = require('../middlewares/categorieMiddlewares');
const { validatePostFields } = require('../middlewares/postMiddlewares');

router.post('/post', authToken, validatePostFields, createPost);
router.get('/post', authToken, getPosts);

module.exports = router;
