const { validateTitle, validateCategory, validateContent } = require('../middlewares/validatePost');
const { BlogPost, Category } = require('../models');

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
};
