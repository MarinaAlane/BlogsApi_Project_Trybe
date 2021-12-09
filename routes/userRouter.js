const express = require('express');
const userController = require('../controllers/userController');
const validateJWT = require('../middleware/validateJwt');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', validateJWT, userController.findAll);
router.get('/:id', validateJWT, userController.findById);

module.exports = router;