  const categoriesService = require('../services/categories');

  const checkCategory = async (req, res, next) => {
    const { categoryIds } = req.body;
    if (!categoryIds) { 
      return res.status(400).json({ message: '"categoryIds" is required' }); 
    }
    await Promise.all(categoryIds.map(async (id) => {
      const category = await categoriesService.getCategoryById(id);
      if (!category) {
        return res.status(400).json({ message: '"categoryIds" not found' });
      }
    }));
      next();
  };

// adaptei a lógica usada pelo vitor Guima 
module.exports = { checkCategory };
