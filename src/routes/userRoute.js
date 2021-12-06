const router = require('express').Router();
const controller = require('../controllers/userController');
const { validateDisplayName, validateEmail, 
  validatePassword } = require('../middlewares/userValidation');
  const { validateToken } = require('../middlewares/validateToken');

router.post('/user', 
  validateDisplayName,
  validateEmail,
  validatePassword,
  controller.createUser);

router.get('/user', validateToken, controller.getAllUsers);

module.exports = router;