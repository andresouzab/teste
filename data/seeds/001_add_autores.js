exports.seed = function (knex){
  return knex("autores").del()
  .then(function() {
      return knex("autores").insert([
          {
              nome:"Rich", sobrenome: "Stuart", idade: 36, nascimento: "15/02/1984", sexo:"M", telefone: "(48)99166-1255"
          },
      
        ]);
      });
    };  
