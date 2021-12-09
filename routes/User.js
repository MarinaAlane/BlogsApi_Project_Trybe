const router = require('express').Router();
const validateRegistration = require('../validations/validateRegistration');
const validateToken = require('../validations/validateToken');
const { createUser, allUsers } = require('../controller/User');

router.post('/', validateRegistration, createUser);
router.get('/', validateToken, allUsers);

module.exports = router;