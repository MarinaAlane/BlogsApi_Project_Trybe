const { user } = require('../models');

const findUser = async (req, res, next) => {
  const { id } = req.params;

  const verifyUser = await user.findByPk(id);

  if (verifyUser === null) {
    return res.status(404).json({
      message: 'User does not exist',
    });
  }
  next();
};

module.exports = {
  findUser,
};
