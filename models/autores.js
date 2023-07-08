const db = require("../sequelize");
const Sequelize = require("sequelize");
const autores = db.define("autores", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    nascimento: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});
autores.sync();

module.exports = autores;