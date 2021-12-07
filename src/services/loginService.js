const { User } = require('../models');

const findingOneUser = async (email) => {
  const result = await User.findOne({ where: { email } });
  return result;
};

module.exports = {
  findingOneUser,
};