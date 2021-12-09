const { Category } = require('../models');

async function createCategory(req, res) {
  try {
    const { name } = req.body;
    const category = await Category.create({ name });

    return res.status(201).json(category);
  } catch (e) {
    console.log(e.message);
  }
}

async function allCategories(_req, res) {
  try {
    const category = await Category.findAll();

    return res.send(category);
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = {
  createCategory,
  allCategories,
};