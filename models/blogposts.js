const BlogPosts = (sequelize, DataTypes) => {
  const blogPost = sequelize.define(
    'BlogPosts', {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    { 
      // timestamps: false,
      /* Para alterar ou indicar o nome da tabela ou alguma coluna do banco,
      podemos indicar nesse segundo parâmetro do model:
      https://cursos.alura.com.br/forum/topico-renomear-as-colunas-createdat-e-updatedat-130933
      https://sequelize.org/master/manual/model-basics.html#providing-the-table-name-directly */
      tableName: 'BlogPosts',
      createdAt: 'published',
      updatedAt: 'updated',
    },
  );

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };

  return blogPost;
};

module.exports = BlogPosts;