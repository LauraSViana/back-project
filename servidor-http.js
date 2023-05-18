const http = require('http');
const port = 3000;

// Um simples servidor web utilizando o módulo nativo do node (http)
http.createServer((req, res) => {
  
  res.write('oi');
  res.end();

  // TODO: utilizar o parâmetro req para implementar lógicas de endpoint, get, post, etc

}).listen(port);