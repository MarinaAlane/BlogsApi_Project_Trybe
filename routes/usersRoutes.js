const router = require('express').Router();
const { createNewUser, listAllUsers, listUserById } = require('../controllers/usersController');
const { usersValidations } = require('../middlewares/usersValidations');
const { tokenValidation } = require('../middlewares/tokenValidation');

router.post('/', usersValidations, createNewUser);
router.get('/', tokenValidation, listAllUsers);
router.get('/:id', tokenValidation, listUserById);

module.exports = router;