module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {},
    // options
    { timestamps: false, tableName: 'PostsCategories', underscored: true });

  // associations
  PostsCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(
      models.Categories,
      { as: 'categories', through: PostsCategories, foreignKey: 'postId', otherKey: 'categoryId' },
    );

    models.Categories.belongsToMany(
      models.BlogPosts,
      { as: 'blogPosts', through: PostsCategories, foreignKey: 'categoryId', otherKey: 'postId' },
    );
  };

  return PostsCategories;
};
