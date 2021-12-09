const PostCategories = (sequelize, _DataTypes) => {
  const Categories = sequelize.define(
    'PostsCategory',
    {},
    { timestamps: false, tableName: 'PostsCategory' },
  );

  Categories.associate = (models) => {
    models.BlogPost.belongsToMany(
      models.Category,
      { as: 'categories', through: Categories, foreignKey: 'id', otherKey: 'id' },
    );

    models.Category.belongsToMany(
      models.BlogPost,
      { as: 'BlogPost', through: Categories, foreignKey: 'id', otherKey: 'id',
      },
    );
  };

  return Categories;
};

module.exports = PostCategories;