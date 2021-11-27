module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  }, { timestamps: false });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'user',
    }); 
};

  return BlogPost;
};