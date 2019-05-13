/*

React:

  O React é uma ferramente para produção de uma aplicação dinamica e acessivel. Criado originalmente pelo Facebook
  foi se dessiminando rapidamente pelo mercado.

  Para instalação do React iremos pegar as dependencias através do cdnjs.com:

  Pesquisamos por "React"

  Depois inserimos os links no docuemnto que iremos utilizar por enquanto: // Usando React 15.1.0

  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js"></script>

  Instalação Local React:

  Utilizar o link diretamente na nossa aplicação implica em serios problemas, contudo podemos fazer a instalação
  local para utilizarmos as ferramentas do React.

  Utilizando o "npm" fazemos a instação do "react" e do "react-dom".

  Dai salvamos em uma variavel local:

    const React = require('react');
    const ReactDOM = require('react-dom');

  Dessa forma não precisamos mais dos links, melhorando o desenpenho da nossa aplicação.

  Podemos utilizar as ferramentas da biblioteca:

  <script>
    const h1 = React.createElement( 'h1', null, 'Hello World' );
  </script>

  Basicamente utilizamos um dos metodos do React, createElemente, para criar um novo elemento. Para tal, passamos:

    1 - Colocamos em uma variavel;
    2 - Chamamos o metodo() e passamos 3 parametros:
      2.1 - A tag HTML;
      2.2 - null;
      2.3 - Conteudo da tag;

  Depois de criado o elemento vamos inseri-lo:

    ReactDOM.render( h1, document.querySelector('[data-js="title"]') );

  Basicamente iremos informar qual elemento iremos inserir, colocamos a variavel que criamos, e o local.
  Nesse caso chamamos o elemento que tem a flag data-js="title".

  Quando o React cria um elemento ele não cria um elemento do DOM do browser, ele cria um elemento em um DOM virtual
  onde há toda a manibulação.

  Nesse mesmo processo podemos fazer a criação aninhada de elementos:

  <script>
    const title = React.createElement( 'div', null, [
      React.createElement( 'h1', null, 'Titulo do Texto' ),
      React.createElement( 'p', null, 'Paragrafo do Texto' )
    ]);

    ReactDOM.render( title, document.querySelector('[data-js="app"]') );
  </script>

  Nesse será criado uma div com dois filhos, uma tag "h1" e outra tag "p" cada um com seus valores.

  JSX:

  O JSX foi criado pelo Facebook, que é a junção do JS + XML, onde conseguimos fazer criações de elementos de forma
  parecida com a criação no HTML convencional.

  Para tal precisamos inserir um link babel para que ele faça a reenderização do codigo para que o navegador consiga
  lê-lo.

  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>

  Precisamos inserir na na tag script onde será feito os codigos React com JSX o type="text/babel", depois já podemos
  utiliza-lo normalmente.

  <script>
    const h1 = React.createElement( 'h1', null, 'Hello World' );

    ReactDOM.render( h1, documet.getElementById('app') )

    // A forma acima seria a que conhecemos sem o JSX

    // Agora com JSX:

    ReactDOM.render(
      <h1>Hello World</h1>,
      document.getElementById('app')
     )
  </script>

  Basicamente reenderizamos o elemento diretamente, sem cria-lo para depois inseri-lo.
  Esse metodo ajuda muito na compreenção do codigo, pois quando fazemos a criação dos elementos diretamente com funções
  geraria um emaranhado de funções e elemntos e ficaria bastante dificil mante-lo no futuro.

  Da forma que estamos fazendo com o JSX, reenderizamos o elemento diretamente no ReactDOM. Contudo podemos criar
  elementos para serem utilizados sempre que precisarmos.

  const Title = React.createClass({
    render: () => {
      return (
        <div>
          <h1>Titulo</h1>
          <span>Texto do Titulo</span>
        </div>
      )
    }
  });

  ReactDOM.render(
    <Title />,
    document.getElementById('app');
  );

  Basicamente:

    1 - Criamos um elemento que podemos reutiliza-lo;
    2 - Para cria-lo com o metodo JSX chamamos o metodo React.createClass({});
    3 - Chamamos o metodo render;
    4 - Que executa uma função;
    5 - Função essa que contem como retorno o elemento que desejamos;
    6 - Abrimos um parenteses depois do retorno para a forma de escrita ficar mais legivel;
    7 - IMPORTANTE: O retorno só pode ser feito de uma unica tag;
      7.1 - Então não podemos fazer uma tag ao lado da outra, para tal;
      7.2 - Criamos uma unica tag, como uma <div> que conterá todas as outras;
    8 - Por ultimo podemos inserir o elemento dentro do ReactDOM.render;
    9 - Por fim podemos utilizar o elemento quantas vezes desejarmos;

Webpack:

  De agora em diente para podermos fazer uma construção dos projetos precisamos do Babel e do Webpack.

  1 - Instalamos o Webpack;
  2 - Criamos o arquivo: webpack.config.js

  webpack.config.js = Configuração:

  'use strict';

  const path = require('path');

  module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
    }
  }

  3 - Configuração do webpack.config.js:
    3.1 - Parametros do entry (Onde e qual arquivo será lido):
      3.1.1 - __dirname - Diretorio onde está localizado o arquivo;
      3.1.2 - 'src' - Pasta onde estará o arquivo;
      3.1.3 - 'index' - Nome do arquivo;
    3.2 - Propriedades do output (Local e arquivo destino):
      3.2.1 - __dirname - Diretorio onde está localizado o arquivo;
      3.2.2 - 'dist' - Local onde será salvo o arquivo;
      3.2.3 - filename: 'bundle.js' - Nome que o arquivo será salvo;
  4 - Criamos a pasta e o arquivo src/index.js;
  5 - Instala o webpack Global;
  6 - Executamos o webpack no terminal;

  Depois dessa execução o arquivo arquvivo "bundle.js" estará pronto.

  Outra funcionalidade que utilizaremos é o "webpack-dev-server". Ferramente utilizada para monitorar os arquivos.

  1 - Instalamos o webpack-dev-server;
  2 - Editamos o arquivo webpack.config.js, acrescentamos no output:

  publicPath: "/static/"

  3 - Alteramos o nosso index.html, para utilziar o "./static/bundle.js";
  4 - Desse modo sempre que fizermos alteração em um arquivo o servidor fará a transposição automatica.
  5 - Basta atualizar o browser;
  6 - No final do processo, damos um unico "webpack" e geramos o arquivo final;
  7 - Ou colocamos o arquivo em

  Modularização:

  Para trabalharmos com funções de outras aplicações precisamos exporta-las e importa-las. Para tal fazemos:

  function sum(x, y) {
    return x + y;
  }

  module.exports = sum;

  No arquvio que queremos exportar informamos com o "modules.exports";

  No arquivo que iremos utilizar:

  const sum = require('./app');

  criamos uma variavel que irá receber o metodo, usando o "requie()" passando o local do arquivo;

  Para utilização do ES6 precisamos fazer algumas alterações nas configurações:

  Intalar as dependencias do babel:
    babel-core@6
    babel-loader@6
    babel-preset-es2015@6
    babel-preset-stage-0@6

  Com as dependencias instaladas fazemos uma alteração no webpack.config.js, inserimos:

  module: {
    loaders: [{
      test: /\.js$/, // Tipos dos arquivos que serão reenderizados;
      exclude: /node_modules/, // Arvios ou pastas que serão excluidas da busca;
      inclue: /src/, // Pasta principal;
      loader: 'babel', // Conversor do ES5 para ES6
    }]
  }

  Depois fazemos a configuração do .babelrc e inserimos:

  {
    "presets": ["es2015", "stage-0"],
  }

*/
