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

const validatePost = (title, content, categoryIds) => {
  if (isNotValidTitle(title)) return isNotValidTitle(title);  
  if (isNotValidContent(content)) return isNotValidContent(content);  
  if (isNotValidCategoryIds(categoryIds)) return isNotValidCategoryIds(categoryIds);  
};

module.exports = { validatePost };