const sendStatusError = require('./sendStatusError');
const { MESSAGE_ERROR3, MESSAGE_ERROR4,
  MESSAGE_ERROR9, MESSAGE_ERROR8, MESSAGE_ERROR10, MESSAGE_ERROR1 } = require('./messageError');

function checkEmail(res, email, emailRegex) {
  if (email === undefined) sendStatusError(400, MESSAGE_ERROR4, res);
  if (email.length === 0) sendStatusError(400, MESSAGE_ERROR10, res);
  if (!emailRegex.test(email)) sendStatusError(400, MESSAGE_ERROR1, res);
}

function checkPassword(res, password) {
  if (password === undefined) sendStatusError(400, MESSAGE_ERROR3, res);
  if (typeof (password) !== 'string') sendStatusError(400, MESSAGE_ERROR8, res);
  if (password.length === 0) sendStatusError(400, MESSAGE_ERROR9, res);
}

function validateLogin(req, res, next) {
  const { password, email } = req.body;
  const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; // @source https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail

  checkEmail(res, email, emailRegex);
  checkPassword(res, password);

  next();
}

module.exports = validateLogin;