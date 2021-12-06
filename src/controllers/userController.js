const serviceUser = require('../services/userServices');

const userCreate = async (req, res) => {
  const token = await serviceUser.userCreate(req.body);

  return res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
  const AllUsers = await serviceUser.getUsers();
  return res.status(200).json(AllUsers);
};

module.exports = { userCreate, getAllUsers };