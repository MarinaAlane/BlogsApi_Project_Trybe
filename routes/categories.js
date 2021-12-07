const express = require('express');

const router = express.Router();

const { createCategory } = require('../controller/categories');

const { checkToken, checkName } = require('../middleware/checkInfoUser');

router.post('/', checkToken, checkName, createCategory);

module.exports = router;