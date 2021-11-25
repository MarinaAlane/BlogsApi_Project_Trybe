'use strict';

const Users = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    id: DataTypes.NUMBER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  });
  return Users
};

module.exports = Users;
