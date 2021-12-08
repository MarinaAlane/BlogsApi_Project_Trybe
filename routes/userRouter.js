const router = require('express').Router();
const userController = require('../controllers/userController');
const validateToken = require('../auth/validateToken');

router.post('/', userController.addUser);
router.get('/', validateToken, userController.getAll);
router.get('/:id', validateToken, userController.getById);

module.exports = router;
