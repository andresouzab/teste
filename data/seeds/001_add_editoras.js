exports.seed = function (knex){
  return knex("editoras").del()
  .then(function() {
      return knex("editoras").insert([
          {
              nome:"Papel Mágico", cidade: "Criciúma", estado: "Santa Catarina", telefone: "(48)3466-1020", rua:"Almirante Tamandaré", cep: "888-00-190"
          },
      
        ]);
      });
    };  