const router = require('express').Router();

const {
  registerUser,
  getAllUsers,
  getUserById,
} = require('../middlewares/user');
const {
  validateDisplayName,
  validatePassword,
  validateEmail,
  verifyEmail,
} = require('../middlewares/validations/user');
const auth = require('../middlewares/validations/auth');

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

router.get(
  '/:id',
  auth,
  getUserById,
);

module.exports = router;