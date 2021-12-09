module.exports = (sequelize) => {
  const PostCategorie = sequelize.define(
    'PostCategorie', { }, { timestamps: false, tableName: 'PostsCategories', underscored: true },
  );

  PostCategorie.associate = (models) => {
    models.Post.belongsToMany(models.Categorie, {
      as: 'categories',
      through: PostCategorie,
      foreignKey: 'post_id',
      otherKey: 'categorie_id',
    });
    models.Categorie.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: PostCategorie,
      foreignKey: 'categorie_id',
      otherKey: 'post_id',
    });
  };

  return PostCategorie;
};
