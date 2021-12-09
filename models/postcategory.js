const PostCategories = function PostCategories(sequelize) {
  const postcategories = sequelize.define('PostCategory', {}, {
    timestamps: false,
  });
  postcategories.associated = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'BlogPosts',
      through: postcategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'Categories',
      through: postcategories,
      foreignKey: 'postId', 
      otherKey: 'categoryId',
    });
  };  
  return postcategories;
};

module.exports = PostCategories;