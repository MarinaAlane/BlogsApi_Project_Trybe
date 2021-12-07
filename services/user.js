const { User } = require('../models');

const registerUser = async (user) => {
  const { dataValues: { password, ...newUser } } = await User.create(user);
  return newUser;
};

const findEmail = async (email) => {
  try {
    const newUser = await User.findOne({
      where: {
        email,
      },
    });
    const { password, ...user } = await newUser.dataValues;
    return user;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = {
  registerUser,
  findEmail,
};
