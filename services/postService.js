const { User, BlogPost, Category, PostsCategory } = require('../models');

const createPost = async (categoryIds, postData) => {
  const existingCategory = await Category.findOne({ where: { id: categoryIds } });

  if (!existingCategory) return { code: 'badRequest', message: '"categoryIds" not found' };

  const currentDate = new Date();
  const { dataValues: { published, updated, ...newPost } } = await BlogPost.create({
    ...postData,
    published: currentDate,
    updated: currentDate,
  });

  categoryIds.forEach(async (id) => PostsCategory.create({ postId: newPost.id, categoryId: id }));

  return newPost;
};

const getPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return allPosts;
};

module.exports = {
  createPost,
  getPosts,
};
