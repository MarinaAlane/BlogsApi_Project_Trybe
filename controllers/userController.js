const userService = require('../services/userService');

const createUser = async (req, res) => {
  try {
     const token = await userService.createUser(req.body);

     if (token.err) {
      return res.status(token.err.status).json({ message: token.err.message });
    }
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const token = await userService.logUser(req.body);
    if (token.err) {
      return res.status(token.err.status).json({ message: token.err.message });
    } 
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const findAll = async (_req, res) => {
  try {
    const users = await userService.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  createUser,
  loginUser,
  findAll,
};
