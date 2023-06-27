// Aplicação com framework Express Instalado
// Será usado daqui para frente esse aqui.
const express = require('express')
const app = express()
// declarado cors para dar permissão para o back e o front se comunicarem
const cors = require('cors');
const port = 3001 // Alterado a porta para rodar no servidor do outro código de frontend

// usando o cors
app.use(cors());


//faz a conversão de JSON para JS
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Arquivo com rotas para o cadastro de livros
const livros = require('./routes/livros.js');

//identificação da rota e da const (require) associada
app.use('/livros',livros);
//a rota /livros retorna a lista dos livros cadastrados em formato json

const autores = require('./routes/autores.js');
app.use('/autores',autores);

const editoras = require('./routes/editoras.js');
app.use('/editoras',editoras);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//exemplo relacionado a filmes
app.use(express.json());
app.post('/filmes',(req,res) => {  
  
// const titulo = req.body.titulo;
// const genero = req.body.genero;
const {titulo, genero} = req.body;
res.send(`Filme: ${titulo} - Genero: ${genero}, recebido`);
});

app.post('/livros', (req, res) => {
  const {autor, nome, editora} = req.body;
  res.send(`Nome: ${nome} - Autor: ${autor}, Editora: ${editora}`);

});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

