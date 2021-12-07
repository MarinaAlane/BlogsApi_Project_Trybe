const router = require('express').Router();
const controller = require('../controllers/categoriesController');
const { validateName } = require('../middlewares/categoryValidation');
const { validateToken } = require('../middlewares/validateToken');

router.post('/categories', validateToken, validateName, controller.createCategory);

module.exports = router;