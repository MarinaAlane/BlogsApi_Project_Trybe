const { BlogPosts, PostsCategories, Users, Categories } = require('../models');

const invalidError = 'Invalid Operation';

const create = async ({ title, content, id }) => {
  const newPost = await BlogPosts.create({ title, content, userId: id });
  if (!newPost) {
    throw new Error(invalidError);
  }
 return newPost;
};

const createPostCategories = async ({ postId, categoryId }) => {
  const newPostCategorys = await PostsCategories.create({ postId, categoryId });
  if (!newPostCategorys) {
    throw new Error(invalidError);
  }
  return newPostCategorys;
};

const findAll = async () => {
  const posts = await BlogPosts.findAll({
    include: [
      { model: Users, as: 'user' },
      { model: Categories,
        as: 'categories',
        attributes: { exclude: ['PostsCategories'] },
      through: { attributes: [] } },
    ],
  });
  if (!posts) {
    throw new Error(invalidError);
  }
  return posts;
};

const findByID = async (id) => {
  const post = await BlogPosts.findByPk(id, {
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories,
        as: 'categories',
        attributes: { exclude: ['PostsCategories'] },
        through: { attributes: [] } },
    ],
  });
  console.log(post);
  if (!post) {
    throw new Error('Post does not exist');
  }
  return post;
};

const deleteByID = async (userId, id) => {
  const postDeleted = await BlogPosts.destroy({
    where: {
      id,
      userId,
    },
  });
  if (!postDeleted || postDeleted === 0) {
    throw new Error(invalidError);
  }
  return postDeleted;
};

const updateByID = async (data, id) => {
  const postUpdated = await BlogPosts.update(data, {
    where: { id },
  });
  if (!postUpdated || postUpdated === 0) {
    throw new Error(invalidError);
  }
  const postReturn = BlogPosts.findByPk(id, {
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories,
        as: 'categories',
        attributes: { exclude: ['PostsCategories'] },
        through: { attributes: [] } },
    ],
  });
  if (!postReturn) { throw new Error(invalidError); }
  return postReturn;
};

module.exports = {
  create,
  createPostCategories,
  findAll,
  findByID,
  deleteByID,
  updateByID,
}; 