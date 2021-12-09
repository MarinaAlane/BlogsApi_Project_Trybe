const router = require('express').Router();
const UserController = require('../controllers/userController');
const { 
  emailValidation,
  nameValidation,
  passwordValidation } = require('../middlewares/validateUser');

const validations = [emailValidation, nameValidation, passwordValidation];
const tokenValidation = require('../middlewares/validateToken');

router.post('/', validations, UserController.createUser);
router.get('/', tokenValidation, UserController.getAllUsers);

module.exports = router;
