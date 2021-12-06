const { User } = require('../models');
const jwt = require('../auth/jwt');

const userCreate = async (displayName, email, password, image) => {
const userCreated = await User.create(displayName, email, password, image);
const token = jwt.createJWT(userCreated);
return token;
};

const getUsers = async () => User.findAll({
  attributes: { exclude: ['password'] },
});

module.exports = { userCreate, getUsers };