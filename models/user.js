const User = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phonenum: DataTypes.STRING,
  });

  return Users;
};

module.exports = User;