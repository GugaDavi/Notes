/*
Anotações pertinentes ao curso de Node.js

  No primeiro momento instalamos o node e utilizamos o gerenciador que vem dentro dele para instalar as outras
  dependecias que iremos precisar.

    Comandos:

      npm init -y
      npm install express

    O primeiro inicializa o Node naquela aplicação.
    O segundo é como um mini framework que irá nos ajudar a lidar com rotas e views.
      Rotas: URLs que o usuario poderá acessar;
      Views: Formas de vizualição;

  Dai criamos o nosso servidor criando um arquivo .js

    const express = require('express'); // Importamos o Express para nossa aplicação;

    const app = express(); // Passamos suas funcionalidades para uma variavel local;

    app.listen(3001); // Dizemos qual porta devemos "ouvir";

  Rotas:

    Para criação de rotas e controle do que está sendo solicitado, por quem e tudo mais fazemos:

      app.get('/', (req, res) => {
        res.send('Hello Carinha');
      })

      Basicamente:

        1 - Nesse metodo get utilizamos dois parametros;
          1.1 - O primeiro: A URL que será requisitada. Utilizamos '/' para requisição do index;
          1.2 - Uma função que recebe dois parametros:
            1.2.1 - O primeiro: "req", responsavel pelas informações da requisição;
            1.2.1 - O segundo: "res", responsavel pelas respostas;
          1.3 - Dentro do "res" temos um metodo "send" que irá imprimir na tela o que for escrito;

  Nodemon:

    Uma ferramenta util para desenvolvimento. Quando instalada não precisamos pausar e reiniciar o servidor para
    validar aquilo que estamos codando.

      npm install -D nodemon

      Esse "-D" serve para separarmos as dependencias que serão utilizadas em exclusivamente na aérea de desenvolvimento

    Com isso podemos editar nosso packege.json:

      "scripts": {
        "dev": "nodemon server.js"
      }

      Basicamente poderemos iniciar nosso servidor atráves do npm usando a tag "dev".

    Usando o comando:

      npm run dev

      Executamos o servidor e qualquer alteração que fizermos irá ser processada automaticamente.
      Precisando somente atualizar o browser que as alteração serão renderizadas.


*/
