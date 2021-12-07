// models/BlogPost.js
module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'BlogPosts',
  });

  BlogPost.associate = ({ User }) => {
    BlogPost.belongsTo(User,
      { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost;
};
