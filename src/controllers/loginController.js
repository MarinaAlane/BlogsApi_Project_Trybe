const takeJwt = require('../auth/createToken');
const loginServ = require('../services/loginService');

const proceedLogin = async (req, res) => {
  const { email } = req.body;

  const uniqueUser = await loginServ.findingOneUser(email);

  if (uniqueUser) {
    const token = takeJwt(email);
    return res.status(200).json({ token });
  }

  return res.status(400).json({ message: 'Invalid fields' });
};

module.exports = {
  proceedLogin,
 };