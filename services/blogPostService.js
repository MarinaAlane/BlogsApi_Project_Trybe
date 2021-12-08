const { User } = require('../models');
const { BlogPost } = require('../models');
const { Category } = require('../models');
const { validatePost } = require('../validations/post/postValidations');

const addPost = async (categoryIds, userId, title, content) => {
  const isNotValidPost = validatePost(title, content, categoryIds);
  if (isNotValidPost) return isNotValidPost;

  const foundCategory = await Category.findByPk(categoryIds[0]);
  if (!foundCategory) return ({ code: '400', message: '"categoryIds" not found' });
  const getPosts = await BlogPost.findAll();

  const postData = {
    id: getPosts.length + 1,
    userId,
    title,
    content,
  };

  await BlogPost.create(postData);

  return { code: '201', postData };
};

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'users' },
      { model: Category, as: 'categories' },
    ],
  });
  return { code: '200', posts: allPosts };
};

module.exports = {
  addPost,
  getAllPosts,
};
