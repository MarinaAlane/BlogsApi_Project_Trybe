const Router = require('express').Router();
const postController = require('../controllers/postsController');
const validateCategory = require('../middlewares/validateCategory');
const tokenValidation = require('../api/auth/validatejwt');

Router.post('/', tokenValidation, validateCategory.checkCategory, postController.createPost);

module.exports = Router;