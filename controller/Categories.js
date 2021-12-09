// const { Category } = require('../models');
// const { MESSAGE_ERROR7 } = require('../validations/messageError');

async function createCategory(req, res) {
  // try {
  //   const { name } = req.body;
  //   // const users = await User.findAll({ where: { displayName } });
  //   // if (users.length >= 1) return res.status(409).json({ message: MESSAGE_ERROR7 });

  //   await User.create({ displayName, email, password, image });
  //   console.log(displayName);

  //   const token = jwt.sign(
  //     {
  //       data: { displayName, email, password, image } },
  //       process.env.JWT_SECRET,
  //       jwtConfig,
  //     );

  //   return res.status(201).json({ token });
  // } catch (e) {
  //   console.log(e);
  // }
  res.send('controller category');
}

module.exports = {
  createCategory,
};