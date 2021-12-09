const userService = require('../services/userService');

const createUser = async (req, res) => {
  const result = await userService.createUser(req.body);
  if (result.erro) return res.status(result.erro).json({ message: result.message }); 
  res.status(result.code).json({ token: result.token });
};

module.exports = {
  createUser,
};
