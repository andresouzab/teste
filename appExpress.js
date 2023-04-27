// Aplicação com framework Express Instalado
// Será usado daqui para frente esse aqui.

const express = require('express')
const app = express()
const port = 3000

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
