const router = require('express').Router();
const controller = require('../controllers/loginController');
const { validateEmail, 
  validatePassword } = require('../middlewares/userValidation');

router.post('/login', 
  validateEmail,
  validatePassword,
  controller.login);

module.exports = router;