const Router = require('express').Router();
const categoriesController = require('../controllers/categories');
const tokenValidation = require('../api/auth/validatejwt');

Router.post('/', tokenValidation, categoriesController.createCategory);

Router.get('/', tokenValidation, categoriesController.getCategories);

module.exports = Router;