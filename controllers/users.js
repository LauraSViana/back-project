
const db = require('../config/DB_mysql');

const getUsers = async (req, res) => {

  // recupera lista de usuários, exibe no console e retorna na resposta de requisição
  const [rows, fields] = await db.execute('SELECT * FROM users');
  console.log(rows);

  res.json(rows);
};

const createUser = async (req, res) => {

  //aqui poderia ter uma lógica de salvar os dados no banco de dados
  const payload = req.body;
  
  // o coluna name deve existir na tabela users
  const toPersist = {
    name: payload.name
  };

  // inserir dados que veio da requisição
  try {
    await db.query('INSERT INTO `users` SET ?', toPersist);
  } catch {
    res.send('falha ao gravar dados');
    return;
  }

  res.send("ok");
};

const update = (req, res) => {
  
  // path params
  // pega o parâmetro id da url http://localhost:3000/user/123
  const id = req.params.id;
  
  // responde com o valor do id, poderia ser qualquer coisa
  res.send(id);
};

module.exports = {
  getUsers,
  createUser,
  update
}