const router = require('express').Router();
const validations = require('../middlewares/index');

router.post('/', validations.validateJWT);

module.exports = router;