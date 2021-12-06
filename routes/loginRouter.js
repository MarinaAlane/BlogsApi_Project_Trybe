const router = require('express').Router();
const loginController = require('../controllers/loginController');

router.post('/', loginController.signIn);

module.exports = router;