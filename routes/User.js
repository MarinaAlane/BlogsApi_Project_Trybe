const router = require('express').Router();
const validateRegistration = require('../validations/validateRegistration');
const validateToken = require('../validations/validateToken');
const { createUser, allUsers, idByUser } = require('../controller/User');

router.post('/', validateRegistration, createUser);
router.get('/', validateToken, allUsers);
router.get('/:id', validateToken, idByUser);

module.exports = router;