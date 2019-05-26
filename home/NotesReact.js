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

  Para tal precisamos inserir o babel para que ele faça a reenderização do codigo para que o navegador consiga
  lê-lo.

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
    render: function () {
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

JS no JSX:

  Quando precisamos utilizar JS onde está sendo utilizado JSX precisamos inserir {}.
  Dai o que for escrito dentro delas é JS.

Atibutos das tags:

  Com o JSX, podemos inserir tags nos elementos tranquilamente:

  ReactDOM.render(
    <h1 name="top">Titulo</h1>,
    document.querySelector('[data-js="topo"]');
  )

  Há alguns atributos que são diferentes dos do HTML:

    class === className;
    for === htmlFor (Dá tag lable);

Props:

  Conseguimos pegar os atributos através do {this.props.name}, mas caso essa classe não exista o campo ficará vazio.
  Para isso podemos chamar a propriedade:

    getDefaultProps: function () {
      return {
        name: 'Fulano';
      }
    },

    Nesse caso especifico, se a propriedade "name" não for encontrada, será substituido pela armazenada no metodo.

Funcções Puras e Impuras:

  Uma função torna-se pura e impura dependendo da forma como ela se comporta.
  Uma função que soma dois números, por exemplo, bascimante ela só precisa de dois parametros que irá funcionar.
  Essa é uma função pura, pois podemos chama-la diversas vezes com os mesmos parametros que ela irá retornar o mesmo
  valor, em suma, irá se comportar do mesmo jeito.

  Função impura é aquela que faz edições fora do escopo da função ou tem retornos diferentes para os mesmos parametros.
  Um exemplo é uma função que quando invocada faz algum tipo de alteração em um obejto externo.
  Outro, é uma função que passando os mesmos parametros repetidas vezes o resultado é diferente.
  Imagine uma função que escolhe um número aleatorio entre 1 e 3. Cada vez que você chama função o valor será diferente.

  Basicamente esse conceito é utilizado no React para não fazermos funções que editem outros objetos e ocorra o risco
  de quebrar nossa aplicação.

  Basicamente podemos fazer a renderização de uma tag somente com funções:

    const Title = () => {
      return <h1>Gustavo</h1>
    }

  No momento que essa função for importada o valor que será impresso conforme return da função.
  Com essa função podemos utilizar as props:

    cosnt Title = ({name, lastName}) => {
      return <h1>E ai {`${name} ${lastName}`}</h1>
    }

    Title.defaultProps = {
      name: 'Ze',
      lastName: 'Droguinha'
    }

    Nesse caso:

    1 - Utilizamos o Short Syntax, para pegar somente as keys das propriedades;
    2 - Abrimos {} para inserir comandos JS;
    3 - Utilizando o Template Literals chamamos os valores de name e lastName;
    4 - E por fim inserimos no objeto defaultProps os valores a serem utilizados na falta de alguma das propriedades;

Utilizando Class no React:

  Para utilização das classes do ES6, acrescentamos a classe criada em React.Component:

    class App extends React.Component {
      render () {
        return (
          <div>
            <Title />
          </div>
        )
      }
    }

    export default App

    Nesse caso:

      1 - Utilizarmos a notação do ES6 criamos a classe;
      2 - Extendemos a React.Component
      3 - E fazemos uma forma parecida como a do React.createClassName;
      4 - Com o render, mas não no formato de propriedade do objeto render: function () {};
      5 - E sim como metodo: render () {};

Prop key:

  Essa propriedade serve para diferenciar elementos repetidos, como uma separação: quem é o primeiro, segundo e etc.

  Exemplo:

    const Square = ({ color }) => (
      <div style={{
        backgroundColor: color,
        height: '100px',
        width: '100px'
      }}>
      </div>
    )

    Square.defaultProps = {
      color: 'red'
    }

    ----

    class App extends React.Component {
      render () {
        <div>
          { ['green', 'black', 'yellow' ].map((square) => (
            <Square color={square}/>
          )) }
        </div>
      }
    }

    Nesse caso:

      1 - Criamos uma <div> que basicamente será um quadrado com um cor de fundo;
      2 - Para inserirmos informações no CSS precisamos abrir:
       2.1 - style={{}};
       2.2 - A primeira {} é dizendo que iremos inserir codigo JS ali dentro;
       2.3 - A segunda {} é um objeto que terá as propriedades;
      3 - Interessante dizer que nessa arrow function não utilizamos o return, pois não abrimos {} e sim ();
      4 - Por fim colocamos as defaultProps;
      5 - E no doc de que iremos renderizar criamos um array de cores;
      6 - Utilizamos o .map para percorrer esse array e a cada retorno...;
      7 - Renderizar um novo elemento uma das cores do array;

  Dessa forma o React irá fazer o que solicitamos, contudo ele ficará "confuso" sobre a "identidade" de cada elemento
  Por isso utilizamos a prop key para haver uma diferença:

    <Square key={square} color={square} />

  Dessa forma cada quadrado terá uma cor de fundo e uma chave com o nome dessa cor, diferenciando cada um.

  Outro ponto importantissimo é a repetição de keys, quando isso ocorre o React não renderiza todos os elementos,
  faz somente a renderização do primeiro pois considera que há uma duplicação do elemento.

  Um exemplo dessa repetição é:

    { ['red', 'blue', 'red'].map((cor) => (
      <Square key={cor} color={cor}/>
    )) }

    Dessa forma não será renderizado corretamente, pois temos dois elementos com a mesma key.

    Uma solução para esse caso é:

      { ['red', 'blue', 'red'].map((cor, index) => (
        <Square key={index} color={cor} />
      )) }

      Nesse caso a key será o index do elemento, logo cado um possui somente uma posição desconsiderando a possibilidade
      de erro.

Eventos:

  Para inserir eventos nos elementos utilizamos a notação parecida com a aplicação inline, mas não é literalmente.

    <div onClick={(e) => {alert('Clicou')}}></div>

Prop children:

  Essa propriedade é utilizada para quando queremos manipular a informação que está dentro de uma tag.
  Exemplo:

    const Button = () => (
      <button>Botão<button>
    )

    export default Button

    ---

    class App extends React.Component {
      render () {
        <div>
          <Button />
        </div>
      }
    }

    Nesse caso o React fará a renderação somente de um botação estatico. Nessa mesma forma podemos fazer:

      const Button = ({ children }) => (
        <button>{ children }</button>
      )

      ---

      import Button from './button'

      class App extends React.Componet {
        render () {
          <div>
            <Button>Texto Qualquer</Button>
          </div>
        }
      }

    Já nesse caso deixamos algo dinamico, onde criamos um botão com caracteristicas "x" e podemos reutiliza-la
    mudando somente o conteudo que estará dentro da tag;

State:

  Essa propriedade consiste basciamente no estado de uma aplicação. Onde em algum momento especifico podem ser pegas,
  alteradas ou inseridas.
  Exemplo:

    class App extends Reacte.Component {
      constructor() {
        super()

        this.state = {
          name: 'Gustavo'
        }
      }

      render() {
        return (
          <div>
            <h1>{ this.state.name }</h1>
            <Button onClick={() => { this.setState({ name: 'Matheus' }) }}>
          </div>
        )
      }
    }

    Basicamente criamos o estado dentro da propriedade this.state. É necessario inicialização do constructor, pois
    é a primeira função que executamos no inicio de uma classe.
    Nesse exemplo especifico: criamos um botação que tem a função de alterar um nome especifico.

Stateful x Stateless

  Basicamente é a diferença entre elementos que recebem estados e que são atribuidos estados.
  A componitização do React gira em torno de um elemento que terá um caracteristica, independente do estado que terá
  dentro dele.

  Elementos stateful são aqueles que recebem os estados e os elementos stateless são aqueles elementos que renderizão
  os estados.


*/
