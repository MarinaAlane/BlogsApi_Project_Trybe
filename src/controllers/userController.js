const userService = require('../services/userService');

const createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  if (user.erro) return res.status(user.erro).json({ message: user.message }); 
  res.status(user.code).json({ token: user.token });
};

module.exports = {
  createUser,
};
