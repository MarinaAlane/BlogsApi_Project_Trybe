const { StatusCodes } = require('http-status-codes');
const sendStatusError = require('./sendStatusError');

const MESSAGE_ERROR1 = 'Wrong product ID or invalid quantity';

function sales(req, res, next) {
  const errQuantity = req.body.some(({ quantity }) => quantity < 1);
  const errTypeString = req.body.some(({ quantity }) => typeof (quantity) === 'string');

  if (errQuantity) {
    return sendStatusError(StatusCodes.UNPROCESSABLE_ENTITY, MESSAGE_ERROR1, res);
  }

  if (errTypeString) {
    return sendStatusError(StatusCodes.UNPROCESSABLE_ENTITY, MESSAGE_ERROR1, res);
  }

  next();
}

module.exports = sales;
