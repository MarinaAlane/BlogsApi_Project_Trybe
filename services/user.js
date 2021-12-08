const { User } = require('../models');

const registerUser = async (user) => {
  try {
    const { dataValues: { password, ...newUser } } = await User.create(user);
    return newUser;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const findEmail = async (email) => {
  try {
    const user = await User.findOne({
      attributes: ['id', 'displayName', 'email', 'image'],
      where: {
        email,
      },
    });
    return user.dataValues;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findOne({
      attributes: ['id', 'displayName', 'email', 'image'],
      where: {
        id,
      },
    });
    return user.dataValues;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'displayName', 'email', 'image'],
    });
    return users;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  registerUser,
  findEmail,
  getAllUsers,
  getUserById,
};
