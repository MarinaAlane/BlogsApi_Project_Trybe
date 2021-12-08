module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {}, { timestamps: false });
  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostsCategory,
      foreignKey: 'postId',
      otherKey: 'id',
    });
  };
  PostsCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogposts',
      through: PostsCategory,
      foreignKey: 'id',
      otherKey: 'postId',
    });
  };
  return PostsCategory;
};
