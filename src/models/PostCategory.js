const PostCategoryModel = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
    {},
    { timestamps: false, tableName: 'PostsCategories' });

    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        as: 'Categories',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
      models.Category.belongsToMany(models.BlogPost, {
        as: 'BlogPosts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
    };
    return PostCategory;
};

module.exports = PostCategoryModel;