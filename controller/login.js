const jwt = require('jsonwebtoken'); 
const { User } = require('../models');

const secret = 'segredo';

const loginValidation = (req, res) => {
  const { email, password } = req.body;

  User.findAll({ where: { email, password } })
    .then((result) => {
      if (result.length === 0) {
        return res.status(400).json({ message: 'Invalid fields' }); 
      }
      return res.status(200).json({ token: jwt.sign({ email, password }, secret) });
    })
    .catch(() => res.status(500).json({ error: '500' }));
};

module.exports = {
  loginValidation,
};