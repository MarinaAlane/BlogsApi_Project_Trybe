const router = require('express').Router();
const authToken = require('../auth/authUser');
const { createPost } = require('../controllers/postController');
// const { validateCategorieExists } = require('../middlewares/categorieMiddlewares');
const { validatePostFields } = require('../middlewares/postMiddlewares');

router.post('/post', authToken, validatePostFields, createPost);

module.exports = router;
