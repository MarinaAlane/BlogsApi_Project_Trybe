const Service = require('../services/user-service');
const { newToken } = require('../auth/token');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { dataValues } = await Service.createUser({ displayName, email, password, image });
  const token = newToken({ data: dataValues });

  return res.status(201).json(token);
};

module.exports = {
  createUser,
};
