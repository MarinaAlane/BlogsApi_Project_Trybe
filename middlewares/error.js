const errorIndex = require('../utils/errorCodes');

module.exports = (err, _req, res, _next) => {
  if (err.statusCode) {
    const { status, message } = errorIndex[err.statusCode];
    return res.status(status).json({ message });
  } console.error(err, 'Internal client error');
  return res.status(500).json({
    error: { message: `Internal server error: ${err.message}` },
  });
};
