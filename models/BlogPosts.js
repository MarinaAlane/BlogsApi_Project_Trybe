module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize
    .define('BlogPosts', {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: {
          type: DataTypes.INTEGER,
          foreignKey: true,
        },
        published: DataTypes.STRING,
        updated: DataTypes.STRING,
      });

    BlogPosts.associate = (models) => {
      BlogPosts.belongsTo(models.Users, {
        foreignKey: 'userId',
        as: 'user',
      });
    };
};
