const { User, Category } = require('../models');

const isValidDisplayName = (req, res, next) => {
  const { displayName } = req.body;

  if (!displayName) {
    return res.status(400).json({ message: '"displayName" is required' });
  }

  if (displayName.length < 8) {
    return res.status(400).json(
      {
        message: '"displayName" length must be at least 8 characters long',
      },
    );
  }

  next();
};

// https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
const isValidEmail = async (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;

  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  console.log(emailRegex.test(email), 'Estou no validations');

  const userExists = await User.findOne({ where: { email: req.body.email } });

  if (userExists) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

const isValidPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  if (password.length < 6) {
    return res.status(400).json(
      {
        message: '"password" length must be 6 characters long',
      },
    );
  }

  next();
};

const isValidName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  next();
};

const isValidTitle = (req, res, next) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: '"title" is required' });
  }

  next();
};

const isValidContent = (req, res, next) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: '"content" is required' });
  }

  next();
};

// Falta comparação pelo categoryIds
const isValidCategoryIds = async (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds) {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }

  const cat = await Category.findAll({ raw: true });

  const catIds = [];
  cat.forEach((element) => catIds.push(element.id));

  const existsIds = categoryIds.every((elem) => catIds.includes(elem));

  console.log(existsIds, cat);

  if (!existsIds) {
    return res.status(400).json(
      { message: '"categoryIds" not found' },
    );
  }
  next();
};

module.exports = {
  isValidDisplayName,
  isValidEmail,
  isValidPassword,
  isValidName,
  isValidTitle,
  isValidContent,
  isValidCategoryIds,
};
