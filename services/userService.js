const { Users } = require('../models');

const findByEmail = async (email) => {
  const response = await Users.findOne({ where: { email } });
  return response;
};

const create = async (displayName, email, password, image) => Users.create({
  displayName, email, password, image,
});

const getAllUser = async () => Users.findAll();

module.exports = {
  create,
  findByEmail,
  getAllUser,
};