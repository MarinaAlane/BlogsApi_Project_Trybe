const router = require('express').Router();
const blogPostRouter = require('../controllers/blogPostController');
const validateToken = require('../auth/validateToken');

router.post('/', validateToken, blogPostRouter.addPost);

module.exports = router;
