const router = require('express').Router();
const UserController = require('../controllers/userController');
const Validations = require('../middlewares/index');
  
 router.get('/', Validations.validateJWT, UserController.getAllUsers);

  // router.post('/', Validations.validateUser, UserController.registerUser);

  router.get('/:id', Validations.validateJWT, UserController.getOneUser);
  
  router.delete('/me', Validations.validateJWT, UserController.deleteOwnUser);

  router.post('/', Validations.registerUserValidation, UserController.signUpUser);

module.exports = router;