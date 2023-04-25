const http = require('http'); // importa uma biblioteca http com os protocolos da internet

//ip e porta do servidor 
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Bem vindo Andre');
});

// servidor escutando/rodando na porta.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
