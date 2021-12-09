const jwt = require('jsonwebtoken');
const { User } = require('../models');

const LOGIN_SECRET = 'secretLoginSecret';

const login = async (req, res) => {
  const { email, password } = req.body;

  const { dataValues } = await User.findOne({ email });

  const payload = { email, password, dataValues };

  const token = jwt.sign(payload, LOGIN_SECRET);

  res.status(200).json({ token });
};

module.exports = { login };