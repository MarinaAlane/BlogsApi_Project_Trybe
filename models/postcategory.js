const PostCategories = function PostCategories(sequelize, DataTypes) {
  const postCategories = sequelize.define('PostCategories', {
    postId: DataTypes.NUMBER,
    categoryId: DataTypes.NUMBER,
  },
  {    
    timestamps: false, 
  });

  return postCategories;
};

module.exports = PostCategories;