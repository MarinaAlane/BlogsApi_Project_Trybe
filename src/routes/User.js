const router = require('express').Router();
const { createUser } = require('../controllers/userController');
const { validateUserParams } = require('../middlewares/Users/validateUserParams');

router.post('/user', validateUserParams, createUser);

module.exports = router;
