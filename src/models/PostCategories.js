const PostsCategories = (sequelize, _DataTypes) => {
  const postCategory = sequelize.define('PostsCategories', {
    // postId: { type: DataTypes.INTEGER, foreignKey: true },
    // categoryId: { type: DataTypes.INTEGER, foreignKey: true },
  }, {
    timestamps: false,
    // tableName: 'PostsCategories',
  });

  postCategory.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      through: 'postCategory', as: 'categories', foreignKey: 'postId', otherKey: 'categoryId',
    });
    models.Categories.belongsToMany(models.BlogPosts, {
      through: 'postCategory', as: 'posts', foreignKey: 'categoryId', otherKey: 'postId',
    });
  };
  return postCategory;
};

module.exports = PostsCategories;