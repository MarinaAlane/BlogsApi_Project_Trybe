const { User } = require('../models');
const createToken = require('../auth/createToken');

const creatingUser = async (user) => {
  const { email } = user;
  const uniqueEmail = await User.findOne({ where: { email } });

  if (uniqueEmail === null) {
    await User.create(user);
    const token = await createToken(user);
    return { token };
  }
  return { message: 'User already registered' };
};

module.exports = {
  creatingUser,
};