const router = require('express').Router();
const { createUser } = require('../controller/User');
const validateRegistration = require('../validations/validateRegistration');

router.post('/', validateRegistration, createUser);

module.exports = router;