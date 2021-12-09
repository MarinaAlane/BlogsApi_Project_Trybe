const router = require('express').Router();
const validateLogin = require('../validations/validateLogin');
const { login } = require('../controller/Login');

router.post('/', validateLogin, login);

module.exports = router;