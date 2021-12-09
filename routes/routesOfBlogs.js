const router = require('express').Router();
const BlogPost = require('../controllers/BlogPost');
const { validatePostEntries, validateJWT } = require('../middlewares/rules');

router.post('/', validateJWT, validatePostEntries, BlogPost.createNewBlog);
router.get('/', validateJWT, BlogPost.getAll);

module.exports = router;
