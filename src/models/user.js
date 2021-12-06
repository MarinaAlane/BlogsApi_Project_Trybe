module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  });
  return User;
};
