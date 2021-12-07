const { Users } = require('../models');

const findUserByEmail = async (email) => Users.findOne({
  where: {
    email },
    raw: true,
});

const createUser = async (displayName, email, password, image) => Users.create({
  displayName, email, password, image,
});

const getAllUsers = async () => Users.findAll({ raw: true });

const getUserById = async (id) => Users.findOne({ where: { id }, raw: true });

const deleteUserById = async (id) => Users.destroy({ where: { id } });

module.exports = {
  findUserByEmail,
  createUser,
  getAllUsers,
  getUserById,
  deleteUserById,
};
