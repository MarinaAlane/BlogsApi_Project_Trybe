const { Router } = require('express');
const controller = require('../controllers/postControlles');
const { validatePost, validateExistCategories } = require('../validations/postValidate');
const validateToken = require('../auth/token');

const router = Router();

router.post('/', validateToken, validatePost, validateExistCategories, controller.create);

module.exports = router;