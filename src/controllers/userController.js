const serviceUser = require('../services/userServices');

const userCreate = async (req, res) => {
  const token = await serviceUser.userCreate(req.body);

  return res.status(201).json({ token });
};

const getAllUsers = async (req, res) => {
  const { token } = req.headers.authorization;
  const AllUsers = await serviceUser.getUsers(token);
  if (AllUsers.message) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  return res.status(200).json(AllUsers);
};

module.exports = { userCreate, getAllUsers };