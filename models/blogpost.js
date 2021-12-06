const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    userId: { type: DataTypes.INTEGER, foreignKey: true, defaultValue: 1 },
  }, {
    timestamps: false,
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User,
    { foreignKey: 'userId', as: 'user' });
  };

  return blogPost;
};

module.exports = BlogPost;
