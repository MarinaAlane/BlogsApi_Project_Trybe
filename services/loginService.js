const { User } = require('../models');
const getToken = require('../auth/authenticateToken');

const login = async (loginData) => {
  const { email, password } = loginData;
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { code: 'invalidData', message: 'Invalid fields' };
  }

  return getToken(user.dataValues);
};

module.exports = {
  login,
};
