const router = require('express').Router();

const userController = require('../controllers/userController');

const middleware = require('../middlewares/validations');
const { tokenExists, tokenValid } = require('../middlewares/validations');

 // const tokenValidation = [tokenExists, tokenValid];

router.post('/', middleware.checkDisplayName,
 middleware.emailExists, middleware.validateEmail, middleware.passwordExists,  
middleware.validPassword,
middleware.checkUniqueUser,
 userController.userCreate);
 
 router.get('/:id', tokenExists, tokenValid, userController.getUser);
 router.get('/', tokenExists, tokenValid, userController.getUsers);

module.exports = router;