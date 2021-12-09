const PostCategories = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define(
    'PostsCategories',
    {},
    { timestamps: false, tableName: 'PostsCategories' },
  );

  PostsCategories.associate = (models) => {
    models.BlogPost.belongsToMany(
      models.categories,
      { as: 'categories', through: PostsCategories, foreignKey: 'postId' },
    );

    models.categories.belongsToMany(
      models.BlogPost,
      { as: 'BlogPost', through: PostsCategories, foreignKey: 'categoryId' },
    );
  };

  return PostsCategories;
};

module.exports = PostCategories;
