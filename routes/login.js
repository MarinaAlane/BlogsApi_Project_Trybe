const router = require('express').Router();

const { loginUser } = require('../middlewares/user');
const {
  validatePassword,
  validateEmail,
  verifyEmail,
} = require('../middlewares/validations/user');

router.post(
  '/',
  validatePassword,
  validateEmail,
  verifyEmail,
  loginUser,
);

module.exports = router;