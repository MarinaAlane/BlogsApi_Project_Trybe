function sendStatusError(code, message, res) {
  res.status(code).json({
    err: {
      code: 'invalid_data',
      message,
    },
  });
}

module.exports = sendStatusError;