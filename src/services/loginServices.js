const { Users } = require('../models');
const jwt = require('../auth/jwt');

const userLogin = async ({ email }) => {
   const user = await Users.findOne({ where: { email } });
   const { id } = user;
  const jwtToken4user = jwt.createJWT({ userId: id, email: user.email });
  return jwtToken4user;
};

module.exports = { userLogin };