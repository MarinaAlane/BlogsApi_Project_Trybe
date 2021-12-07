module.exports = (err, _req, res, _next) => {
  if (err.statusCode) {
    const { statusCode, message } = err;
    return res.status(statusCode).json({ message });
  }
  return res.status(500).json({ message: 'Erro interno' });
};