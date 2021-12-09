const express = require('express');
const rescue = require('express-rescue');
const postController = require('../controllers/postController');
const validateToken = require('../middlewares/validateToken');
const validatePost = require('../middlewares/validatePost');
const validatePostEdit = require('../middlewares/validatePostEdit');

const router = express.Router();

router
  .post('/post', 
    rescue(validateToken),
    rescue(validatePost),
    rescue(postController.newPost))
  .get('/post/search',
    rescue(validateToken),
    rescue(postController.queryPost))
  .get('/post/:id',
    rescue(validateToken),
    rescue(postController.getPostById))
  .delete('/post/:id',
    rescue(validateToken),
    rescue(postController.deletePost))
  .put('/post/:id',
    rescue(validatePostEdit),
    rescue(validateToken),
    rescue(postController.editPost))
  .get('/post',
    rescue(validateToken),
    rescue(postController.getPosts));

module.exports = router;
