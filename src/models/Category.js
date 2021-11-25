const Categories = (sequelize, DataTypes) => {
  const categories = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  }, {
    tableName: 'Categories',
    timestamps: false,
  });

  return categories;
};

module.exports = Categories;
