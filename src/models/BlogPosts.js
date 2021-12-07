const BlogPosts = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPosts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.Users, { 
      foreignKey: 'userId',
      as: 'user',
    });
  };
  return blogPost;
};

module.exports = BlogPosts;