const services = require('../services/categorieServices');

const create = async (req, res) => {
  const { name } = req.body;
  const response = await services.create(name);
  return res.status(201).json(response);   
};

module.exports = {
  create,
};