// validateJWT.js
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { MESSAGE_ERROR11 } = require('./messageError');

const segredo = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: MESSAGE_ERROR11 });

  try {
    const { data } = jwt.verify(token, segredo);
    const { email } = data;
    
    const user = await User.findAll({ where: { email } });

    const { id: userId } = user[0];
    const { id: idDecoded } = data;

    if (userId === idDecoded) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).send({ message: 'Expired or invalid token' });
    // return res.status(401).json({ message: err.message });
  }
};