const express = require('express');

const router = express.Router();
const { validateJWT } = require('../middlewares/validateJWT');
const controllers = require('../controllers/categoriesController');
const { validateName } = require('../middlewares/validation');

router.post('/', validateJWT, validateName, controllers.create);
router.get('/', validateJWT, controllers.getAll);

module.exports = router;