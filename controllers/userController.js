const service = require('../services/userService');

const registerUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await service.registerUser(displayName, email, password, image);
    return res.status(201).json({ token });
  } catch (e) {
    console.log(e);
    return res.status(409).json({ message: e.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await service.getAllUsers();
    return res.status(200).json(allUsers);
  } catch (e) {
    return res.status(409).json({ message: e.message });
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await service.getOneUser(id);
    return res.status(200).json(user);
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
};

const deleteOwnUser = async (req, res) => {
  try {
    const { data: { id } } = req.userInfo;
    await service.deleteOwnUser(id);
    return res.status(204).json();
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  registerUser,
  getAllUsers,
  getOneUser,
  deleteOwnUser,
};