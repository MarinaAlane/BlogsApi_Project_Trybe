const Category = (sequelize, DataTypes) => {
  const categoryType = sequelize.define('categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'categories',
  });
  return categoryType;
};

module.exports = Category;
