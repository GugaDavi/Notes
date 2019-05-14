/*

React:

  Com as Configurações "Okay" podemos utilizar as ferramentas da biblioteca:

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

*/
