const { Router } = require('express');
const controller = require('../controllers/categoriesController');
const categoriesValidate = require('../validations/categoriesValidate');
const validateToken = require('../auth/token');

const router = Router();

router.post('/', validateToken, categoriesValidate, controller.create);

module.exports = router;