const { userJoi } = require('joi');

const validateUser = (request, response, next) => {
  const user = request.body;
  const { error } = userJoi.validate(user);
  if (error) return response.status(400).json({ message: error.details[0].message });
  return next();
};

module.exports = validateUser; 