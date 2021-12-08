module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {}, { timestamps: false });
  PostsCategory.associate = (models) => {
    models.User.belongsToMany(models.Category, {
      as: 'categories',
      through: PostsCategory,
      foreignKey: 'id',
      otherKey: 'postId',
    });
  };
  PostsCategory.associate = (models) => {
    models.Category.belongsToMany(models.User, {
      as: 'users',
      through: PostsCategory,
      foreignKey: 'postId',
      otherKey: 'id',
    });
  };
  return PostsCategory;
};
