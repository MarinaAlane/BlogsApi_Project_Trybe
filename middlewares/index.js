const { validateUser } = require('./userMiddlewares');
const { loginMiddlewares } = require('./loginMiddlewares');
const { validateJWT } = require('./ValidateJWT');
const { registerCategoryValidation } = require('./categoryMiddlewares');
const { postValidation, updateValidation, deleteValidation } = require('./BlogPostsMiddlewares');

module.exports = {
  validateUser,
  loginMiddlewares,
  validateJWT,
  registerCategoryValidation,
  postValidation,
  updateValidation,
  deleteValidation,
};