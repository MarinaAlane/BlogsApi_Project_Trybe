const express = require('express');

const router = express.Router();

const { checkLogin } = require('../middleware/checkInfoUser');

const { loginValidation } = require('../controller/login');

router.post('/', checkLogin, loginValidation);

module.exports = router;