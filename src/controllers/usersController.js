const usersServ = require('../services/usersServ');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = { displayName, email, password, image };
  const response = await usersServ.creatingUser(user);

/*   if (result.hasOwnProperty('token')) {
    return res.status(200).json(result);
  } */

  const result = 'token' in response;

  if (result) return res.status(201).json(response);

  return res.status(409).json(response);
};

const getUserById = (_req, res) => {
console.log('get user by id');
return res.status(200).json({ message: 'user id' });
};

module.exports = {
  createUser,
  getUserById,
};