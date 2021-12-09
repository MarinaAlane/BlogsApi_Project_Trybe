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

const getPostCategories = async (id) => {
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

const mapPostUser = async (post) => {
  const { userId, ...objPost } = post;
  const user = await getUserById(userId);
  return { ...objPost, user };
};

const mapPostCategories = async (post) => {
  const { id } = post;
  const categories = await getPostCategories(id);
  return { ...post, categories };
};

const getAllPosts = async ({ user, categories }) => {
  try {
    const query = await BlogPost.findAll();
    let posts = await query.map((element) => element.dataValues);
    if (user) {
      const map = await Promise.all(posts.map(mapPostUser));
      posts = map;
    }
    if (categories) {
      const map = await Promise.all(posts.map(await mapPostCategories));
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