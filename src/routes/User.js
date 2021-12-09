const router = require('express').Router();
const { createUser, findUsers } = require('../controllers/userController');
const { validateUserParams } = require('../middlewares/Users/validateUserParams');
const { validateToken } = require('../middlewares/Users/validateToken');

router.post('/user', validateUserParams, createUser);
router.get('/user', validateToken, findUsers);

module.exports = router;
