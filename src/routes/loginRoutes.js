const { Router } = require('express');
const loginCtrl = require('../controllers/loginController');
const loginMid = require('../middleware/loginMiddleware');

const loginRoute = new Router();

loginRoute.post('/',
  loginMid.validateEmail,
  loginMid.validatePassword,
  loginCtrl.proceedLogin);

module.exports = loginRoute;