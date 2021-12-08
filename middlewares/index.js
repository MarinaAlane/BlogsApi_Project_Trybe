const { validateUser } = require('./userMiddlewares');
const { loginValidation } = require('./loginMiddlewares');

module.exports = {
  validateUser,
  loginValidation,
};