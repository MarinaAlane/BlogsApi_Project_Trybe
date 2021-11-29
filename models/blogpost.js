const BlogPost = (sequelize, DataTypes) => {
  const newPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
    tableName: 'BlogPosts',
  });

  newPost.associate = (models) => {
    newPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return newPost;
};

module.exports = BlogPost;