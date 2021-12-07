const { Categories } = require('../models');
const categoryService = require('../services/Category');

const createCategory = async (req, res) => {
  try {
  const { name } = req.body;
  const newCategory = await categoryService.createCategory(name); 
  console.log(newCategory); 
  
  if (newCategory.message) {
    return res.status(400).json({ message: newCategory.message });
  }  

  await Categories.create({ name: newCategory });  
  const createdCategory = await Categories.findOne({ where: { name: newCategory } });   
  console.log(createdCategory);   

  return res.status(201).json(createdCategory);  
} catch (error) {
  console.log(error);
  return res.status(500).json({ message: 'Internal server error' });
}
};

const getCategories = async (req, res) => {
  try {
    const categories = await categoryService.getCategories();
    return res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createCategory,
  getCategories,
};