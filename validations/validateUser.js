const validateDisplayName = async (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

const validateEmal = async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  const parseEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (parseEmail.test(email) === false) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

const verifyPassword = async (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password.length !== 6) {
    return res.status(400)
    .json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

module.exports = {
  validateDisplayName,
  validateEmal,
  verifyPassword,
};
