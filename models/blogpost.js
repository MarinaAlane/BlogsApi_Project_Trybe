const BlogPosts = function BlogPosts(sequelize, DataTypes) {  
  const blogposts = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, 
  {
    timestamps: false,
    tableName: 'BlogPosts',
  });

  blogposts.associate = (models) => {
    blogposts.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user',
    });
  };

  return blogposts;
};

module.exports = BlogPosts;