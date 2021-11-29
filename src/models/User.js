const {
  userNameValidations, 
  passwordValidations,
  emailValidations,
} = require('../validations');

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: { type: DataTypes.STRING, validate: userNameValidations, allowNull: false },
    email: { type: DataTypes.STRING, validate: emailValidations, allowNull: false },
    password: { type: DataTypes.STRING, validate: passwordValidations, allowNull: false },
    image: DataTypes.STRING,
  }, 
  {
    timestamps: false,
    tableName: 'Users',
  });

  return User;
};

module.exports = UserModel;