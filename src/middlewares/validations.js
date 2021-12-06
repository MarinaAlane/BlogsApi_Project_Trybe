const { User } = require('../models');
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
  const { email } = req.body;
  const emailUser = await User.findOne({ where: { email } });
  // console.log(user.dataValues.email);
  if (!emailUser) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};

const tokenExists = async (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) { 
    return res.status(401).json({ message: 'Token not found' });
  }
  req.token = token;
  next();
};

const tokenValid = (req, res, next) => {
  const { token } = req;
  console.log(token);
  try {
    verifyJWT(token);
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

// const tokenValid = async (req, res, _next) => {
//   const { authorization: token } = req.headers;
//   console.log(`${token} Oiii !`);
//   if (!token) {
//     return res.status(401).json({ message: 'Token not found' });
//   }
 /*  try { 
      verifyJWT(token);
  } catch (error) { 
    if (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  } */
  /* next(); */
// };

const checkUniqueUser = async (req, res, next) => {
  const { email } = req.body;
const findByEmail = await User.findOne({ where: { email } });
 if (findByEmail) {
  return res.status(409).json({ message: 'User already registered' });
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
tokenExists,
tokenValid };