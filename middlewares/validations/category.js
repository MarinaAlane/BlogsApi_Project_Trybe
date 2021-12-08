const { badRequest } = require('../../utils/codes');
const { required } = require('../../utils/errMsg');

const validateName = (req, res, next) => {
  const { name } = req.body;
  return name ? next() : res.status(badRequest).json(required('name'));
};

module.exports = {
  validateName,
};