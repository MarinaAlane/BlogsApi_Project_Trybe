const db = require('../models');
const jwtToken = require('../auth/JWTtoken');

const getAllUsers = async (_req, res) => {
  try {
    const response = await db.Users.findAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
    await db.Users.create({ displayName, email, password, image });
    const token = jwtToken({ email });
    return res.status(201).json(token);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
