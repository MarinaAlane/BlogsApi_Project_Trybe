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
        foreignKey: true,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "Users",
          key: "id",
        },
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        field: 'published'
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        field: 'updated'
      },
    });

    return blogPostsTable;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("BlogPosts");
  }
};
