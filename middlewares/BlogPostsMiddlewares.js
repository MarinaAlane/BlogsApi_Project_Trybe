const postValidation = async (req, res, next) => {
    if (!req.body.title) return res.status(400).json({ message: '"title" is required' });
    if (!req.body.content) return res.status(400).json({ message: '"content" is required' });
    if (!req.body.categoryIds) {
 return res.status(400).json({ message: '"categoryIds" is required' }); 
}
    next();
  };
  
  const updateValidation = async (req, res, next) => {
    if (!req.body.title) return res.status(400).json({ message: '"title" is required' });
    if (!req.body.content) return res.status(400).json({ message: '"content" is required' });
    if (req.body.categoryIds) {
 return res.status(400).json({ 
      message: 'Categories cannot be edited' }); 
}
    next();
  };

  module.exports = {
    postValidation,
    updateValidation,
  };