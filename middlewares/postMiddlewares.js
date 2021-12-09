const { BlogPosts } = require('../models');

const validatePostFields = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title) return res.status(400).json({ message: '"title" is required' });

  if (!content) return res.status(400).json({ message: '"content" is required' });

  if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });
  
  next();
};

const validatePostExist = async (req, res, next) => {
  const post = await BlogPosts.findByPk(req.params.id);
  
  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  next();
};

const validateUserOwnerPost = async (req, res, next) => {
  const post = await BlogPosts.findByPk(req.params.id);
  const { id: currentUserId } = req.currentUser.userWithoutPassword.dataValues;
  if (post.userId !== currentUserId) { 
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  next();
};

module.exports = {
  validatePostFields,
  validatePostExist,
  validateUserOwnerPost,
};