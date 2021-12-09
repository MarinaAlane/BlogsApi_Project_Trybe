const PostCategories = function PostCategories(sequelize, DataTypes) {
  const postcategories = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER, primaryKey: true },
    categoryId: { type: DataTypes.INTEGER, primaryKey: true },
  }, { timestamps: false, tableName: 'PostsCategories' });
  postcategories.associated = (models) => {
    models.Category.belongsToMany(models.BlogPost, { as: 'BlogPosts',
      through: postcategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPost.belongsToMany(models.Category, { as: 'Categories',
      through: postcategories,
      foreignKey: 'postId', 
      otherKey: 'categoryId',
    });
  };  
  return postcategories;
};

module.exports = PostCategories;