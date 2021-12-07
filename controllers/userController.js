const { createJWT } = require('../middlewares/createJWT');
const userService = require('../services/userService');

const getAllUsers = async (_req, res) => {
  try {
    const users = await userService.getUsers();

    if (!users) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userService.searchUser(id);

    if (user.error) return res.status(user.error.code).json({ message: user.error.message });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const addUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
    const { error } = await userService.resultData(displayName, email, password);
    if (error) return res.status(error.code).json({ message: error.message });

    const user = await userService.createUser(displayName, email, password, image);
    if (user.error) return res.status(user.error.code).json({ message: user.error.message });

    const token = createJWT(user);

    return res.status(201).json({ token });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// const removeUser = async (req, res) => {

// };

module.exports = {
  getUser,
  getAllUsers,
  addUser,
  // removeUser,
};
