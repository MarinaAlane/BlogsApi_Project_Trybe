const { User } = require('../models');

const createNewUser = async (body) => {
  const { email } = body;    
  const user = await User.findOne({ where: { email } });  

  if (user) return { message: 'User already registered' };
  
  return body;
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    return ({ message: 'Invalid fields' }); 
  }

  if (user.password !== password) {
    return ({ message: 'Invalid fields' }); 
  }

  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll();

  return users;
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id } });
  console.log(user);
  
  if (!user) return { message: 'User does not exist' };

  return user;
};

module.exports = {
  createNewUser,
  loginUser,
  getAllUsers,
  getUserById,
};