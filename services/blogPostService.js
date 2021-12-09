const { User } = require('../models');
const { BlogPost } = require('../models');
const { Category } = require('../models');
const {
  validateCreatePost,
  validateEditPost,
} = require('../validations/blogposts/postValidations');

const addPost = async (categoryIds, userId, title, content) => {
  const isNotValidPost = validateCreatePost(title, content, categoryIds);
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
  await Category.create(categoryIds[0]);
  await BlogPost.create(postData);

  return { code: '201', postData };
};

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories' },
    ],
  });

  return { code: '200', posts: allPosts };
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories' },
    ],
  });

  if (!post) return { code: '404', message: 'Post does not exist' };
  return { code: '200', postData: post };
};

const editPost = async (postId, userId, dataToEdit) => {
  if (dataToEdit.categoryIds) {
    return { code: '400', message: 'Categories cannot be edited' };
  }

  const isNotValidPost = validateEditPost(dataToEdit.title, dataToEdit.content);
  if (isNotValidPost) return isNotValidPost;
  
  const post = await BlogPost.findByPk(postId, {
    include: [
      { model: Category, as: 'categories' },
    ],
  });
  if (userId !== post.dataValues.userId) {
    return { code: '401', message: 'Unauthorized user' };
  }
  return { code: '200', postData: post.dataValues };
};

const deletePost = async (postId, userId) => {
  const post = await BlogPost.findByPk(postId);

  if (!post) return { code: '404', message: 'Post does not exist' };
  if (post.dataValues.id !== userId) return { code: '401', message: 'Unauthorized user' };

  await BlogPost.destroy({ where: { id: postId } });
  return { code: '204' };
};

module.exports = {
  addPost,
  getAllPosts,
  getPostById,
  editPost,
  deletePost,
};
