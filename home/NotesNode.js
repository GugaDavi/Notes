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

  Banco de Dados:

    Agora fazemos a instalação do banco de dados em:

      https://docs.docker.com/install/

    Depois dessa instalação, fazemos a inserção do mongoDB.

      sudo docker pull mongo

    Depois da instação:

      sudo docker run --name mongodb -p 27017:27017 -d mongo

      Basicamente:

        1 - Iremos inserir o nome do nosso servidor;
        2 - A porta que iremos direcionar;
        3 - Qual a imagem que iremos utilizar;

    Agora baixamos o gerenciador do banco.

      https://robomongo.org/download

    Depois disso criamos conectamos o banco criado com o gerenciador.

    Algo importante de dizer: Quando o reiniarmos o pc o nosso servidor ficará off.

    Dai executamos: sudo docker start mongodb

    Agora fazemos a instalação do mongoose: npm intall mongoose

    Depois da instalação atualizamos nosso server.js:

      const mongoose = require('mongoose');

      mongoose.connect("mongodb://localhost:27017/nodeapi", { useNewUrlParser: true })

      Basicamente:

        1 - Chamamos o mongoose para nossa aplicação;
        2 - Executamos o metodo .connect com os requisitos:
          2.1 - "mongodb://
          2.2 -  url do banco de dados
          2.3 - /nome da api
        3 - No segundo parametro inserimos: { useNewUrlParser: true }

      Para saber se funcionou corretamente basta executar nosso servidor novamente, não acontecendo erro, funfou.

  Administrando informações do banco de dados:

    Deoius de todas essas instalações fazemos:

      Criamos as "colunas" do nosso banco de dados;

      Criamos um diretorio src/models

      Nesse diretorio iremos criar nossas colunas.

      Basicamente a criação deles será:

        const mongoose = require('mongoose')

        const ProductSchema = new mongoose.Schema({
          title: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true
          },
          createdAt: {
            type: Date,
            default: Date.now
          }
        })

        mongoose.model('Product', ProductSchema)

      Bascimente deteminando as linhas de uma coluna, e suas caracteristicas.


      Depois anexado os arquivos no nosso arquivo do servidor.

      Instalamos uma lib para não precisarmos dar "require" em cada item do diretorio models

        npm install require-dir

      Agora no nosso arquivo server.js inserimos:

        const requireDir = require('require-dir')

        requireDir('./src/madels')

        Com essas informações, todas as colunas que forem cadastradas em na pasta models

      Agora para cadastrar objetos dentro da nossa coluna:

        const Product = mongoose.model("Product")

      Fazemos dentro do app.get:

        Product.create({
          title: 'blabla',
          discription: 'blabla * 2',
          url: 'www.google.com.br'
        })

      Basicamente quando acessarmos a rota será feito o INSERT

*/
