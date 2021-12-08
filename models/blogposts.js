module.exports = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPosts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, { timestamps: true, createdAt: 'published', updatedAt: 'updated' }); // Declarando timestamps false, porque tirei os campos de criação e atualização quando criei as migrations.
  // timestamps é true, porem altero o nome para como foi pedido no requisito.
   
  blogPost.associate = (models) => {
    blogPost.belongsTp(models.Users,
    // belongsTo - pertenca a
    // Esta referindo que post no campo userId pertence a tabela users.  
      { foreignKey: 'userId', as: 'user' });
  };
  return blogPost;
};