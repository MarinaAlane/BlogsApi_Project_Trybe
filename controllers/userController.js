const service = require('../services/validationUser');

const cadastration = async (req, res) => {
  service.cadastration(req.body);
  return res.status(201).json({ message: 'Cadastro feito com sucesso!' });
};

module.exports = {
  cadastration,
};