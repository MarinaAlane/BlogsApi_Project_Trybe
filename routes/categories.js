const router = require('express').Router();

const {
  registerCategory,
} = require('../middlewares/category');
const {
  validateName,
} = require('../middlewares/validations/category');
const auth = require('../middlewares/validations/auth');

router.post(
  '/',
  auth,
  validateName,
  registerCategory,
);

module.exports = router;