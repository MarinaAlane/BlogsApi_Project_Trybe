const express = require('express');
const newUserMiddleware = require('../middlewares/validateUser');
const validateToken = require('../middlewares/validateToken');
const Users = require('../controllers/user');

const route = express.Router();

route.post('/',
  newUserMiddleware.validateUserBody,
  newUserMiddleware.validateUserRegister,
  Users.create);

route.get('/:id',
  validateToken,
  Users.findById);

route.get('/',
  validateToken,
  Users.findAll);

module.exports = route;
