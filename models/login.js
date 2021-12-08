// 'use strict';

const Login = (sequelize, DataTypes) => {
  const Logins = sequelize.define('Login', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  return Logins;
};

module.exports = { Login };
