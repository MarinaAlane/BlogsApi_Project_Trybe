const router = require('express').Router();
const validateLogin = require('../validations/validateLogin');
const Login = require('../controller/Login');

router.post('/', validateLogin, Login);

module.exports = router;