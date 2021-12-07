const jwt = require('jsonwebtoken'); 
const { User } = require('../models');

const secret = 'segredo';

const createUserController = (req, res) => {
  const { displayName, email, password, image } = req.body;

  User.create({ displayName, email, password, image })
    .then((user) => res.status(201).json({ token: jwt.sign(user.dataValues, secret) }))
    .catch(() => res.status(500).json({ error: '500' }));
};

module.exports = {
  createUserController,
};