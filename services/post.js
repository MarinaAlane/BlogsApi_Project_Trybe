const { Op } = require('sequelize');
const { BlogPost, PostsCategory } = require('../models');
const { getUserById } = require('./user');
const { getCategoryById } = require('./category');

const createPost = async ({ title, content, categoryIds }, userId) => {
  try {
    const { dataValues: newPost } = await BlogPost.create({
      title,
      content,
      userId,
      published: new Date(),
      updated: new Date(),
    });
    await categoryIds.forEach(async (id) => {
      await PostsCategory.create({ postId: newPost.id, categoryId: id });
    });
    return newPost;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const findPostCategories = async (id) => {
  const categories = await PostsCategory.findAll({
    where: {
      postId: {
        [Op.eq]: id,
      },
    },
  });
  const dataValues = categories.map(({ dataValues: dv }) => dv);
  return Promise.all(dataValues.map(async ({ categoryId }) => {
    const category = await getCategoryById(categoryId);
    return category;
  }));
};

const getPostUser = async (post) => {
  const { userId, ...objPost } = post;
  const user = await getUserById(userId);
  return { ...objPost, user };
};

const getPostCategories = async (post) => {
  const { id } = post;
  const categories = await findPostCategories(id);
  return { ...post, categories };
};

const getAllPosts = async ({ user, categories }) => {
  try {
    const query = await BlogPost.findAll();
    let posts = await query.map((element) => element.dataValues);
    if (user) {
      const map = await Promise.all(posts.map(getPostUser));
      posts = map;
    }
    if (categories) {
      const map = await Promise.all(posts.map(await getPostCategories));
      posts = map;
    }
    posts.map((e) => console.log(e.categories));
    return posts;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getPostById = async (id, { user, categories }) => {
  try {
    const query = await BlogPost.findOne({ where: { id } });
    let post = query.dataValues;
    if (user) {
      post = await getPostUser(post);
    }
    if (categories) {
      post = await getPostCategories(post);
    }
    return post;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  createPost,
  getPostById,
  getAllPosts,
};