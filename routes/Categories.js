const router = require('express').Router();
const validateToken = require('../validations/validateToken');
const validateCategory = require('../validations/validateCategory');
const { createCategory } = require('../controller/Categories');

router.post('/', validateToken, validateCategory, createCategory);

module.exports = router;