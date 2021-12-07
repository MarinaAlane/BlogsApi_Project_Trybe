const serviceUser = require('../services/userServices');

const userCreate = async (req, res) => {
  const token = await serviceUser.userCreate(req.body);

  return res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
  // const { token } = req.headers.authorization;
  const Users = await serviceUser.getUsers();
  // if (AllUsers.message) {
  //   return res.status(401).json({ message: 'Expired or invalid token' });
  // }
   res.status(200).json(Users);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await serviceUser.getUser(id);
  res.status(200).json(user);
};

module.exports = { userCreate, getUsers, getUser };