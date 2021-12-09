const { BlogPost } = require('../models');
const categoryService = require('./catergoryService');

const { 
  validateContent,
  validateTitle,
  validateCategoryId,
 } = require('../middleware/validationMiddlewares');

const verifyCategories = async (categoryIds) => {
  const categoryExist = Promise.all(categoryIds.map((id) => categoryService.findCategoryById(id)));
  return (await categoryExist)[0];
};

const createPost = async ({ title, content, categoryIds }, { id: userId }) => {
  if (validateTitle(title).err) return validateTitle(title);
  if (validateContent(content).err) return validateContent(content);
  if (validateCategoryId(categoryIds).err) return validateCategoryId(categoryIds);

  const verifyCategory = await verifyCategories(categoryIds);
  if (verifyCategory.err) return verifyCategory;

  const { id } = await BlogPost.create({ userId, title, content, categoryIds });
  return { id, userId, title, content };
};

module.exports = {
  createPost,
};
