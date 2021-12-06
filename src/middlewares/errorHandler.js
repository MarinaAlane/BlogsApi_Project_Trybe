const statusCodes = require('../schemas/statusCodes');

module.exports = (error, _req, res, _next) => {
  const { statusCode, message } = error;

  if (statusCode) return res.status(statusCode).json({ message });

  return res.status(statusCodes.internalServerError).json({ error });
};