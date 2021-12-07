const router = require('express').Router();

const userController = require('../controllers/userController');

const { tokenExists, 
  tokenValid, 
  checkExistanceUser, checkDisplayName, 
  emailExists, validateEmail, 
  passwordExists, validPassword, checkUniqueUser } = require('../middlewares/validations');

router.post('/', checkDisplayName,
 emailExists, validateEmail, passwordExists,  
validPassword,
checkUniqueUser,
 userController.userCreate);
 
 router.get('/:id', tokenExists, tokenValid, checkExistanceUser, userController.getUser);
 router.get('/', tokenExists, tokenValid, userController.getUsers);

module.exports = router;