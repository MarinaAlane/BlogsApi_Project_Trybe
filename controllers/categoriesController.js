const categoriesService = require('../services/categoriesService');

const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await categoriesService.addCategory(name);
   
    return category.categoryData
    ? res.status(category.code).json(category.categoryData)
    : res.status(category.code).json({ message: category.message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });  
  }
};

const getAllCategories = async (_req, res) => {
  const allCategories = await categoriesService.getAllCategories();
  return res.status(200).json(allCategories);
};

module.exports = {
  addCategory,
  getAllCategories,
};
