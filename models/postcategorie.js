module.exports = (sequelize) => {
  const PostCategorie = sequelize.define(
    'PostCategorie', { }, { timestamps: false, tableName: 'PostsCategories', underscored: true },
  );

  PostCategorie.associate = (models) => {
    models.Post.belongsToMany(models.Categorie, {
      as: 'categories',
      through: PostCategorie,
      foreignKey: 'id',
      otherKey: 'id',
    });
    models.Categorie.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: PostCategorie,
      foreignKey: 'id',
      otherKey: 'id',
    });
  };

  return PostCategorie;
};
