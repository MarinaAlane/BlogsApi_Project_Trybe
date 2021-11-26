module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTERGER,
    createdAt: { type: DataTypes.DATE, field: 'published' },
    updatedAt: { type: DataTypes.DATE, field: 'Updated' },
  },
  {
    timestamps: true,
  });

  BlogPosts.associate = (models) => {
    BlogPosts.hasOne(models.User, { foreignKey: 'userId', as: 'user' });
  };

  return BlogPosts;
};