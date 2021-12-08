const categoriesService = require('../services/categories');

const createCategory = async (req, res) => {
const { name } = req.body;
const { status, message, newCategory } = await categoriesService.createCategory(name);
if (message) { res.status(status).json({ message }); }
return res.status(status).json(newCategory);
}; 

module.exports = { createCategory };
