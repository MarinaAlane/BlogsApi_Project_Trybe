const { User } = require('../models');
const generateToken = require('../auth/generateToken');
const { validateLogin } = require('../validations/login/loginValidations');

const signIn = async (email, password) => {
  const isNotValidLoginData = validateLogin(email, password);

  if (isNotValidLoginData) return isNotValidLoginData;

  const foundUser = await User.findOne({ where: { email } });
  if (!foundUser) return { code: 400, message: 'Invalid fields' };

  const token = generateToken(foundUser.displayName, email, password);
  return { code: 200, token };
};

module.exports = { signIn };
