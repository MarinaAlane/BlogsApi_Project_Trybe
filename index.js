const express = require('express');
const userRouter = require('./routes/userRoutes');
const loginRouter = require('./routes/loginRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const blogPostRoutes = require('./routes/blogPostRoutes');

const app = express();
app.use(express.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoryRouter); 
app.use('/post', blogPostRoutes);

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
