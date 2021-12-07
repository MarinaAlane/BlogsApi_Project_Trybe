const router = require('express').Router();

const { registerUser } = require('../middlewares/user');
const {
  validateDisplayName,
  validatePassword,
  validateEmail,
  verifyEmail,
} = require('../middlewares/validations/user');

router.post(
  '/',
  validateDisplayName,
  validatePassword,
  validateEmail,
  verifyEmail,
  registerUser,
);

module.exports = router;