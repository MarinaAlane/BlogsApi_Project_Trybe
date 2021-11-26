const postRoutes = require('express').Router();

const PostControllers = require('../controllers/PostControllers');

const validateToken = require('../middlewares/validateToken');

postRoutes.get('/', validateToken, PostControllers.index);
postRoutes.get('/:id', validateToken, PostControllers.getPostById);
postRoutes.post('/', validateToken, PostControllers.create);

module.exports = postRoutes;
