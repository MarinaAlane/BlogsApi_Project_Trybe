const { BlogPost } = require('../models');
const { Category } = require('../models');
const { validatePost } = require('../validations/post/postValidations');

const addPost = async (categoryIds, userId, title, content) => {
  const isNotValidPost = validatePost(title, content, categoryIds);
  if (isNotValidPost) return isNotValidPost;

  const foundCategory = await Category.findByPk(categoryIds[0]);
  if (!foundCategory) return ({ code: '400', message: '"categoryIds" not found' });

  const countPosts = await BlogPost.findAll();
  return { code: '201', postData: { id: countPosts.length + 1, userId, title, content } };
};

module.exports = {
  addPost,
};
