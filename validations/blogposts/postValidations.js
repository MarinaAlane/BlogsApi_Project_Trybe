const errors = require('../errors');

const isNotValidTitle = (title) => {
  if (!title) return errors.missingTitle;  
};

const isNotValidContent = (content) => {
  if (!content) return errors.missingContent;  
};

const isNotValidCategoryIds = (categoryIds) => {
  if (!categoryIds) return errors.missingCategoryId;
};

const validateCreatePost = (title, content, categoryIds) => {
  if (isNotValidTitle(title)) return isNotValidTitle(title);  
  if (isNotValidContent(content)) return isNotValidContent(content);  
  if (isNotValidCategoryIds(categoryIds)) return isNotValidCategoryIds(categoryIds);  
};

const validateEditPost = (title, content) => {
  if (isNotValidTitle(title)) return isNotValidTitle(title);  
  if (isNotValidContent(content)) return isNotValidContent(content);
};

module.exports = {
  validateCreatePost,
  validateEditPost,
};
