const { BlogPost, User, Category } = require('../models');

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

module.exports = { createIt, getAll };