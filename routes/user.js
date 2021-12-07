const express = require('express');

const router = express.Router();

const { 
  checkDisplayName, 
  checkEmail, 
  checkPassword, 
  checkToken } = require('../middleware/checkInfoUser');

const { findAllUsers, createUserController } = require('../controller/user');

router.get('/', checkToken, findAllUsers);
router.post('/', checkDisplayName, checkEmail, checkPassword, createUserController);

module.exports = router;