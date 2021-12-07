const jwt = require('jsonwebtoken'); 
require('dotenv').config();
const { User } = require('../models');

const findAllUsers = (req, res) => {
  return User.findAll()
    .then((users) => res.status(200).json(users.map((e) => e.dataValues)));
};

const findById = (req, res) => {
  const { id } = req.params;
  return User.findOne({ where: { id } })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User does not exist' });
      }
      return res.status(200).json(user.dataValues);
    });
};

const createUserController = (req, res) => {
  const { displayName, email, password, image } = req.body;

  return User.create({ displayName, email, password, image })
    .then((user) => res.status(201)
      .json({ token: jwt.sign(user.dataValues, process.env.JWT_SECRET) }))
    .catch(() => res.status(500).json({ error: '500' }));
};

module.exports = {
  createUserController,
  findAllUsers,
  findById,
};