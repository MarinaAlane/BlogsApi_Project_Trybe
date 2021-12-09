const error = require('../utils/errorTemplates');

const validateField = (field, errorMessage) => {
  if (!field || field.length === 0) {
    throw error(errorMessage);
  }
};

const newPost = ({ title, content, categoryIds }) => {
  validateField(title, 'titleError');
  validateField(content, 'contentError');
  validateField(categoryIds, 'categoryIDError');
};

const post = (payload) => validateField(payload, 'postNotFound');

const editPost = (payload) => {
  Object.keys(payload).forEach((key) => {
    if (key === 'categoryIds') {
      throw error('categoriesEditedError');
    }
  });

  const { title, content } = payload;
  validateField(title, 'titleError');
  validateField(content, 'contentError');
};

const userIsOwner = (userPost, userId) => {
  if (!userPost) {
    throw error('postNotFound');
  }
  if (userPost.id !== userId) {
    throw error('unauthorized');
  }
};

module.exports = {
  newPost,
  post,
  editPost,
  userIsOwner,
};
