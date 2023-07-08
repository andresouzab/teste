const db = require("../sequelize");
const Sequelize = require("sequelize");
//const {nome, cidade, estado, telefone, rua, cep}
const editoras = db.define("editoras", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    rua: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});
editoras.sync();

module.exports = editoras;