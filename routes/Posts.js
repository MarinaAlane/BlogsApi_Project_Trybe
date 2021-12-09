const router = require('express').Router();
const validateToken = require('../validations/validateToken');
const validatePost = require('../validations/validatePost');
const { createPost } = require('../controller/Posts');

router.post('/', validateToken, validatePost, createPost);

module.exports = router;