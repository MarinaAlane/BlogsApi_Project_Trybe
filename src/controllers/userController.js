const serviceUser = require('../services/userServices');

const userCreate = async (req, res) => {
   const { displayName, email, image, password } = req.body;
  
  const token = await serviceUser.userCreate({ displayName, email, image, password });

  return res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
  const Users = await serviceUser.getUsers();
  // if (Users.message) {
  //   return res.status(401).json({ message: Users.message });
  // }
  // if (AllUsers.message) {
  //   return res.status(401).json({ message: 'Expired or invalid token' });
  // }
  return res.status(200).json(Users);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  // const { authorization: token } = req.headers;
  const user = await serviceUser.getUser(id);
  return res.status(200).json(user);
};

module.exports = { userCreate, getUsers, getUser };