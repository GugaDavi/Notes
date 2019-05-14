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

Configurando Babel:

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
      include: /src/, // Pasta principal;
      loader: 'babel', // Conversor do ES5 para ES6
    }]
  }

  Depois fazemos a configuração do .babelrc e inserimos:

  {
    "presets": ["es2015", "stage-0"],
  }

  Depois dessas inclusões precisamos acrescentar mais uma dependencia ao bandle para rodar o React com JSX:

    babel-preset-react@6

  Depois atualizamos nosso .babelrc:

  {
    "presets": ["es2015", "stage-0", "reacts"],
  }

  Agora sim, podemos produzir com React e JSX.

Sourcemaps:

  É uma funcionalidade que junto com a renderização do arquivo bandle.js seja acrescentado os arquivos originais, pois
  com o arquivo que é gerado há muitas informações desestruturadas e desorganizada dai com ele inserido poderemos debugar
  diretamente nos arquivos original.

  No webpack.config.js você insere em "module.exports"

    devtool: 'source-map',

Configurando React Hot Loader:

  Inserimos a extensão react-hot-loader@3.0.0-beta.2

  Em seguida configuramos o webpack.config.js, acrescentamos:

    const webpack = require('webpack');

  Alteramos o entry:

    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000', // Porta que desejarmos
      'webpack/hot/only-dev-server',
      path.join(__dirname, 'src', 'index'),
    ],

  Crimaos um novo campo:

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],

  Depois vamos no .babelrc e inserimos:

    "plugins": ["react-hot-loader/babel"]

  Agora iremos criar nosso servidor um arquivo javaScript:

    'use strict';

    const webpack = require('webpack');
    const WebpackDevServer = require('webpack-dev-server');
    const config = require('./webpack.config');

    new WebpackDevServer( webpack(config), {
      publicPath: config.output.publicPath,
      hot: true,
      historyApiFallback: true,
      stats: { colors: true },
    }).listen( 3000, (err) => { // Esse 3000 é a porta que escolhemos
      if (err)
        console.log(err);
      else
        console.log('Listening on http://localhost:3000');
    } )

Configuração do React para o Hot Loader:

  Na matriz do nosso projeto importamos um metodo do react-hot-loader:

    import { AppContainer } from 'react-hot-loader';

  Esse será o container do nosso projeto, onde com ele podemos utilizar todo o potencial do react-hot-loader
  Dai todos nossos componentes serão feitos dentro dele:

  ReactDOM.render(
    <AppContainer>
      <Title />
    </AddConteiner>,
    document.querySelector('[data-js="app"]')
  )

  Depois criamos uma validação para saber se o hot-loader está ativo:

    if ( module.hot ) {
      module.hot.accept( './app', () => {
        const NextApp = require('./app').default

        ReactDOM.render(
          <AppContainer>
            <NextApp />
          </AppContainer>,
          document.querySelector('[data-js="app"]')
        )
      })
    }

  Fazendo uma refaturar o codigo:

    const RenderApp = (NextApp) => {
      ReactDOM.render(
        <AppContainer>
          <NextApp />
        </AddContainer>,
        document.querySelector('[data-js="app"]')
      )
    }

    RenderApp(Title);

    if ( module.hot ) {
      module.hot.accept( './app', () => {
        const NextApp = require('./app').default;

        RenderApp(NextApp);
      })
    }
*/
