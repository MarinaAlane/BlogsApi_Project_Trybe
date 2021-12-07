module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users',
    { id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      displayName: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      image: DataTypes.STRING },
    // options
    { timestamps: false, tableName: 'Users', underscored: true });

  // associations
  Users.associate = (models) => {
    Users.hasMany(
      models.BlogPosts,
      { foreignKey: 'userId', as: 'posts' },
    );
  };

  return Users;
};
