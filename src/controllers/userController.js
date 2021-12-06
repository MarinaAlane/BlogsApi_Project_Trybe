const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;
const jwtConfig = { expiresIn: '12d' };

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(409).json({ message: 'User already registered' });
    }

    await User.create({ displayName, email, password, image });
    const payload = { displayName, email, image };
    const token = jwt.sign(payload, JWT_SECRET, jwtConfig);
    return res.status(201).json({ token });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = { createUser };