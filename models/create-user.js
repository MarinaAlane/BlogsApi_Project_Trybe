const User = (sequelize, DataTypes) => {
  const UserType = sequelize.define('user', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Users',
  });

  UserType.associate = (models) => {
    UserType.hasMany(
      models.BlogPost,
      { foreignKey: 'userId', as: 'posts' },
    );
  };
  return UserType;
  };

module.exports = User;
