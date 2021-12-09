const serviceUser = require('../services/userServices');

const userCreate = async (req, res) => {
   const { displayName, email, image, password } = req.body;
  
  const token = await serviceUser.userCreate({ displayName, email, image, password });

  return res.status(201).json({ token });
};

const userDelete = async (req, res) => {
  const { payload: { id: { userId } } } = req.user;
   await serviceUser.userDelete(userId);
  return res.status(204).json();
};

const getUsers = async (_req, res) => {
  const Users = await serviceUser.getUsers();
  return res.status(200).json(Users);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await serviceUser.getUser(id);
  return res.status(200).json(user);
};

module.exports = { userCreate, getUsers, getUser, userDelete };