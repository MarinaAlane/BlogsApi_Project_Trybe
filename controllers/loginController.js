const loginService = require('../services/loginService');

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await loginService.signIn(email, password);
        
    return login.token
      ? res.status(login.code).json(login.token)
      : res.status(login.code).json({ message: login.message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });  
  }
};

module.exports = { signIn };
