// const { Op } = require('sequelize');
const { Categories } = require('../models');

const validateCategorieField = (req, res, next) => {
  if (!req.body.name) return res.status(400).json({ message: '"name" is required' });

  next();
};

const validateCategorieExists = async (req, res, next) => {
  const { categoryIds } = req.body;
  /* Para validar se todas as categorias do array existem no banco de dados, 
  podemos usar a funcao de buscar e contar para entao comparar o valor do count com
  o tamanho do array de categorias. Se forem iguais, todas as categorias do array existem
  no bd. Solução sugerida pelo meu marido, Felipe Teixeira.
  Como utilizar a funcao no sequelize: https://sequelize.org/v5/manual/models-usage.html */
  const categories = await Categories.findAndCountAll({
    where: { id: categoryIds },
  });

  if (categories.count !== categoryIds.length) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  next();
};

module.exports = {
  validateCategorieField,
  validateCategorieExists,
};