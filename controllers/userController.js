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
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getById(id);

  return user.message
    ? res.status(user.code).json({ message: user.message })
    : res.status(user.code).json(user.userWithoutPwd);
};

const deleteUser = async (req) => {
  const { id } = req.decoded;
  console.log(id);
  await User.destroy({ where: { id } });
  return { code: '204' };
};

module.exports = {
  addUser,
  getAll,
  getById,
  deleteUser,
};