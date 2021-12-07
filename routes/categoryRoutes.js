const express = require('express');
const { validateUserWithToken } = require('../middlewares/validateJWT');
const controller = require('../controllers/categoryController');

const router = express.Router();

router.post('/', validateUserWithToken, controller.addCategory);
router.get('/', validateUserWithToken, controller.getCategories);

module.exports = router;