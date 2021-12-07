const Categories = (sequelize, DataTypes) => {
  const category = sequelize.define('Categories', {
    // id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
   timestamps: false,
   tableName: 'Categories',
  });

  // Category.associate = (models) => {
  //   Category.hasMany(
  //     models.PostsCategory, {
  //       foreignKey: 'categoryId', as: 'category',
  //     },
  //   );
  // };

  return category;
};

module.exports = Categories;