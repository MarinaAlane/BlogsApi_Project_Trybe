const { Router } = require('express');
const usersCtrl = require('../controllers/usersController');
const usersMid = require('../middleware/usersMiddleware');

const usersRoute = new Router();

usersRoute.post('/',
  usersMid.validateName,
  usersMid.validateEmail,
  usersMid.validatePassword,
  usersCtrl.createUser);

module.exports = usersRoute;