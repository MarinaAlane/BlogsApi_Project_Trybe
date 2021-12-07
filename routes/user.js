const router = require('express').Router();

const { registerUser, getAllUsers } = require('../middlewares/user');
const auth = require('../middlewares/validations/auth');
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

router.get(
  '/',
  auth,
  getAllUsers,
);

module.exports = router;