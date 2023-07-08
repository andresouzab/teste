const db = require("../sequelize");
const Sequelize = require("sequelize");

const livros = db.define("livros", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    autor: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ano: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    preco: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    },
    foto: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});
livros.sync();

module.exports = livros;