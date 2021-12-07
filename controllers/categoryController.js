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

module.exports = {
  addCategory,
};
