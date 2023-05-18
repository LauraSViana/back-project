const express = require('express');
const app = express();
const PORT = 3000;

// importa os itens que foram separados (rotas e middlewares)

const userRoutes = require("./routes/users");

const db = require("./config/DB_mysql");



// possibilita o uso de json
app.use(express.json());

// situaçào hipotética de validação de token de usuário
// app.use(tokenValidation);

app.use(userRoutes);


// roda o servidor na porta definida em PORT, poderia ser qualquer valor que não está em uso no computador
app.listen(3000, async () => {

  // retorna estado da conexão com o banco de dados ao inicializar
  try {
    await db.getConnection();
    console.log('Conectado no mysql');
  } catch (error) {
    console.log('Erro na conexão com o banco de dados');
  }

  console.log('running in port ' + PORT);
});