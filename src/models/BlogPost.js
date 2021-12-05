module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {

    // database fields:
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,

  }, // options:
  { tableName: 'BlogPosts', timestamps: false });

    // association:
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { 
      foreignKey: 'userId',
      as: 'posts',
    });
  };

  return BlogPost;
};
