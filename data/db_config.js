//Importa a biblioteca knex:
const knex = require('knex');
//Importa o arquivo de configuração do knex:
const config = require("../knexfile.js");
//Cria a configuração de desenvolvimento:
const dbKnex = knex(config.development);
//Exportar a configuração através da constante dbKnex
module.exports = dbKnex;
