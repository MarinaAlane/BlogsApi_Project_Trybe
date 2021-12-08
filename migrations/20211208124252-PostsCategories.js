'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories',
      {
        postId: Sequelize.INTEGER,
        categoryId: Sequelize.INTEGER
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  }
};
