const userServices = require('../Services/userService');

const createUser = async (request, response) => {
  const user = await userServices.createUser(request.body);
  if (user === 'exist') {
    return response.status(409).json({ message: 'User already registered' });
  }
    return response.status(201).json(user);
};

const userLogin = async (request, response) => {
  const { email, password } = request.body;
  const user = { email, password };
  const login = await userServices.userLogin(user);
  if (login === null) {
    return response.status(400).json({ message: 'Invalid fields' });
  }
  return response.status(200).json(login);
};

module.exports = {
  createUser,
  userLogin,
}; 
