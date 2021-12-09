const { validateTitle, validateCategory, validateContent } = require('../middlewares/validatePost');
const { BlogPost, Category, User } = require('../models');

const validaData = (title, content, categoryIds) => {
  const nM = validateTitle(title);
  const eM = validateContent(content);
  const pW = validateCategory(categoryIds);

  return [nM, eM, pW];
};

const searchForError = (title, content, categoryIds) => {
  const result = validaData(title, content, categoryIds);
  const find = result.filter((item) => item.error);
  return find;
};

const resultData = (title, content, categoryIds) => {
  const result = searchForError(title, content, categoryIds);
  if (result.length > 0) return result[0];
  return true;
};

const findCategory = async (category) => {
  const data = await Category.findAll();
  const categories = data.map(({ id }) => id);

  const isValidCateg = category.every((id) => categories.includes(id));
  return isValidCateg;
};

const allBlogsPost = async () => {
  const blogsPost = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (blogsPost.length < 1) {
    return {
      error: {
        code: 404,
        message: 'Not found "post"',
      },
    };
  }

  return blogsPost;
};

const searchPostById = async (id) => {
  const blogsPost = await BlogPost.findByPk(id,
    {
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

  if (!blogsPost) {
    return {
      error: {
        code: 404,
        message: 'Post does not exist',
      },
    };
  }

  return blogsPost;
};

const createPost = async (title, content, categoryIds, userId) => {
  const validCategory = await findCategory(categoryIds);
  if (!validCategory) {
    return {
      error: {
        code: 400,
        message: '"categoryIds" not found',
      },
    };
  }

  const newPost = await BlogPost.create({ userId, title, content, categoryIds });
  return newPost;
};

module.exports = {
  resultData,
  createPost,
  allBlogsPost,
  searchPostById,
};
