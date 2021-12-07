const express = require('express');

const router = express.Router();

const { checkDisplayName, checkEmail, checkPassword } = require('../middleware/checkInfoUser');

const { createUserController } = require('../controller/user');

router.post('/', checkDisplayName, checkEmail, checkPassword, createUserController);

module.exports = router;