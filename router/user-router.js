const express = require('express');

const {
  displayNameField,
  validEmail,
  passwordField,
  userExists,
} = require('../middlewares/verifyUserFields');

const { validToken } = require('../middlewares/validateToken');

const { findUser } = require('../middlewares/userExists');

const {
  createUser,
  listAllUsers,
  listUserById,
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

router.get('/:id',
findUser,
validToken,
listUserById);

module.exports = router;
