module.exports = (sequelize, DataTypes) => sequelize.define(
  'Categorie', {
    categorieId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false, tableName: 'Categories', underscored: true,
  },
);
