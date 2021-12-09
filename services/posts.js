const { BlogPost } = require('../models');
const { User } = require('../models');
const { Category } = require('../models');

const createPost = async (post) => {
    const { title, content, userId } = post;
    if (!title) { return { status: 400, message: '"title" is required' }; }
    if (!content) { return { status: 400, message: '"content" is required' }; }
    const addPost = await BlogPost.create({ title, content, userId });
    return { status: 201, addPost };
};

const getPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [{ model: User, as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
      });
      return { status: 200, allPosts };
  };

  const getPostById = async (postId) => {
    const postById = await BlogPost.findByPk(postId, {
      include: [{ model: User, as: 'user' },
        { model: Category, as: 'categories', through: { attributes: [] } }],
        });
        if (!postById) { return { status: 404, message: 'Post does not exist' }; }
        return { status: 200, postById };
    };

module.exports = { createPost, getPosts, getPostById };