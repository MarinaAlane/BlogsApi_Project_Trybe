const userService = require('../services/userService');
const { HTTP_OK_STATUS } = require('../utils/statusCode');

const createUser = async (req, res) => {
  const result = await userService.createUser(req.body);
  if (result.erro) return res.status(result.erro).json({ message: result.message }); 
  res.status(result.code).json({ token: result.token });
};

const findUsers = async (_req, res) => {
  const user = await userService.findUsers();
  return res.status(HTTP_OK_STATUS).json(user);
};

module.exports = {
  createUser,
  findUsers,
};
