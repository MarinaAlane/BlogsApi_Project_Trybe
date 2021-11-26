const router = require('express').Router();
const controller = require('../controllers/userController');

router.post('/user', controller.userRegister);
router.get('/user', controller.getAllUsers);

module.exports = router;
