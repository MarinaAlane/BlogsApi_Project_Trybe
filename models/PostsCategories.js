const PostsCategories = (sequelize, DataTypes) => {
  const PostsCategorie = sequelize.define('PostsCategories', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });

  PostsCategorie.associate = (models) => {
    PostsCategorie.belongsTo(models.Categories, { as: 'categories', foreingKey: 'categoryId' });
  };
  return PostsCategorie;
};

module.exports = PostsCategories;
