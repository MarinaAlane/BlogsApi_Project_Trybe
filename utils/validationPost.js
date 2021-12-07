const { BlogPost, Category, User } = require('../models');

const err = (statusCode) => ({ statusCode });

const validationTitle = (title) => {
  if (!title) throw err({ statusCode: 400, message: '"title" is required' });
};

const validationContent = (content) => {
  if (!content) throw err({ statusCode: 400, message: '"content" is required' });
};

const valdiationCategoryIds = (categoryIds) => {
  if (!categoryIds) throw err({ statusCode: 400, message: '"categoryId" is riqured' });
};

const ifCategorieExists = async (categoryIds) => {
  const search = await Category.getAll({ where: { id: categoryIds } });
  if (!search) throw err({ statusCode: 401, mensage: '"categoryIds" not found' });
};

const createPost = async (title, categoryIds, content, id) => {
  const result = await BlogPost.create({ userId: id, title, content, categoryIds })
  .then((post) => {
    post.addCategory(categoryIds);
    return ({ id: post.id, userId: post.userId, title: post.title, content: post.content });
  });
  return result;
};

const getById = async (id) => {
  const result = await BlogPost.findOne({ where: { id }, 
  include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } }] });
    if (!result) throw err({ statusCode: 401, message: 'Post does not exists' });
    return result;
};

const validationPost = async ({ title, categoryIds, content }, id) => {
  validationTitle(title);
  valdiationCategoryIds(categoryIds);
  validationContent(content);
  await ifCategorieExists(categoryIds);
  await createPost(title, categoryIds, content, id);
};

module.exports = {
  validationPost,
  getById,
};
