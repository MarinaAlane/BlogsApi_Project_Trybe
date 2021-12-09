const express = require('express');
const categoryController = require('../controllers/categoryController');
const validateJWT = require('../middleware/validateJwt');

const router = express.Router();

router.post('/', validateJWT, categoryController.createCategory);

module.exports = router;
