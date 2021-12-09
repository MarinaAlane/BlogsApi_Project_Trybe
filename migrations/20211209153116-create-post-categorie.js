'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories', {
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'post_id',
        references: {
          model: 'BlogPost',
          key: 'postId',
        },
      },
      categorieId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'categorie_id',
        references: {
          model: 'Categorie',
          key: 'categorieId',
        },
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('PostsCategories');
  }
};