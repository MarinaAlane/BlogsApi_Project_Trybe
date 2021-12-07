const validateName = (req, res, next) => {
  const { displayName } = req.body;
  if (!displayName || displayName.length <= 7) {
    return res.status(400)
      .json({ message: '"displayname" length must be at least 8 characters long' });
  }
  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
  if (!email || !regex.test(email)) {
    return res.status(400)
      .json({ message: '"email" must be a valid email' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length !== 6) {
    return res.status(400).json({ message: '"password" must be 6 charecters long' });
  }

  next();
};

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
};