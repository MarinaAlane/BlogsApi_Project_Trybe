const { createJWT } = require('../middlewares/createJWT');
const loginService = require('../services/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { error } = await loginService.validateData(email, password);
    if (error) return res.status(error.code).json({ message: error.message });

    const user = await loginService.findUser(email);
    if (user.error) return res.status(user.error.code).json({ message: user.error.message });

    const token = createJWT(user);

    return res.status(200).json({ token });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = login;
