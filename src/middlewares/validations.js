const { Users, Categories, BlogPosts } = require('../models');
const { verifyJWT } = require('../auth/jwt');

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regexValidation = /\S+@\S+\.\S+/;

  const regexEmail = regexValidation.test(email);

  if (!regexEmail) { 
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const checkNameCategory = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();
};

const emailExists = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  next();
};

const emailNotEmpty = (req, res, next) => {
  const { email } = req.body;
  if (email === '') { 
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  next();
};

const passwordExists = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
};

const passwordNotEmpty = (req, res, next) => {
  const { password } = req.body;
  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  next();
};

const validPassword = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

const checkDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

const checkEmailonDataBase = async (req, res, next) => {
  const { email, password } = req.body;
  const emailUser = await Users.findOne({ where: { email, password } });
  // console.log(user.dataValues.email);
  if (!emailUser) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};

const tokenExists = async (req, res, next) => {
  const { authorization: token } = req.headers;
  // console.log(token);
  if (!token) { 
    return res.status(401).json({ message: 'Token not found' });
  }
  next();
};

const tokenValid = async (req, res, next) => {
  const { authorization: token } = req.headers;
  try {
     const infoUser = verifyJWT(token);
     req.user = infoUser;
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

const validateUser = async (req, res, next) => {
  const { id } = req.params;
  const { payload: { id: { userId } } } = req.user;
  const user = await BlogPosts.findOne({ where: { id } });
  if (user.userId !== userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  next();
};

const checkTitle = async (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: '"title" is required' });
  }
  next();
};

const validateCategories = async (categoryIds) => {
  const categories = await Categories.findAll();
  const categoriesIdArray = categories.map((category) => category.id);
  return categoryIds.every((ids) => categoriesIdArray.includes(ids));
};

const checkContent = async (req, res, next) => {
  const { content } = req.body;
  if (!content) { return res.status(400).json({ message: '"content" is required' }); }
  next();
};

const checkCategoryIds = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) { return res.status(400).json({ message: '"categoryIds" is required' }); }
  next();
};

const checkUniqueUser = async (req, res, next) => {
  const { email } = req.body;
const findByEmail = await Users.findOne({ where: { email } });
 if (findByEmail) {
  return res.status(409).json({ message: 'User already registered' });
 }
 next();
};

const checkExistanceUser = async (req, res, next) => {
  const { id } = req.params;
  const user = await Users.findOne({ where: { id } });
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  next();
};

const notUpdateCategory = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (categoryIds) {
    return res.status(400).json({ message: 'Categories cannot be edited' });
  }
  next();
};

const doesPostExists = async (req, res, next) => { 
  const { id } = req.params;
  const post = await BlogPosts.findOne({ where: { id } });
  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  next();
};

module.exports = { validateEmail, 
  checkUniqueUser,
validPassword,
emailExists,
passwordExists,
checkDisplayName,
checkEmailonDataBase,
passwordNotEmpty,
emailNotEmpty,
checkExistanceUser,
tokenValid,
tokenExists,
checkNameCategory,
checkTitle,
checkContent,
checkCategoryIds,
validateCategories,
notUpdateCategory,
validateUser,
doesPostExists,
 };
