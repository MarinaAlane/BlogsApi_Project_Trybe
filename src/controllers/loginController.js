const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;
const jwtConfig = { expiresIn: '12d' };

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { [Op.and]: [{ email }, { password }] } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const payload = { email, name: user.displayName, image: user.image };
    const token = jwt.sign(payload, JWT_SECRET, jwtConfig);
    return res.status(200).json({ token });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = { login };