const express = require('express');
const Post = require('../controllers/Post');
const Authentication = require('../middlewares/Authenticate');

const router = express.Router();
router.use(express.json());

router.post('/', Authentication, Post.create);
router.get('/:id', Authentication, Post.getById);
router.get('/', Authentication, Post.getAll);
router.put('/:id', Authentication, Post.update);

module.exports = router;