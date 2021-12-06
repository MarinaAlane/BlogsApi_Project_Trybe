const { User } = require('../models');
const jwt = require('../auth/jwt');

const userCreate = async (displayName, email, password, image) => {
const userCreated = await User.create(displayName, email, password, image);
const token = jwt.createJWT(userCreated);
return token;
};

const getUsers = async (token) => {
  try {
    jwt.verifyJWT(token);
    await User.findAll({
    attributes: { exclude: ['password'] },
  });
} catch (error) {
  return { message: 'Expired or invalid token' };
}
};

module.exports = { userCreate, getUsers };