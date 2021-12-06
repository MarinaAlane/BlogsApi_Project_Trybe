"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersTable = await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: "id",
      },
      displayName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: "display_name",
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
        field: "email",
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        field: "password",
      },
      image: {
        allowNull: false,
        type: Sequelize.STREING,
        field: "image",
      },
    });

    return usersTable;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
