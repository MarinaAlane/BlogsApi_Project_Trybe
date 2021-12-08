const { StatusCodes } = require('http-status-codes');
const sendStatusError = require('./sendStatusError');

const MESSAGE_ERROR1 = '"name" length must be at least 5 characters long';
const MESSAGE_ERROR2 = '"quantity" must be larger than or equal to 1';
const MESSAGE_ERROR3 = '"quantity" must be a number';

function invalidData(req, res, next) {
  const { name, quantity } = req.body;

  if (name.length < 5) {
    sendStatusError(StatusCodes.UNPROCESSABLE_ENTITY, MESSAGE_ERROR1, res);
  } else if (quantity <= 0) {
    sendStatusError(StatusCodes.UNPROCESSABLE_ENTITY, MESSAGE_ERROR2, res);
  } else if (typeof (quantity) === 'string') {
    sendStatusError(StatusCodes.UNPROCESSABLE_ENTITY, MESSAGE_ERROR3, res);
  } else next();
}

module.exports = invalidData;