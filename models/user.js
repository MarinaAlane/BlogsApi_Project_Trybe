const User = (sequelize, DataTypes) => {
  const UserIn = sequelize.define('User', {
    DisplayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
},
{ timestamps: false, tableName: 'Users' });

User.associate = (models) => {
  User.hasMany(models.BlogPost, { 
    foreignKey: 'userId', as: 'blogPost',
  });
};

  return UserIn;
};

module.exports = User; 