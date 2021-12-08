const userService = require('../service/userService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const newUser = await userService.createUser(displayName, email, password, image);
  return res.status(201).json({ token: newUser });
};

module.exports = {
  createUser,
};
