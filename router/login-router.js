const express = require('express');

const { loginUser } = require('../controllers/user-controller');
const {
  validEmailField,
  validPasswordField,
} = require('../middlewares/validateLogin');

const router = express.Router();

router.post('/',
validEmailField,
validPasswordField,
loginUser);

module.exports = router;
