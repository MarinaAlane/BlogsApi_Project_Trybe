const { User } = require('../models');
const userService = require('../services/userService');

const addUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = await userService.addUser({ displayName, email, password, image });

    await User.create({ displayName, email, password, image });
    
    return user.token
      ? res.status(user.code).json(user.token)
      : res.status(user.code).json({ message: user.message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });  
  }
};

const getAll = async (_req, res) => {
  const users = await User.findAll();
  return res.status(200).json(users);
};

module.exports = {
  addUser,
  getAll,
};