module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    createdAt: sequelize.DATE,
    updatedAt: sequelize.DATE,
  },
  {
    timestamps: true, createdAt: 'published', updatedAt: 'updated',
  });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'Users' });
  };
  BlogPost.associate = (models) => {
    BlogPost.hasMany(models.PostCategory, { foreignKey: 'postId', as: 'PostCategories' });
  };
  return BlogPost;
};