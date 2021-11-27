const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/user', userRoutes);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!!!!!!`));
