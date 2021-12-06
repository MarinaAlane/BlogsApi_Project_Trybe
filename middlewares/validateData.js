const validatDisplayname = (displayName, length) => {
  if (!displayName || displayName === '' || displayName.length < length) {
    return {
      error: {
        code: 400,
        message: '"displayName" length must be at least 8 characters long',
      },
    };
  }

  return true;
};

const validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  if (!email) {
    return {
      error: {
        code: 400,
        message: '"email" is required',
      },
    };
  }

  if (!regex.test(email)) {
    return {
      error: {
        code: 400,
        message: '"email" must be a valid email',
      },
    };
  }

  return true;
};

const validatePassWord = (password, length) => {
  if (!password) {
    return {
      error: {
        code: 400,
        message: '"password" is required',
      },
    };
  }

  if (password === '' || password.length < length) {
    return {
      error: {
        code: 400,
        message: '"password" length must be 6 characters long',
      },
    };
  }

  return true;
};

module.exports = {
  validatDisplayname,
  validateEmail,
  validatePassWord,
};
