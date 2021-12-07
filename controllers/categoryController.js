// const { createJWT } = require('../middlewares/createJWT');
const categoryService = require('../services/categoryService');

const addCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const result = categoryService.validateName(name);
    if (result.error) return res.status(result.error.code).json({ message: result.error.message });

    const category = await categoryService.createCategory(name);

    return res.status(201).json(category);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const getCategories = async (_req, res) => {
  try {
    const result = await categoryService.getCategories();
    if (result.error) return res.status(result.error.code).json({ message: result.error.message });

    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  addCategory,
  getCategories,
};
