const express = require('express');
const LoginMiddleware = require('../middlewares/validateLogin');
const UserController = require('../controllers/userController');

const route = express.Router();

route.post('/',
  LoginMiddleware.validateLogin,
  UserController.login);

module.exports = route;
