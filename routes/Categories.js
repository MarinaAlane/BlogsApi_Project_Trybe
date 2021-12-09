const router = require('express').Router();
const validateToken = require('../validations/validateToken');
const { createCategory } = require('../controller/Categories');

router.post('/', validateToken, createCategory);

module.exports = router;