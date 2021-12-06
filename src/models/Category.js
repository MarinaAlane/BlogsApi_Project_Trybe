module.exports = (sequelize, DataTypes) => {
  const Caregory = sequelize.define(
    'Caregory',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Categories',
    },
  );

  return Caregory;
};
