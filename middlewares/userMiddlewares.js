const helpers = require('../helpers/userHelpers');

const validateUser = async (req, res, next) => {
  const { displayName, email, password } = req.body;

  const ValidName = await helpers.validateDisplayName(displayName);
  if (ValidName) return res.status(ValidName.code).json({ message: ValidName.message });

  const validEmail = await helpers.validateEmail(email);
  if (validEmail) return res.status(validEmail.code).json({ message: validEmail.message });

  const validPassword = await helpers.validatePassword(password);
  if (validPassword) return res.status(validPassword.code).json({ message: validPassword.message });

  next();
};

module.exports = {
  validateUser,
};