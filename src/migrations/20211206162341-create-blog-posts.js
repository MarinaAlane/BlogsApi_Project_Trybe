'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const blogPostsTable = await queryInterface.createTable("BlogPosts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        field: "id",
        references: {
          model: "Users",
          key: "id",
        },
      },
      published: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });

    return blogPostsTable;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("BlogPosts");
  }
};
