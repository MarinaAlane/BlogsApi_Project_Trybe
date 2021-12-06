'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const postsCategoriesTable = await queryInterface.createTable("PostsCategories", {
      postId: {
        type: Sequelize.INTEGER,
        field: "id",
        references: {
          model: "BlogPosts",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        primaryKey: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        field: "id",
        references: {
          model: "Categories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        primaryKey: true,
      },
    });

    return postsCategoriesTable;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("PostsCategories");
  }
};
