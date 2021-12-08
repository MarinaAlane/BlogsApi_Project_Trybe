// const { Op } = require('sequelize');
// const { Categories } = require('../models');

const validateCategorieField = (req, res, next) => {
  if (!req.body.name) return res.status(400).json({ message: '"name" is required' });

  next();
};

// const validateCategorieExists = async (req, res, next) => {
//   const { categoryIds } = req.body;
//   const categoriesExists = 

//   if (!categoriesExists) return res.status(400).json({ message: '"categoryIds" not found' });
      
//   next();
// };

module.exports = {
  validateCategorieField,
  // validateCategorieExists,
};