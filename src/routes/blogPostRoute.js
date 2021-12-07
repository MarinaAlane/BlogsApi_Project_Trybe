const router = require('express').Router();
const controller = require('../controllers/blogPostsController');
const { validateToken } = require('../middlewares/validateToken');

router.post('/post', validateToken, controller.createPost);

module.exports = router;