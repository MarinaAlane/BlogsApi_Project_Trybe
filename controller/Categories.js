const { Category } = require('../models');
// const { MESSAGE_ERROR7 } = require('../validations/messageError');

async function createCategory(req, res) {
  try {
    const { name } = req.body;
    const category = await Category.create({ name });

    console.log(category);
    // if (users.length >= 1) return res.status(409).json({ message: MESSAGE_ERROR7 });

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
    console.log(e);
  }
}

module.exports = {
  createCategory,
  allCategories,
};