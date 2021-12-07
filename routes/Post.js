const express = require('express');
const Post = require('../controllers/Post');
const Authentication = require('../middlewares/Authenticate');

const router = express.Router();
router.use(express.json());

router.post('/', Authentication, Post.create);
router.get('/', Authentication, Post.getAll);

module.exports = router;