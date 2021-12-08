const router = require('express').Router();
const Login = require('../controllers/Login');
const {
  validateEmail,
  validatePassword,
} = require('../middlewares/rules');

router.post('/', validateEmail, validatePassword, Login.authenticate);

module.exports = router;
