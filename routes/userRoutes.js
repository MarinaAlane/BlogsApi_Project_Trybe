const express = require('express');
const newUserMiddleware = require('../middlewares/validateUser');
const validateToken = require('../middlewares/validateToken');
const UserController = require('../controllers/userController');

const route = express.Router();

route.post('/',
  newUserMiddleware.validateUser,
  newUserMiddleware.validateRegister,
  UserController.create);

route.get('/',
  validateToken,
  UserController.listAll);

route.get('/:id',
  validateToken,
  UserController.findById);

module.exports = route;
