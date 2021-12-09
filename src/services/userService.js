const jwt = require('jsonwebtoken');
const { User } = require('../models');
const statusCode = require('../utils/statusCode');

const createUser = async (userData) => {
  const { displayName, email, password, image } = userData;
  
  const user = await User.findAll({ where: { email } });
  if (user.length) {
    return { erro: statusCode.HTTP_CONFLICT_STATUS, message: 'User already registered' };
  }

  const userCreated = await User.create({ displayname: displayName, email, password, image });
  
  const { password: _, image: __, ...payload } = userCreated.dataValues;

  const token = jwt.sign(payload, process.env.JWT_SECRET);

  return { code: statusCode.HTTP_CREATED_STATUS, token };
};

module.exports = {
  createUser,
};
