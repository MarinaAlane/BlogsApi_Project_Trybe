const router = require('express').Router();
const UserController = require('../controllers/userController');
const { 
  emailValidation,
  nameValidation,
  passwordValidation } = require('../middlewares/validateUser');

const validations = [emailValidation, nameValidation, passwordValidation];

router.post('/', validations, UserController.createUser);

module.exports = router;
