const validateEmail = (email) => {
  if (email === '') {
    return {
      error: {
        code: 400,
        message: '"email" is not allowed to be empty',
      },
    };
  }

  if (!email) {
    return {
      error: {
        code: 400,
        message: '"email" is required',
      },
    };
  }

  return true;
};

const validatePassWord = (password) => {
  if (password === '') {
    return {
      error: {
        code: 400,
        message: '"password" is not allowed to be empty',
      },
    };
  }

  if (!password) {
    return {
      error: {
        code: 400,
        message: '"password" is required',
      },
    };
  }

  return true;
};

module.exports = {
  validateEmail,
  validatePassWord,
};
