const express = require('express');
const LoginMiddleware = require('../middlewares/validateLogin');
const Users = require('../controllers/user');

const route = express.Router();

route.post('/',
  LoginMiddleware.validateLoginBody,
  Users.login);

module.exports = route;
