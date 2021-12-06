const router = require('express').Router();
const controller = require('../controllers/userController');
const { validateDisplayName, validateEmail, 
  validatePassword } = require('../middlewares/userValidation');

router.post('/user', 
  validateDisplayName,
  validateEmail,
  validatePassword,
  controller.createUser);

module.exports = router;