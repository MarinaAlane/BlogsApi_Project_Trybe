const Router = require('express').Router();
const usersController = require('../controllers/usersController');
const validations = require('../middlewares/validateUser');
const tokenValidation = require('../api/auth/validatejwt');

Router.post('/',
validations.emailValidation, 
validations.validateName, validations.validatePassword, usersController.createUser);

 Router.get('/', tokenValidation, usersController.getUsers);

module.exports = Router;