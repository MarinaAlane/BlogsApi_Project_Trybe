const validateTitle = (req, res, next) => {
  const { title } = req.body;
  
  if (!title) return res.status(400).json({ message: '"title" is required' });
  
  next();
};
  
const validateContent = (req, res, next) => {
  const { content } = req.body;
  
  if (!content) return res.status(400).json({ message: '"content" is required' });
  
  next();
};

const validateCategorysId = (req, res, next) => {
  const { categoryIds } = req.body;
  
  if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });
  
  next();
};

const validateUpdatePostNoCategories = (req, res, next) => {
  const { categoryIds } = req.body;
  
  if (categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });
  
  next();
};

const { BlogPost, User } = require('../models');

const validateAuthorizedUser = async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ],
  });

  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  if (userId !== post.userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  next();
};

  module.exports = { 
    validateTitle,
    validateContent,
    validateCategorysId,
    validateUpdatePostNoCategories,
    validateAuthorizedUser,
  };