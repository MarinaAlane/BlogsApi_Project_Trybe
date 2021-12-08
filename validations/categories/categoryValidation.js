const errors = require('../errors');

const validateCategory = (name) => {
  if (!name) return errors.missingName;
}

module.exports = { validateCategory };
