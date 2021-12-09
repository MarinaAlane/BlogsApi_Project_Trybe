const jwt = require('jsonwebtoken');
const { HTTP_BAD_REQUEST_STATUS, HTTP_CREATED_STATUS } = require('../utils/statusCode');
const { emailIsValid } = require('../utils/checkEmail');
const { User } = require('../models');

const login = async (userData) => {
  const { email, password } = userData;
  if (!email || !emailIsValid(email) || !password) {
    return { erro: HTTP_BAD_REQUEST_STATUS, message: 'invalid fields' };
  }
  const [user] = await User.findAll({ where: { email, password } });
  if (!user) {
    return { erro: HTTP_BAD_REQUEST_STATUS, message: 'invalid fields' };
  }
  const { password: _, image: __, ...payload } = user.dataValues;

  const token = jwt.sign(payload, process.env.JWT_SECRET);

  return { code: HTTP_CREATED_STATUS, token };
};

module.exports = {
  login,
};
