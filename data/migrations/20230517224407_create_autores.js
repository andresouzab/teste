/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('autores', (table)=> {
        table.increments();
        table.string("nome",80).notNullable();
        table.string("sobrenome",60).notNullable();
        table.integer("idade",3).notNullable();
        table.string("nascimento",15).notNullable();
        table.string("sexo",1).notNullable();
        table.string("telefone",15).notNullable();
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("autores");
};
