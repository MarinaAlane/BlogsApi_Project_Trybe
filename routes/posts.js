const express = require('express');

const routes = express.Router();

const tokenMiddleware = require('../middlewares/token');
const middlewares = require('../middlewares/posts');
const controllers = require('../controllers/posts');

routes.get('/search', tokenMiddleware, controllers.getPostByQuery);

routes
  .post('/',
    tokenMiddleware,
    middlewares.validateCreatePostWithJoi,
    middlewares.validateRegisteredCategories,
    controllers.createNewPost)
  .get('/',
    tokenMiddleware,
    controllers.getAllPosts)
  .get('/:id',
    tokenMiddleware,
    controllers.getPostById)
  .put('/:id',
    tokenMiddleware,
    middlewares.validateUpdatePostWithJoi,
    controllers.updatePostById)
  .delete('/:id',
    tokenMiddleware,
    controllers.deletePostById);

module.exports = routes;
