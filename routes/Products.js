const express = require('express');
const validateProduct = require('../validations/validateProduct');

const router = express.Router();

router.post('/', () => {});
router.get('/', Products.getAll);
router.get('/:id', Products.getById);
router.delete('/:id', Products.deleteById);
router.put('/:id', validateProduct, Products.update);

module.exports = router;