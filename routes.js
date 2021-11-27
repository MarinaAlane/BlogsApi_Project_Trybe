const router = require('express').Router();

const UserController = require('./controllers/useController');
const Validations = require('./validations/Validations');
const LoginController = require('./controllers/LoginController');

const useController = new UserController();
const validations = new Validations();
const login = new LoginController();

router.get('/user', useController.getAllUsers.bind(useController));
router.post('/user', 
  validations.validName.bind(validations),
  validations.validEmail.bind(validations),
  validations.validPassword.bind(validations),
  useController.createUser.bind(useController));

router.post('/login', login.loginUser.bind(login));

module.exports = router;