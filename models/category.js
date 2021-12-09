const Category = (sequelize, DataTypes) => {
  const Categorys = sequelize.define('Category',
  {
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });
  return Categorys;
};

module.exports = Category;