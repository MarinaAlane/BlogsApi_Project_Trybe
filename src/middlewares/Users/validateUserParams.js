const { HTTP_BAD_REQUEST_STATUS } = require('../../utils/statusCode');

const validateEmail = (email) => {
    if (!email) return { erro: HTTP_BAD_REQUEST_STATUS, message: 'email is required' };
    
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const emailIsValid = regex.test(email);
    
    if (!emailIsValid) {
      return { erro: HTTP_BAD_REQUEST_STATUS, message: 'email must be a valid email' };
    }
    return {};
};

const validateName = (displayName) => {
  if (displayName.length < 8) {
    return { 
      erro: HTTP_BAD_REQUEST_STATUS,
      message: 'displayName length must be at least 8 characters long',
    };
  }
  return {};
};

const validatePassword = (password) => {
  if (!password) {
    return { erro: HTTP_BAD_REQUEST_STATUS, message: 'password is required' };
  }
  if (password.length !== 6) {
    return { 
      erro: HTTP_BAD_REQUEST_STATUS,
      message: 'password length must be 6 characters long',
    };
  }
  return {};
};

const validateUserParams = (req, res, next) => {
    const { displayName, email, password } = req.body;

    const validatedName = validateName(displayName);
    const validatedEmail = validateEmail(email);
    const validatedPassword = validatePassword(password);

    if (validatedName.erro) {
        return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: validatedName.message });
    }
    if (validatedEmail.erro) {
      return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: validatedEmail.message });
    }
    if (validatedPassword.erro) {
      return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: validatedPassword.message });
    }

    next();
};

module.exports = { 
    validateUserParams,
};