function sendStatusError(code, message, res) {
  res.status(code).json({ message });
}

module.exports = sendStatusError;