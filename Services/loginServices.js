const jwt = require('jsonwebtoken');
const { Users } = require('../models/index');

const login = async (email, password) => {
  const userExists = await Users.findOne({ where: { email } });
  if (!userExists) { return { errorCode: 'USER_NOT_EXISTS' }; }  
  
  const topSecret = 'coisa';
  const jwtconfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  const dataOfUser = {
    email,
    password,
  };
  // console.log(dataOfUser);
  const token = jwt.sign({ data: dataOfUser }, topSecret, jwtconfig);
  return token;
};

module.exports = {
  login,
};