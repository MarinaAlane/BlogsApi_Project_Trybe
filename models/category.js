const Category = (sequelize, DataTypes) => {
  const categoryType = sequelize.define('Categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
  });
  return categoryType;
};

module.exports = Category;
