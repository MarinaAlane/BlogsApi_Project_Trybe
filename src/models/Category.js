module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Categories',
    },
  );

  // User.associate = (models) => {
  //   User.hasMany(models.BlosPost, { foreignKey: 'userId', as: 'autor' });
  // };

  return Category;
};
