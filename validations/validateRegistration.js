const sendStatusError = require('./sendStatusError');
const { MESSAGE_ERROR1, MESSAGE_ERROR2,
  MESSAGE_ERROR3, MESSAGE_ERROR4, MESSAGE_ERROR5, MESSAGE_ERROR6 } = require('./messageError');

function checkPassword(res, password) {
  if (password === undefined) sendStatusError(400, MESSAGE_ERROR3, res);
  if (typeof (password) !== 'string') sendStatusError(400, MESSAGE_ERROR1, res);
  if (password.length <= 5) sendStatusError(400, MESSAGE_ERROR2, res);
}

function checkEmail(res, email, emailRegex) {
  if (email === undefined) sendStatusError(400, MESSAGE_ERROR4, res);
  if (!emailRegex.test(email)) sendStatusError(400, MESSAGE_ERROR1, res);
}

function checkDisplayName(res, displayName) {
  if (displayName.length <= 7) sendStatusError(400, MESSAGE_ERROR6, res);
  if (displayName === undefined) sendStatusError(400, MESSAGE_ERROR5, res);
  if (typeof (displayName) !== 'string') sendStatusError(400, MESSAGE_ERROR1, res);
}

function validateRegistration(req, res, next) {
  const { password, email, displayName } = req.body;
  const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; // @source https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail

  checkDisplayName(res, displayName);
  checkEmail(res, email, emailRegex);
  checkPassword(res, password);

  next();
}

module.exports = validateRegistration;