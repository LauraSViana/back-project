const mysql = require('mysql2');

// TODO: recuperar dados de variáveis de ambiente
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'aula',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0
};

module.exports = mysql.createPool(dbConfig).promise();