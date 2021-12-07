const models = require('../models');

const createNewPost = async ({ title, content, userId }) => 
  models.BlogPosts.create({ title, content, userId });

const getAllPosts = async () => models.BlogPosts.findAll({
  include: [
    {
      model: models.Users,
      as: 'user',
      attributes: { exclude: ['password'] },
      },
    {
      model: models.Categories,
      as: 'categories',
      through: { attributes: [] },
      attributes: { exclude: ['PostsCategories'] },
    },
  ],
});

const getPostById = async (id) => models.BlogPosts.findOne({
  where: { id },
  include: [
    {
      model: models.Users,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: models.Categories,
      as: 'categories',
      through: { attributes: [] },
      attributes: { exclude: ['PostsCategories'] },
    },
  ],
});

const updatePostById = async ({ id, title, content, userId }) => {
  const currentPost = await models.BlogPosts.findOne({
    where: { id },
    include: [
      {
        model: models.Categories,
        as: 'categories',
        through: { attributes: [] },
        attributes: { exclude: ['PostCategories'] },
      },
    ],
  });
  
  if (!currentPost || currentPost.userId !== userId) return null;

  await models.BlogPosts.update({ title, content }, { where: { id } });
  const { categories } = currentPost;
  
  return { title, content, userId, categories };
};

module.exports = {
  createNewPost,
  getAllPosts,
  getPostById,
  updatePostById,
};
