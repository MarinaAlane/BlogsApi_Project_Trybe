const { BlogPost } = require('../models');
const { PostsCategory } = require('../models');

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

module.exports = {
  createPost,
};