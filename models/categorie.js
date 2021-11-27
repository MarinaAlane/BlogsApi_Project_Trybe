const Categorie = (sequelize, DataTypes) => {
  const categorie = sequelize.define('Categorie', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return categorie;
};

module.exports = Categorie;