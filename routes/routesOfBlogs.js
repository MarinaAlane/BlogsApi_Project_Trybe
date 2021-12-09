const router = require('express').Router();
const BlogPost = require('../controllers/BlogPost');
const { validatePostEntries } = require('../middlewares/rules');

router.post('/', validatePostEntries, BlogPost.createNewBlog);

module.exports = router;
