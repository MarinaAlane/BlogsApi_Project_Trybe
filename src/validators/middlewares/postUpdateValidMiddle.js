// const { post: { getByIdTwo }, category: { getAllByArrayIds } } = require('../../services'); // It's part of commented block to follow
// const getByArrayIds = require('../../utils/getByArrayIds'); // It's part of commented block to follow
const { post: { getByIdTwo } } = require('../../services');

const STATUS_UNAUTHORIZED = 401;
const STATUS_BAD_REQUEST = 400;
const STATUS_NOT_FOUND = 404;

const MSG_UNAUTHORIZED_USER = 'Unauthorized user';
const MSG_MISSING_TITLE = '"title" is required';
const MSG_EMPTY_TITLE = '"title" is not allowed to be empty';
const MSG_MISSING_CONTENT = '"content" is required';
const MSG_EMPTY_CONTENT = '"content" is not allowed to be empty';
const MSG_POST_NOT_FOUND = 'Post does not exist';
const MSG_CATEGORYIDS_FOUND = 'Categories cannot be edited';

/** This block is commented for Future implementation of 'categoriesValidator' feature,
 * which has to do with the comments in SERVICE about 'router.put('/:id'' feature.

const MSG_MISSING_CATEGORY = '"categoryIds" is required';
const MSG_EMPTY_CATEGORY = '"categoryIds" is not allowed to be empty';
const MSG_CATEGORY_NOT_FOUND = '"categoryIds" not found';

async function categoryIdsValidator(expressParams) {
  const { req, res, next } = expressParams;
  const { body } = req;

  try {
    if (typeof body.categoryIds === 'undefined') {
      return res.status(STATUS_BAD_REQUEST).json({ message: MSG_MISSING_CATEGORY });
    }
  
    if (!body.categoryIds) {
      return res.status(STATUS_BAD_REQUEST).json({ message: MSG_EMPTY_CATEGORY });
    }
    const categories = await getByArrayIds(body.categoryIds, getAllByArrayIds);
  
    if (body.categoryIds.length !== categories.length) {
      return res.status(STATUS_BAD_REQUEST).json({ message: MSG_CATEGORY_NOT_FOUND });
    }

    req.categories = categories;
    next();
  } catch (error) {
    next(error);
  }
} */

async function categoriesValidator(expressParams) {
  const { req, res, next } = expressParams;
const { categoryIds } = req.body;

    if (categoryIds) {
      return res.status(STATUS_BAD_REQUEST).json({ message: MSG_CATEGORYIDS_FOUND });
    }

    next();
}

async function userValidator(expressParams, post) {
  const { req, res, next } = expressParams;
  const { id: userId } = req.user;

  try {
    if (post.userId !== userId) {
      return res.status(STATUS_UNAUTHORIZED).json({ message: MSG_UNAUTHORIZED_USER });
    }

    categoriesValidator(expressParams);
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

function contentValidator(expressParams) {
  const { req, res } = expressParams;
  const { body } = req;
  const { content } = body;

    if (typeof content === 'undefined') {
      return res.status(STATUS_BAD_REQUEST).json({ message: MSG_MISSING_CONTENT });
    }

    if (!content) {
      return res.status(STATUS_BAD_REQUEST).json({ message: MSG_EMPTY_CONTENT });
    }
    postValidator(expressParams);
}

function titleValidator(expressParams) {
  const { req, res } = expressParams;
  const { body } = req;
  const { title } = body;

    if (typeof title === 'undefined') {
      return res.status(STATUS_BAD_REQUEST).json({ message: MSG_MISSING_TITLE });
    }
  
    if (!title) {
      return res.status(STATUS_BAD_REQUEST).json({ message: MSG_EMPTY_TITLE });
    }
    
    contentValidator(expressParams);
}

module.exports = (req, res, next) => {
    titleValidator({ req, res, next });
};