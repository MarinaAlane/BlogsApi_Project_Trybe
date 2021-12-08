const { Router } = require('express');
const usersCtrl = require('../controllers/usersController');
const usersMid = require('../middleware/usersMiddleware');
const validateJwt = require('../auth/validateJWT');

const usersRoute = new Router();

usersRoute.post('/',
  usersMid.validateName,
  usersMid.validateEmail,
  usersMid.validatePassword,
  usersCtrl.createUser);

usersRoute.get('/', validateJwt, usersCtrl.getAllUsers);

module.exports = usersRoute;