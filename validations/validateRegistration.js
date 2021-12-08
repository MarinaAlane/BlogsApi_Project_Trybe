const { MESSAGE_ERROR1, MESSAGE_ERROR2,
  MESSAGE_ERROR3, MESSAGE_ERROR4, MESSAGE_ERROR5, MESSAGE_ERROR6 } = require('./messageError');

function checkPassword(res, pass) {
  if (pass === undefined) res.status(400).json({ message: MESSAGE_ERROR3 });
  if (typeof (pass) !== 'string') res.status(400).json({ message: MESSAGE_ERROR1 });
  if (pass.length <= 5) res.status(400).json({ message: MESSAGE_ERROR2 });
}

function checkEmail(res, email) {
  const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; // @source https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail

  if (email === undefined) res.status(400).json({ message: MESSAGE_ERROR4 });
  if (!emailRegex.test(email)) res.status(400).json({ message: MESSAGE_ERROR1 });
}

function checkDisplayName(res, displayName) {
  if (displayName === undefined) res.status(400).json({ message: MESSAGE_ERROR5 });
  if (displayName === undefined) res.status(400).json({ message: MESSAGE_ERROR5 });
  if (displayName.length <= 7) res.status(400).json({ message: MESSAGE_ERROR6 });
}

function validateRegistration(req, res, next) {
  const { password, email, displayName } = req.body;
  
  checkPassword(res, password);
  checkEmail(res, email);
  checkDisplayName(res, displayName);

  next();
}

module.exports = validateRegistration;