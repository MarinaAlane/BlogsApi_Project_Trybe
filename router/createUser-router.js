const express = require('express');

const {
  displayNameField,
  validEmail,
  passwordField,
  userExists,
} = require('../middlewares/verifyUserFields');

const { createUser } = require('../controllers/user-controller');

const router = express.Router();

router.post('/',
displayNameField,
validEmail,
passwordField,
userExists,
createUser);

module.exports = router;
