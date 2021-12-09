const sendStatusError = require('./sendStatusError');
const { MESSAGE_ERROR12 } = require('./messageError');

  function checkName(res, name) {
    if (name === undefined) sendStatusError(400, MESSAGE_ERROR12, res);
  }
  
  function validateRegistration(req, res, next) {
    const { name } = req.body;

    checkName(res, name);

    next();
  }
  
  module.exports = validateRegistration;