const express = require('express');

const { createCategory } = require('../controllers/category-controller');

const { validCategoryField } = require('../middlewares/validateCategories');
const { validToken } = require('../middlewares/validateToken');

const router = express.Router();

router.post('/',
validCategoryField,
validToken,
createCategory);

module.exports = router;
