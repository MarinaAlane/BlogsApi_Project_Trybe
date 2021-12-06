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

const getAllUsers = async (req, res) => {
  try {
    const employees = await User.findAll({ attributes: { exclude: ['password'] } });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = { createUser, getAllUsers };