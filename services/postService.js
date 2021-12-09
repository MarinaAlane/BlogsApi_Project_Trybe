const { validateTitle, validateCategory, validateContent } = require('../middlewares/validatePost');
const { BlogPost, Category, User } = require('../models');

const validaData = (title, content, categoryIds) => {
  const valTitles = validateTitle(title);
  const valContent = validateContent(content);
  const valPassWord = validateCategory(categoryIds);

  return [valTitles, valContent, valPassWord];
};

const validaDataNotPassWord = (title, content) => {
  const valTitles = validateTitle(title);
  const valContent = validateContent(content);

  return [valTitles, valContent];
};

const searchForError = (title, content, categoryIds) => {
  if (categoryIds) {
    const result = validaData(title, content, categoryIds);
    const find = result.filter((item) => item.error);
    return find;
  }

  const result = validaDataNotPassWord(title, content);
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

const validatePost = (data) => {
  if (!data) {
    return {
      error: {
        code: 401,
        message: 'Unauthorized user',
      },
    };
  }
  return true;
};

const updatePostForId = async (id, userId, title, content) => {
  const blogPost = await BlogPost.findByPk(id);
  const isValidPost = validatePost(blogPost);
  if (isValidPost.error) return isValidPost;

  const userExists = blogPost.dataValues.id === userId;
  const notExists = validatePost(userExists);
  if (notExists.error) return notExists;

  await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  const findBlogPost = await BlogPost.findByPk(id,
    { include: { model: Category, as: 'categories', through: { attributes: [] } } });

  return findBlogPost;
};

module.exports = {
  resultData,
  createPost,
  allBlogsPost,
  searchPostById,
  updatePostForId,
};
