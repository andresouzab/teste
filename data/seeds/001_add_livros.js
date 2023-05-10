exports.seed = function (knex){
  return knex("livros").del()
  .then(function() {
      return knex("livros").insert([
          {
              titulo:"Web Design Responsivo", autor: "Mauricio       Silva", ano: 2014, preco: 73.0, foto: "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/4e37aef84e7eb21870481f92721651377842bc42.jpg"
          },
          {
            titulo:"Lógica de Programação e Algoritmos com JavaScript: uma Introdução à Programação de Computadores com Exemplos e Exercícios Para Iniciantes", autor: "Edécio Fernando Iepsen", ano: 2022,
            preco: 72.30, foto: "https://m.media-amazon.com/images/I/41+6FmZ+qRL._SX363_BO1,204,203,200_.jpg"
        }

        ]);
      });
    };  

