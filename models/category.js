// 'use strict';

const Category = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Category', {
    name: DataTypes.STRING,
  });

  return Categories;
};

module.exports = { Category };
