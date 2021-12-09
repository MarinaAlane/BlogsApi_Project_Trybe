const express = require('express');

const {
  displayNameField,
  validEmail,
  passwordField,
  userExists,
} = require('../middlewares/verifyUserFields');

const { validToken } = require('../middlewares/validateToken');

const {
  createUser,
  listAllUsers,
} = require('../controllers/user-controller');

const router = express.Router();

router.post('/',
displayNameField,
validEmail,
passwordField,
userExists,
createUser);

router.get('/',
validToken,
listAllUsers);

module.exports = router;
