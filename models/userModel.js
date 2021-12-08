const { Users } = require('./users');

const getBy = async (key, value) => {
  const getFor = await Users.findOne({ where: { [key]: value } });
  return getFor;
};

const getByPk = async ({ id }) => {
  const byId = await Users.findByPk({ id });
  return byId;
};

const getAll = async () => {
  const getData = await Users.findAll();
  return getData;
};

const createOne = async ({ displayName, email, password, image }) => {
  const newUser = await Users.create({ displayName, email, password, image });
  return newUser;
};

module.exports = { createOne, getBy, getByPk, getAll };
