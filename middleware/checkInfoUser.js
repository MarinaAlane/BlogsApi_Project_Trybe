const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User, Categories } = require('../models');

const checkDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long', 
    });
  }
  next();
};

const checkEmail = (req, res, next) => {
  const { email } = req.body;
  // encontrei a muito tempo na internet e trago de projeto em projeto, acabei perdendo o link de referência.
  const emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  const emailIsValid = emailPattern.test(email);
  User.findAll({ where: { email } }).then((e) => {
    if (e.length > 0) {
      return res.status(409).json({ message: 'User already registered' });
    }
  });
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (!emailIsValid) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const checkPassword = (req, res, next) => {
  const { password } = req.body;
  
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }

  next();
};

const checkLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (email === undefined) {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (password === undefined) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (!email) {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  
  next();
};

const checkToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const decodeToken = jwt.decode(token, process.env.JWT_SECRET);
  if (!decodeToken) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

const checkName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();
};

const checkBlogPost = (req, res, next) => {
  const { title, categoryIds, content } = req.body;
  if (!title) {
    return res.status(400).json({ message: '"title" is required' });
  }
  if (!categoryIds) {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }
  if (!content) {
    return res.status(400).json({ message: '"content" is required' });
  }
  next();
};

const checkCategoryIds = (req, res, next) => {
  const { categoryIds } = req.body;

  return categoryIds.map((e) => Categories.findOne({ where: { id: e } })
    .then((result) => {
    if (!result) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }
    next();
  }));
};

module.exports = {
  checkDisplayName,
  checkEmail,
  checkPassword,
  checkLogin,
  checkToken,
  checkName,
  checkBlogPost,
  checkCategoryIds,
};