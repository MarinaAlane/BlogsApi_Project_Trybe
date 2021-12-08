const Router = require('express').Router();
const categoriesController = require('../controllers/categories');
const tokenValidation = require('../api/auth/validatejwt');

Router.post('/', tokenValidation, categoriesController.createCategory);

module.exports = Router;