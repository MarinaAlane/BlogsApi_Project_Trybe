const router = require('express').Router();

const User = require('../controllers/controllerUser');
const {
  validateName,
  validateEmail,
  validatePassword,
} = require('../middlewares/rules');

router.post('/', validateName, validateEmail, validatePassword, User.create);

module.exports = router;
