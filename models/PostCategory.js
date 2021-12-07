// models/PostCategory.js
module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize
    .define('PostCategory', {}, { timestamps: false, tableName: 'PostsCategories' });

  PostCategory.associate = ({ Category, BlogPost }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories', // alias para associação
      through: PostCategory, // tabela da associação.
      foreignKey: 'postId', // key de referencia a model
      otherKey: 'categoryId', // refere-se ao model com o qual estou criando a associação
    });

    Category.belongsToMany(BlogPost, {
      as: 'posts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostCategory;
};
