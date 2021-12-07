const { Users } = require('../models');
const jwt = require('../auth/jwt');

const userCreate = async (displayName, email, password, image) => {
const userCreated = await Users.create(displayName, email, password, image);
const token = jwt.createJWT(userCreated);
return token;
};

const getUsers = async () => {
  // try {
  //   jwt.verifyJWT(token);
 const UsersAll = await Users.findAll({
    attributes: { exclude: ['password'] },
  });
  return UsersAll;
};
// } catch (error) {
//   return { message: 'Expired or invalid token' };
// }

const getUser = async (id) => {
  const user = await Users.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  return user;
};
module.exports = { userCreate, getUsers, getUser };