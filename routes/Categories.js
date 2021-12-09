const router = require('express').Router();
const validateToken = require('../validations/validateToken');
const validateCategory = require('../validations/validateCategory');
const { createCategory, allCategories } = require('../controller/Categories');

router.post('/', validateToken, validateCategory, createCategory);
router.get('/', validateToken, allCategories);

module.exports = router;