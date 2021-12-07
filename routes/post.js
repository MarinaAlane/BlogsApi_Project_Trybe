const express = require('express');
const validateToken = require('../middlewares/validateToken');
const newPostMiddleware = require('../middlewares/validatePost');
const Post = require('../controllers/post');

const route = express.Router();

route.post('/',
  validateToken,
  newPostMiddleware.validatePostBody,
  newPostMiddleware.validatePostRegister,
  Post.create);

route.get('/:id',
  validateToken,
  Post.findById);

route.get('/',
  validateToken,
  Post.findAll);

module.exports = route;
