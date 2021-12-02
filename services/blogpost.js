const { BlogPost } = require('../models');
const { Categories } = require('../models');
const { blogCategories } = require('../models/');


const createPost = async (data, userId) => {
  const { title, categoryIds, content } = data;

  if (!title) {
    return { message: '"title" is required', status: 400 };
  }
  if (!categoryIds) {
    return { message: '"categoryIds" is required', status: 400 };
  }
  if (!content) {
    return { message: '"content" is required', status: 400 };
  }

  try {
    const categories = await Categories.findAll({where: 
      {
        category_id: categoryIds
      }
    });
    console.log('HAS CATEGORY AQUI', categories)

    if(categories.length !== categoryIds.length) {
      return { message: '"categoryIds" not found', status: 400 };
    }

    console.log('O USER ID TA AQ', userId)

    const newBlogPost = await BlogPost.create({ title, content, userId });
    console.log(newBlogPost, 'ESSE É O RESULTADO');

    await newBlogPost.addCategories(categories);
    return newBlogPost;

  } catch (error) {
    console.log(error.message);

    return { message: 'Algo deu errado', status: 500 };
  }
};

module.exports = {
  createPost,
};