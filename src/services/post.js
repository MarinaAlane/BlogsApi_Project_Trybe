const { BlogPost, User, Category } = require('../models');

const STATUS_NOT_FOUND = 404;
const STATUS_UNAUTHORIZED = 401;
const MSG_UNAUTHORIZED_USER = 'Unauthorized user';
const MSG_POST_NOT_FOUND = 'Post does not exist';

const createIt = async (postData) => {
    try {
      const { body, user } = postData;
      const { id: userId } = user;

      const result = await BlogPost.create({ ...body, userId });
  
      return result;
    } catch (error) {
      return error;
    }
};

const getAll = async () => {
  try {
    const result = await BlogPost.findAll({ 
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    return result;
  } catch (error) {
    return error;
  }
};

const getAllFiltered = async (query) => {
  const { q } = query;

  if (!q) return getAll();
  
  try {
    const result = await BlogPost.findAll({ 
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    return result;
  } catch (error) {
    return error;
  }
};

const getById = async (id) => {
  try {
    const result = await BlogPost.findByPk(id, { 
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    if (result === null) {
      return { 
        status: STATUS_NOT_FOUND,
        message: MSG_POST_NOT_FOUND,
      };
    }

    return result;
  } catch (error) {
    return error;
  }
};

const getByIdTwo = async (postId) => {
  try {
    const result = await BlogPost.findByPk(postId);

    return result;
  } catch (error) {
    return error;
  }
};

const updateIt = async ({ postId, body }) => { // Source: https://stackoverflow.com/questions/38524938/sequelize-update-record-and-return-result
  try {
    const resultUpdate = await BlogPost.update({ ...body }, 
      { where: { id: postId } });

      if (resultUpdate[0] === 1) {
        const result = await BlogPost.findByPk(postId, { 
          include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
          ],
        });
        return result;
      }
  } catch (error) {
    return error;
  }
};

// Validators for deleteIt >>>

async function userValidator(expressParams, post) {
  const { req, res, next } = expressParams;
  const { id: userId } = req.user;

  try {
    if (post.userId !== userId) {
      return res.status(STATUS_UNAUTHORIZED).json({ message: MSG_UNAUTHORIZED_USER });
    }
  } catch (error) {
    next(error);
  }
}

async function postValidator(expressParams) {
  const { req, res, next } = expressParams;
  const { id: postId } = req.params;

  try {
    const post = await getByIdTwo(postId);
    if (post === null) { // It's not asked by Trybe "functional requirements", but I did implement it 
      return res.status(STATUS_NOT_FOUND).json({ message: MSG_POST_NOT_FOUND });
    }

    userValidator(expressParams, post);
  } catch (error) {
    next(error);
  }
}

// <<< Validators for deleteIt

const deleteIt = async (expressParams, postId) => {
  try {
    await postValidator(expressParams);

    await BlogPost.destroy({ where: { id: postId } });
  } catch (error) {
    return error;
  }
};

module.exports = { 
  createIt, 
  getAll, 
  getById, 
  getByIdTwo, 
  updateIt, 
  deleteIt,
  getAllFiltered };