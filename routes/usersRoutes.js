const router = require('express').Router();
const { createNewUser, listAllUsers } = require('../controllers/usersController');
const { usersValidations } = require('../middlewares/usersValidations');
const { tokenValidation } = require('../middlewares/tokenValidation');

router.post('/', usersValidations, createNewUser);
router.get('/', tokenValidation, listAllUsers);

module.exports = router;