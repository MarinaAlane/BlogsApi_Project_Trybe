const { Users } = require('../models');
const jwt = require('../auth/jwt');

const userCreate = async ({ displayName, email, password, image }) => {
 const newUser = await Users.create({ displayName, email, password, image });
 const { id } = newUser;
 const token = jwt.createJWT({ id, email: newUser.email });
 return token;
};

const getUsers = async () => {
 const UsersAll = await Users.findAll();
  return UsersAll;
};

const getUser = async (id) => {
  const user = await Users.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  return user;
};
module.exports = { userCreate, getUsers, getUser };