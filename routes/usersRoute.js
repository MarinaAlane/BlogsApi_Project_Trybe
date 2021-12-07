const Router = require('express').Router();
const usersController = require('../controllers/usersController');
const validations = require('../middlewares/validateUser');

Router.post('/',
validations.emailValidation, 
validations.validateName, validations.validatePassword, usersController.createUser);

module.exports = Router;