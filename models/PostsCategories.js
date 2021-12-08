const PostsCategories = (sequelize, DataTypes) => {
  const PostsCategorie = sequelize.define('PostsCategories', {
    postId: { type: DataTypes.INTEGER, foreignKey: true },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true },
  }, {
    timestamps: false,
  });

  PostsCategorie.associate = (models) => {
    PostsCategorie.belongsTo(models.Categories, { as: 'categories', foreingKey: 'categoryId' });
  };
  return PostsCategorie;
};

module.exports = PostsCategories;
