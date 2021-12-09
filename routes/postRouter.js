const express = require('express');
const postController = require('../controllers/postController');
const validateJWT = require('../middleware/validateJwt');

const router = express.Router();

router.post('/', validateJWT, postController.createPost);
router.get('/', validateJWT, postController.getPosts);

module.exports = router;
