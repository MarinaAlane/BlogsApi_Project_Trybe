const PostCategories = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define(
    'PostsCategories',
    {},
    { timestamps: false, tableName: 'PostsCategories' },
  );

  PostsCategories.associate = (models) => {
    models.BlogPost.belongsToMany(
      models.Categories,
      { as: 'Categories', through: PostsCategories, foreignKey: 'postId', otherKey: 'id' },
    );

    models.Categories.belongsToMany(
      models.BlogPost,
      { as: 'BlogPost', through: PostsCategories, foreignKey: 'categoryId', otherKey: 'id',
      },
    );
  };

  return PostsCategories;
};

module.exports = PostCategories;
