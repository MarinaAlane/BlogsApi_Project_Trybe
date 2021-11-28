// const ApiError = require('../utils/ApiError');
const VALIDATION = require('../utils/validateFields');

function validateUserFields(req, _res, next) {
  const { body } = req;

  const fieldExists = VALIDATION.verifyFieldExists(body);
  if (fieldExists) return next(fieldExists());
  const fieldLength = VALIDATION.verifyFieldLength(body);
  if (fieldLength) return next(fieldLength());
  const incorrectEmailFormat = VALIDATION.verifyEmailFormat(body);
  if (incorrectEmailFormat) return next(incorrectEmailFormat());

  return next();
}

module.exports = validateUserFields;