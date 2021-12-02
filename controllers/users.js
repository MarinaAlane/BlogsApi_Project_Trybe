const services = require('../services/users');
const { createToken } = require('../auth/validateJWT');

const createUser = async (req, res) => {
  const {
    displayName,
    email,
    password,
    image,
   } = req.body;
  console.log(displayName);
  const { dataValues } = await services.createUser(displayName, email, password, image);
  delete dataValues.password;
  const userToken = createToken({ payload: dataValues });

  return res.status(201).json({ token: userToken });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  const alreadyRegisteredUser = await services.findUserByEmail(email);
  console.log(alreadyRegisteredUser);
  if (!alreadyRegisteredUser || alreadyRegisteredUser.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  delete alreadyRegisteredUser.password;

  const userToken = createUser({ payload: alreadyRegisteredUser });

  return res.status(200).json({ token: userToken });
};

module.exports = {
  createUser,
  loginUser,
};
