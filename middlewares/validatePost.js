const validateTitle = (title) => {
  if (title === '') {
    return {
      error: {
        code: 400,
        message: '"title" is not allowed to be empty',
      },
    };
  }

  if (!title) {
    return {
      error: {
        code: 400,
        message: '"title" is required',
      },
    };
  }

  return true;
};

const validateContent = (content) => {
  if (content === '') {
    return {
      error: {
        code: 400,
        message: '"content" is not allowed to be empty',
      },
    };
  }

  if (!content) {
    return {
      error: {
        code: 400,
        message: '"content" is required',
      },
    };
  }

  return true;
};

const validateCategory = (category) => {
  if (category === '') {
    return {
      error: {
        code: 400,
        message: '"categoryIds" is not allowed to be empty',
      },
    };
  }

  if (!category) {
    return {
      error: {
        code: 400,
        message: '"categoryIds" is required',
      },
    };
  }

  return true;
};

module.exports = {
  validateTitle,
  validateContent,
  validateCategory,
};
