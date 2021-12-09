const Users = function Users(sequelize, DataTypes) {
  const users = sequelize.define('User', {
  displayName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  image: DataTypes.STRING,
  },
  {    
    timestamps: false, 
    tableName: 'Users',
  });

  users.associate = (models) => {
    users.hasMany(models.BlogPost, {
      foreignKey: 'userId', as: 'posts',
    });
  };
  
  return users;
};

module.exports = Users;