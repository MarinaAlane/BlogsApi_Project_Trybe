const jwt = require('jsonwebtoken');
const UserService = require('../services/userService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  await UserService.createUser({ displayName, email, password, image });

  const token = jwt.sign({ displayName, email }, process.env.JWT_SECRET);

  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};
