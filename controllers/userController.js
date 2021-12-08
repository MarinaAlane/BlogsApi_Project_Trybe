const { createToken } = require('../auth/validaJWT');
const services = require('../services/userService');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const existUser = await services.findByEmail(email);
  if (existUser) return { message: 'User already registered' };
  const { dataValues } = await services.create(displayName, email, password, image);
  delete dataValues.password; // esse delete esta excluindo o campo de password do meu payload na hora de gerar o token.
  const token = createToken({ payload: dataValues });
  return res.status(201).json(token);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await services.findByEmail(email);
  if (!response || response.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  delete response.password;
  const token = createToken({ payload: response });
  return res.status(200).json(token);
};

module.exports = {
  create,
  login,
};