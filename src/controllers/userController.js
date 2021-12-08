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

    const create = await User.create({ displayName, email, password, image });
    const payload = { id: create.id, displayName, email, image };
    const token = jwt.sign(payload, JWT_SECRET, jwtConfig);
    return res.status(201).json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const user = await User.findAll({ attributes: { exclude: ['password'] } });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id },
      attributes: { exclude: ['password'] }, 
    });

    if (!user) { return res.status(404).json({ message: 'User does not exist' }); }

    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const deleteCurrentUser = async (req, res) => {
  try {
    const { id } = req.user;
    const userToDelete = await User.findByPk(id);
    await userToDelete.destroy();

    return res.status(204).end();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = { createUser, getAllUsers, getUsersById, deleteCurrentUser };