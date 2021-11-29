const express = require('express');
const useRouter = require('./routers/userRouter');
const loginRouter = require('./routers/loginRouter');

require('dotenv').config(); 

const app = express();

app.use(express.json());

const PORT = 3000;

app.use('/', useRouter);
app.use('/', loginRouter);

app.listen(PORT, () => console.log(`Ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
