// const jwt = require('jsonwebtoken');
require('dotenv').config();
const { Categories } = require('../models');

const createCategory = (req, res) => {
  const { name } = req.body;
  Categories.create({ name })
    .then((category) => res.status(201).json(category.dataValues))
    .catch(() => res.status(500).json({ erro: '500' }));
};

module.exports = {
  createCategory,
};