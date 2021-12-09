const router = require('express').Router();
const blogPostRouter = require('../controllers/blogPostController');
const validateToken = require('../auth/validateToken');

router.post('/', validateToken, blogPostRouter.addPost);
router.get('/', validateToken, blogPostRouter.getAllPosts);
router.get('/:id', validateToken, blogPostRouter.getPostById);
router.put('/:id', validateToken, blogPostRouter.editPost);
router.delete('/:id', validateToken, blogPostRouter.deletePost);

module.exports = router;
