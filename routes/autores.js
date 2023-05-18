//Importando o framework express
const express = require("express");
//Importando o framework express.Router
const router = express.Router();

//Dados de conexão com Bando de Dados
const dbKnex = require("../data/db_config"); //dados de conexão com o bd


//método get é usado para consulta
router.get("/",async(req,res) => {
    try{
        //para obter os autores pode-se utilizar .select().orderBy() ou apenas .orderBy()
        const autores = await dbKnex("autores").orderBy("id","desc");
        res.status(200).json(autores); //retorna statusCode ok e os dados
    }catch(error){
        res.status(400).json({msg:error.message}); //retorna status de erro e msg
    }
});

//método post é usado para inclusão
router.post("/",async (req,res)=>{
    //faz a desestruturação dos dados recebidos no corpo da requisição
    const {nome, sobrenome, idade, nascimento, sexo, telefone} = req.body;

    //se algum dos campos não foi passado, irá enviar uma mensagem de erro ao retornar
    if(!nome || !sobrenome || !idade || !nascimento || !sexo || !telefone){
        res.status(400).json({msg:"Enviar nome, sobrenome, idade, data de nascimento, sexo e telefone do autor."});
        return;
    }
    //caso ocorra algum erro na inclusão, o programa irá capturar(catch) o erro
    try{
        //insert, faz a inserção na tabela autores(e retorna o id do registro inserido)
        const novo = await dbKnex("autores").insert({nome, sobrenome, idade, nascimento, sexo, telefone});
        res.status(201).json({id:novo[0]}); //statuscode indica Create
    }catch(error){
        res.status(400).json({msg:error.message}); //retorna status de erro e msg
    }
});


//método put é usado para alteração. id indica o registro a ser alterado
router.put("/:id",async(req,res) => {
    const id = req.params.id; //
    const {telefone} = req.body; //campo a ser alterado
    try{
        //altera o campo telefone, no registro cujo id coincidir com o parametro passado
        await dbKnex("autores").update({telefone}).where({id});
        res.status(200).json(); //statusCode indica ok
    }catch(error){
        res.status(400).json({msg:error.message}); //retorna status de erro e msg
    }
});

//método delete é usado para exclusão
router.delete("/:id",async(req,res) => {
    const {id} = req.params; //id do registro a ser excluído
    try{
        await dbKnex("autores").del().where({id});
        res.status(200).json(); //statusCode indica Ok
    }catch(error){
        res.status(400).json({msg:error.message}); //retorna status de erro e msg
    }
});
module.exports = router;

