/*

Anotaçãoes:

O JS é uma linguagem que nasceu na web, não na internet.

Internet != Web
    Internet == Conexão
    Web == Pagina Web

Variaveis: // TODO Variaveis
    O JS trabalha com variaveis, onde são declaradas com:

    var
    let
    const

    Algo interessante a se dizer é que caso seja criado uma variavel sem "var", "let" ou "const" ela será alocado no escopo
    local.

    As variaveis são case sensitive que significa que: var nome != Nome != NOME

    As variaveis podem ser separadas por tipos:

        String = 'texto'
        number = numeros inteiros (positivos ou negativos)
        float = numeros decimais
        boolean = quando recebe os valores True ou False
        null = variavel sem valor
        undefined = variavel vazia

        *null != undefined = Uma foi declarada - null(sem valor), outra não foi declarada
        - undefined(valor não declarado)

Operadores aritimetricos: // TODO Operadores aritimetricos

    Classicos:

        + - Adição
        - - Subtração
        * - Multiplicação
        / - Divisão
        % - Resto da divisão

    Operadores de incremento ou decremento:

        ++ - Adicionado ao elemento um valor
            Exemplo: var x = 1
            x++ === x += 1 === x = x + 1
            Observe que as três expressões fazem a mesma coisa, acrescentar 1 a variavel x

        -- - Subtraido do elemnto um valor
            Exemplo: var x = 5
            x-- === x -= 1 === x = x - 1
            Mesma coisa do exemplo acima, as três formas será subtraido 1 da variavel x

        * Um ponto interessante a ser observado nesses operadores é que eles podem ser colocados antes ou
        depois da variavel e faz total diferença:

            Exemplo: var x = 5

            console.log(x++) - Nesse console o resultado será retornado 5, pois como a ordem que eu escrivi
            foi variavel depois incremento, ele irá mostrar no console o valor 5, mas caso dê outro console
            depois desse, o valor retornado será 6.

            Caso seja console.log(++x) -  o JS irá incrementar uma unidade antes de mostra-la no console dando
            o resultado de 6.

    Operadores relacionais:

        > - Maior que
        < - Menor que
        >= - Maior igual a
        <= - Menor igual a

    Sinais de comparação

        == - Igual a
        != - Diferente de
        === - Identico a
        !== - Diferente, mas do mesmo tipo

Operadores condicionais // TODO Operadores condicionais

    Os operadores condicionais são aqueles que criam um vinculo entre verificação de variaveis.

    && - "e" Usando verificar se duas condições são verdadeiras;
    || - "ou" Usado para verificar se pelo menos uma das condições é verdadeira.

Arrays(): // TODO Arrays()

    - São listas, onde cada item da lista tem uma posição, inciando da posição 0.

    Para consulta em um array() utilizamos a forma: array[posição do que quero acessar]
        Exemplo: var lista = ['maça', 'banana', 'pera']
        Se eu der um console.log(lista[0]) - Irá gerar no console o item maça

    Os Arrays() são objetos desfarçados, onde mesmo sendo uma lista, possui propriedades onde podemos acessar,
    consultar e alterar.

    Propriedades do Array():

        array().lenght = Mostra o tamanho da lista, quantidade de elementos
        array().push(elemento) = Acrescenta o elemento ao array na ultima posição.
        array().unshift(elemento) = Acrescenta o elemento ao array na primeira posição [0].
        array().pop() = Exclui o ultimo elemento do array.
        array().shift() = Exclui o primeiro elmento do array.
        array().join() = Junta os itens de um array em uma string, mas não modifica o array
            O join() vem por padrão separando os itens do array por virgula, caso queira outro
            basta passar como parametro: araray().join('>'): Para separar os elementos com ">"
        array().reverse() = Inverte a sequencia dos elementos do array, modifica o array.
        array().sort() = Organiza em ordem alfabetica o array
        array().toString() = Retorna os elementos do array() no formato de string, não tem opção de escolher o separador
        array().concat(elemento) = Adiciona um "elemento" temporariamente ao array, mas não altera o array original
        array().slice(x, y) = Retorna o array() selecionado a partir do "x", até o antecessor de "y". Ele não mostra o "y" e também não altera o array().
            O slice você pode retornar de tras para frente, usa-se números negativos.
        array.splice(x, y, elemento(s)) = Retorna um novo array() retirando os números "y" a partir de "x".
            Com esse mesmo metodo, podemos retirar, colocar, e retirar/colocar itens no array().
            Exemplo: Retirar: array.splice(1, 2) = Retira o segundo elemento e o terceiro.
                     Adicionar: array.splice(1, 0, 2) = Adiciona ao segunda posição o "2".
                     Adicionar e Retirar: array.splice(1, 2, 4, 5) = Retira dois elementos a partir da segunda posição
                     e insire o "4" e "5" a partir do segundo elemento.
        Array.isArray(x) = Diz se "x" é um array ou não, com True ou False.

    forEach():

        O forEach() é uma ferramente para percorrermos um array(). Ele recebe uma função onde temos parametros.
        Exemplo:

            var arr = [1, 2, 3, 4, 5, 6, 7];

            arr.forEach(function(item, index, arry()) {
                console.log(item, index, array())
            });

            item = Elemento do array();
            index = Posição desse elemento;
            array = Retorna todo o array;

    every():

        O every() é uma função que testa todos os itens de um array(), para verificar uma condição passada.
        Retornando True ou False.
        Exemplo:

            var arr = [1, 2, 3, 4, 5, 6, 7];

            var every = arr.every(function(item) {
                return item < 5;
            });
            console.log(every);

            Irá retornar False, justamente porque o elemento 4 não é menor que 5.
            Para every retornar True, todos os elementos tem que satisfazer a condição passada na função.

    some():

        some() é uma função que irá retornar True ou False, se pelo menos um dos elementos satifaz aquela
        condição que foi passada como parametro.
        Exemplo:

            var arr = [1, 2, 3, 4, 5, 6, 7];

            var some = arr.some(function() {
                return item % 3 === 0;
            });

            console.log(some);

            Neste caso irá retornar True, justamente porque, na verificação, o elemento 2 satifaz a condição passada.
            Para retornar False, nenhum elemento pode satisfazer a condição.

    map():

        O map() basicamente faz algo parecido com o forEach, mas criando um novo array().
        Exemplo:

            var arr = [1, 2, 3, 4, 5, 6, 7];

            var map = arr.map(function(item){
                return item + 2;
            });

            console.log(map);

            Nesse caso a cada item do array() será somado "2" e inserido no novo array().

    filter():

        O filter() é, como o nome diz, para filtrar os elementos baseados na condicional passada na função.
        Exemplo:

            var arr = [1, 2, 3, 4, 5, 6, 7];

            var filter = arr.filter(function(x) {
                return x > 2;
            });

            console.log(filter);

            Nesse caso acima ele irá retornar os valores 3, 4, 5, 6 e 7, pois são eles que satisfaz a condição

    reduce() e reduceRight():

        O reduce() passa por todos os itens do array(), aplicando a ele a logica proposta na função.
        Exemplo:

            var arr = [1, 2, 3, 4, 5, 6, 7];

            var reduce = arr.reduce(function (acumulado, atual, index, array) {
                logica;
            }, acumulado);

            Utilizando a formula:

            var reduce = arr.reduce(funciton (acumulado, atual) {
                return acumulado + atual;
            }, 0);

            Utilizando a formula acima, o resultado será de "21" pois ele fará a seguinte sequencia:

            acumulado + atual:
            0 + 1 = 1;
            1 + 2 = 3;
            3 + 3 = 6;
            6 + 4 = 10;
            10 + 5 = 15;
            15 + 6 = 21;

        O reduceRigth(), faz a mesma coisa que o reduce, só que da direita para a esquerda.

    indexOf() e lastIndexOf():

        O indexOf() é uma propriedade do array() que é utilizada para saber se um elemento existe ou não no array() referencia.
        Exemplo:

            var arr = [1, 2, 3, 4, 5, 6, 7];

            console.log(arr.indexOf(2));

            Dessa forma, ele irá retornar "1", que é a posição que o "2" está localizando

            Fazendo um segundo teste:

            console.log(arr.indexOf(8));

            O retorno dessa vez será "-1", que significa que o valor passado por parametro não existe no array() em questão.

            Outra funcionalidade que o indexOf() possui é a possibilidade de determinar de onde a pesquisa deve começar.

            console.log(arr.indexOf(2, 2));

            Neste caso em especifico o resultado será "-1", pois a procura fui iniciada no "3", e como a direita dele não existe
            o valor passado por paramentro, logo ele retorna "inexistente".

        O lastIndexOf() funciona da mesma forma que o anterior, só que fazendo a busca da direita para a esquerda.

Objeto{}: //TODO Objeto{}

    - São metodos que dentro dele existe atributos.

    Para acessar um objeto utilizamos o ".":
        objeto{nome, peso, altura} ... objeto.nome - irá responder com o valor de nome.

    Os objetos recebem propriedades e essas fazem referencia ao objeto a qual pertence.
        Exemplo:
        pessoa {
            nome: 'Gustavo',
            idade: 25,
            peso: 116,
            altura: 1.73
        }

        Nesse caso, nome, idade, peso e altura são propriedades de pessoa.
        A manibulação de das propriedades do objeto é feito com o "." então caso fizermos: pessoa = {olhos: 'castanhos'} todos as propriedades
        serão substituidas.
        Então para fazer essa manipulação usamos a seguinte notação: pessoa.olhos = 'castanhos'

        Outras formas de se criar um objeto é com o construtor:

            var obj = new Object();

            Onde no caso acima o "new" irá fornecer a nossa variavel "obj" as propriedades de "Object"

        Outra situação é você criar o objeto com a função "Object":

            var obj = Object.creat();

            Desta forma a variavel "obj" recebera o as caracteristicas de um objeto.

        Outra coisa que é interessante mencionar é o "prototype" que basicamente é as heranças que um objeto
        recebe no momento da sua criação. Basicamente o objeto quando é criado e outros objetos são criados
        a partir dele.

            Exemplo:

            obj = {x: 1, y: 2}

            Se criarmos outro objeto para receber as mesmas propriedades que "obj", fazemos:

            obj2 = Object.create(obj);

            E se caso dermos um console.log(obj2) ele irá retomar um objeto vazio "{}", porque "obj2" não possui
            propriedades proprias, contudo ele herdou as propriedades de "obj".
            Tanto que caso seja feito:

            console.log(obj2.x) - Irá retornar o valor "1", da propriedade do objeto pai "obj".

            Então basicamente é o seguinte. As propriedades dos pais são passadas para os filhos, então alterações
            também são transmitidas para os filhos.

        Propriedades do Objeto:

            Object.keys(x) - Quando utilizamos a propriedade "keys" do Objeto "x", ele diz em forma de array[]
            as propriedades que aquele objeto possui.
            Tanto que caso fizermos:

                Object.keys(obj).length - Retorna "2", pois o objeto "obj" possui 2 propriedades

            x.isPrototypeOf(y) - Quando queremos saber se aquele objeto "y" foi herdado do objeto "x".
            Testando:

                obj.isPrototypeOf(obj2) - Retorna "True", afinal o objeto "obj2" é 'filho' do "obj".

                Caso fizermos ao contrario:

                obj.isPrototypeOf(obj) - Retorna "False", afinal o objeto "obj" não é filho de "obj2".

            JSON.stringify(x) - Retorna o objeto "x" como string

                JSON.stringify(obj) - Retorna '{"x":1,"y":2}'

            JSON.parse(x) - Transforma aquela string em um objeto.

                var str = JSON.stringify(obj); - O retorno do JSON será atribuido a variavel "str".
                JSON.parse(str); - Transforma a string em "str" em um objeto.


    As vezes podemos ter alguns objetos possuiram nomes das propriedades invalidas ou quando não sabemos o nome
    da propriedade. Nessas situações utilizamos a notação de Array para consultar as propriedades do objeto.
        Exemplo:
        var livros = {
            'Senhor dos Aneis': {
                nome: 'Senhor dos Aneis',
                paginas: 300,
                autor: 'J. R. R. Tolkien',
                editora: 'Allen & Unwin'
            },
            'Harry Potter': {
                nome: 'Harry Potter',
                paginas: 211,
                autor: 'J. K. Rowling',
                editora: 'Pottermore Publishing'
            },
            'O Ladrão de Raios': {
                nome: 'O Ladrão de Raios',
                paginas: 400,
                autor: 'Rick Riordan',
                editora: 'Intrínseca'
            }
        }

        Para consultar qualquer uma das propriedades de livros{}, usaremos a notação:

        livros[nome do livro]

    Objetos são mutaveis e multaveis por referencia:

      Quando um objeto pode ter suas propriedades alteradas, diferente de uma variavel, por exemplo. Contudo,
      ela é multaveis também por referencia:
        Exemplo:

        obj = {
            prop1: 'prop1',
            prop2: 'prop2'
        }

        Caso crie uma variavel que recebe as informações de "obj", elas ficam ligadas.

        var obj2 = obj;

        Nesse caso eu não crio um novo objeto, e sim uma referencia. Pois caso eu altere o "obj2" o "obj",
        também será alterado.

Funções() {} // TODO Funções () {}

    - É um bloco que codigo que tem um nome, que para esses codigos serem executados tem que ser chamados
    E podem ou não retornar valores.

    Exemplo:

        var x = 1

        funcion soma() {
            x++
        }

        Se eu der um console.log(x), irá me retornar o valor 1, mas se eu chamar a função:

        soma()

        O bloco de codigo será executado, fazendo a operação que está guardada nele.

        Em alguns casos é necessario que o valor seja retornado.

        function nome() {
            var nome = 'Gustavo'
        }

        Se eu der console.log(nome()), não terá retorno de nenhum valor, mas se utilizarmos o return

        function nome() {
            var nome = 'Gustavo'
            return nome
        }

        O console irá retornar o valor de nome.

    Propriedades da função:

        .name = Retorna o nome dado a função;
        .length = Retorna a quantidade de parametros que aquela função pode ter como retonro;
        .toString = Retorna todo corpo da função em formato de string;
        .call( this, parametros da função ) = Retorna a função que ela está referenciando quando vazia, ou retorna a função usando com parametro um objeto;
        .apply( this, [parametros em array] ) = Retorna a função com o referencial do this e utlizando elementos de um array para passar como parametros para a função;
        .prototype = Uma propriedade que será usada para estender as propriedades de uma função ou construtor já criado;

    Uma das coisas mais importantes na manutenção dos codigos é a nomeção correta na declaração de variavies ou funções

        Exemplo:

            var func = function () {
                return 'hi';
            }

            func(); // Irá retornar 'hi'
            Contudo caso seja acessado a função .name da função atrelada a variavel:
            func.nome // Irá retornar '' (vazio), justamente porque a função que está ligado a variavel não foi nemeado.

    Quando não nomeamos uma função geramos uma função anonima, onde declaramos em uma variavel e por fim executamos.
    Contudo há casos onde não iremos nomear a função ou declara-la em uma função, e neste momento transformamos a função
    de literal para uma expressão.


        Função literal:
        function sum() {
            return 1 + 2;
        }

        Função anonima declarada em variavel:
        var sum = function () {
            return 1 + 2;
        }

        Função anonima:
        function () {
            return 1 + 2;
        }

        Neste ultimo caso, não há uma forma de chamarmos a função escrita, dai precisamos transforma-la em uma expressão(IIFE):

        (funciton () {
            return 1 + 2;
        })();

        A mesma função declarada dessa forma será executada quando o JS passar por ela, contudo só será executada aquela unica vez.

    Arguments: É uma propriedade de function, onde extraimos o que foi passado de parametro no momento que chamamos a função,
    mesmo que a função não possua argumentos a serem passadas.
    Exemplo:

        function myFunction() {
            return arguments;
        }

        console.log(myFunction(1));

        Nesse caso especifico, o retorno será "1", pois mesmo sem a função solicitar argumentos essa propriedade armazena os
        valores dos argumentos passados, independente deles serem usados ou não.


Funções e Objetos: // TODO Funções e Objetos

    Basicamente a parte mais utilizada no JS, a junção desses dois não tem limites.
    A junção de metodos e propriedades do objeto e as logicas aplicadas nas funções tem possibilidades diversas.

        Exemplo: function myfunction() {
            myobject {
                nome: 'Gustavo',
                idade: 25,
                sobrenome: 'Guedes',
                fazAniversario() {
                    myobject.idade++;
                },
            }
        }

        Outro Exemplo utlizando a junção de function com array:

            var arr = [1, 2, 3];

            function myFunction(arg) {
                return arg[2];
            }

            myFunction(arr);

            Nesse caso acima você observa que o argumento passado foi o nosso array e o retorno da função
            foi o elemento 2 do array, que nesse caso é o "3".

    As funções são também objetos premitivos, onde elas podem ser atribuidas a uma variavel.
        Exemplo:
        var myvar = function () {
            return 'Retorno do valor';
        }

        Se simplesmente demos um console.log(myvar);, o console irá retornar [Function]. Dizendo que a variavel possui uma função.
        Caso a chamada da variavel tenha sido console.log(myvar());, o console irá returnar chamando a função que está dentro da variavel.
        Quando a função é atribuida dentro de uma variavel, ela torna-se um METODO.

    As funções são objetos de primeira classe, logo podem utilizar de praticamente os mesmos recursos dos objetos.

    Exemplo:

        function objeto() {
            return var carro = {
                cor: 'branco',
                modelo: 'celta',
                marca: 'GM'
            }
        }

    Conseguimos acessar as propriedades dessa função usando os metodos de um objeto:

        console.log(objeto().cor) // Retornando a cor do objeto que está dentro da função.

    Outro exemplo dessa funcionalidade é uma função rotornando outra função.

    Exemplo:

        function adder(x) {
            return function (y){
                return x + y;
            }
        }

    Conseguimos o mesmo resultado de duas maneiras:

        var add = adder(5);
        add(8);

        Da forma descrita acima, a variavel "add" irá executar a função adder(), guardando o primeiro parametro passado "5"
        Mas como o retorno da função é outra função, o add transformace em outra função, que sendo execultada receberá
        o segundo parametro e retornando por fim o valor da soma dos dois.

        Outra forma que podemos obter o mesmo resultado é executando a função já com os dois parametros:

        adder(5)(8);

        Dessa forma o resultado é exatamente o mesmo que o da opção acima.

Truthy e Falsy: // TODO Truthy e Falsy

    O JS tem por sua natureza valores que são Truthy e Falsy, em suma, originalmente verdadeiros ou falsos.

    Os valores que são originalmente falsos:

        undefined;
        null;
        NaN;
        0;
        -0;
        '' ou "" - Str Vazia;
        false;

    Caso não seja um desses acima, é considerado Truthy

    Uma forma de testar isso é justamente com o "!!" onde ele basicamente converte o valor para booleano duas vezes
    mostrando se ele é Truthy ou Falsy.

Operadores condicionais: // TODO Operadores condicionais

    O mais mais utilizado é o "if" e o "else" onde é basicamente se traduz:

    se (Isso) {
        faça isso
    } se não {
        faça isso
    }

    Outro que podemos anexar a eles é o else if, utilizado para quando precisamos de mais uma validação

    se (isso) {
        faça isso
    } se não for (isso) {
        faça isso
    } se não for nenhum dos dois {
        faça isso
    }

    Outro operador condicional que podemos utilizar é o switch, nele você cria casos que podem ocorrer.

    switch (teste):

        case 1:
            faça isso;
            break;
        case 2:
            faça isso;
            break;
        default:
            faça isso;

    Basica ele está dizendo:

    switch (teste):

        caso (teste === ao caso 1):
            faça isso;
            break; // Pare
        caso (teste === ao caso 2):
            faça isso;
            break; // Pare;
        default: // caso nenhum dos dois anteriores
            faça isso;

    Sem pre temos que utilizar o break no final das ações dos casos, pois se não switch não será parado.
    No caso do default não colocamos pois ele é a ultima ação.

    O (if/else) tem uma forma mais simplicifaca de declaração, sem as chaves "{}":

        if ( isso )
            console.log( "ok" );

        Basicamente:

        1 - O if irá validar o "isso", sendo true ele dará o console.log( ok ).
        2 - Essa notação só funciona para soluções em uma unica linha, para mais usar o metodo normal.

Condicional ternario: // TODO Condicional ternario

    É uma forma simplificada de fazer o "if" da seguinte forma <condicao> ? true : false;

    Dessa forma você faz um teste condicional em uma unica linha:
        Exemplo: 1 === 2 ? 'Verdadeiro' : 'Falso'; Basicamente ele pergunta, nesse caso:
            <Se um é igual ao outro> ? <Se for verdadeiro> : <Se for falso>;
            Enquanto para testar com o if tradicional:
            if (1 === 2) {
                'Verdadeiro';
            } else {
                'Falso';
            }

Loops: // TODO Loops

    As estruturas usadas para fazer ações repetidas, mais conhecidas como loop, são o while e o for, onde:

        while: A grosso modo diz para o JS:

            enquanto (algo for verdadeiro) {
                faça isso;
            }

            A cada teste logico, o while irá verificar se a condição que foi estabelecida para ele é verdadeira.
            Até que ela transforme-se em falsa, ela irá continuar sendo executada.

        do while: É uma forma de fazer o while, mas com uma adendo. Ele basicamente executa o que estiver no do {} e depois valida o while ();

            do {
                faça isso
            } while (enquanto verdadeiro);

        for: Parecido com o while, contudo já possui inicio e fim. Uma das vantagens do for é justamente que
        logo na sua chamada, podemos declarar o contador, o condicional e o incremento ou decremento.

            for (var num = 0; num < 20; num++) {
                console.log(num);
            }

            Neste caso acima o for já é chamado com for (contador; condicional; incremento ou decremento)

        for in: É uma forma de laço para percorrer propriedades de um objeto:

            var car = {
                marca: 'GM',
                modelo: 'Celta',
                ano: 2012
            }

            for ( var propriedades in car) {
                console.log(propriedades); // Nesse primeiro caso imprimimos os nomes das propriedades
                console.log(car[propriedades]); // Nesse segundo seu valores
            }

Saltos: // TODO Saltos

    Os saltos são utilizados para interferir na sequencia de um codigo, quando precisamos que ele retorne algo, pare e reinicie ou sai da instrução.
    É o caso dos saltos: return, break e continue.

        Return: Usado em function () {} irá retornar algo e irá encerrar a função.
        Break: Geralmente usado no Swith e laços, usado para para a instrução e sair dela.
        Continue: Usado também em laços e swith, usado para parar e voltar para o inicio da instrução, ignorando os comandos abaixo.


Escopo de variavel: // TODO Escopo de variavel

    O escopo é um intervalo de espaço de codigo onde o que é criado nele fica nele.

    Exemplo:

        var x = 1;
        Se eu der um console.log(x), ela irá retornar o valor de x

        Mas se eu fizer:
        function () {
            var y = 2;
        }

        Se eu der um console.log(y) ele dará resultado como não definido
        Porque a variavel está dentro do escopo da função, onde não temos acesso somente chamando a função

This: // TODO This

    O this usamos para referenciar um objeto a qual ele pertence.
    Exemplo:

        (function () {
            var myObject = {
                myProperty = 1,
                init: function init() {
                    return this
                }
            };
            console.log(myObject)
        })();

        Neste caso acima assim que executarmos a função ela dará como resposta as propriedades de "myObject" = myProperty e init()
        Contudo se fizermos uma alteração no console para:

            console.log(myObject.init());

        Desta maneira a resposta será a mesma que a acima, com as propriedades de "myObject", por causa do this dentro de "init"
        Pois a função dele é justamente retornar o objeto a qual ela pertence.
        Tanto que caso alteremos o "this" para:

            init: function init() {
                return this.myProperty;
            }

        O retorno desta vez, será o valor "1", que é justamente o valor de "myProperty"

        Basicamente: o "this" referencia o objeto que faz parte, caso ele esteja fora de um objeto, ele irá referenciar o objeto global
        Exemplo:

            (function () {
                return this
            })();

        Neste caso, ele irá retornar o objeto "window" do browser, em suma o objeto global.

Construtores: // TODO Construtores

    Os construtores são utilizados para criação de novas istancias de outros objetos.
    Exemplo:

        var obj = new Object();

        Foi criado dessa forma um objeto novo, diferente do "Objeto" origial.
        Tanto que se fizermos uma validação:

        console.log(obj === Object());

        O resultado será "False", justamente porque cada objeto está ocupando um espaço na memoria diferente.
        Mesmo fazendo uma declarção "igual":

        console.log( {} === {} );

        Por mais que na forma escrita tenha essa igualdade, mas na memoria cada um está em um lugar diferente.
        Justamente por isso que não são identicos.

    Nós também podemos fazer nossos proprios construtores.
    Por convenção a criação de um construtor é sempre iniciada com letra maiuscula.
    Exemplo:

        function MyConstructor() {
            this.prop1 = 1;
            this.prop2 = 2;
        }

        Nesse caso acima as propriedades ainda não foram remanejadas, porque não invocamos a função.

        Caso que queira passar essas propriedades para alguma variavel, por exemplo:

            var constructor = new Myconstructor();

            console.log( constructor )

        Dai dando um console.log dele, temos como retorno { prop1: 1, prop2: 2 }. Justamente porque utlizamos o new.

        *** AVISO ***

        Algo interessante de salientar é justamente o "this", como ele sempre referencia o objeto que faz parte, no exemplo
        acima, em quanto a função não era chamada ele "não existia", mas quando chamamos junto do "new", atribuimos as
        propriedades ao "constructor". Contudo, se não tivessimos usado as propriedades seriam alocadas no scopo global
        e o nossa variavel ficaria com "underfined", justamente porque a função não dá "return" de nada.

        Muita atenção a isso!!

'use strict': // TODO 'use strict'

    O "use strict" é um artificio que foi incorporado ao ES5, por um problema que aconteceia no ES3, onde variaveis não
    declaradas com "var" erão anexadas no escopo global, e isso é um problema gigante.

    Basicamente ela determina que no escopo que ela estiver as varivais sejam declaradas corretamente, justamente para não
    acontecer o erro do ES3.
    Exemplo:

        (function () {
            'use strict';
            name = 'Gustavo';
            console.log( name );
        })();

        Neste caso especifico irá retornar um erro no momento que executarmos esse script, justamente porque uma das variaveis
        está jogando o seu valor para o escopo global, coisa que o "use strict" não permite.

with: // TODO With

    O with é um facilitador para automatizar a quantidade de codigo digitado. Principalmente dentro de objetos complexos.
    Exemplo:

        (function () {
            var obj = {
                prop1: {
                    prop2: {
                        prop3: {
                            prop31: 1,
                            prop32: 2,
                            prop33: 3
                        }
                    }
                }
            }
        })();

        Neste caso especico para pode consultar cada um das propriedades de "prop3" precisamos do seguinte codigo:

            console.log(obj.prop1.prop2.prop3);

        Para evitar todo esse comando para chamar o objeto em questão podemos utlizar o "with":

            with( obj.prop1.prop2.prop3 ) {
                console.log( prop31, prop32, prop33 );
            }

        Basicamente o retorno será o mesmo se tivessimos feito 3 console.log da primeira forma. Só que dessa forma o "with"
        memoria aquele "atalho" que foi passado até aquele objeto e dentro dele só precisamos dizer qual das propriedades
        queremos acessar.

        IMPORTANTE: O with não funciona junto do 'use strict', pois pode haver alguma confusão nas variaveis.


delete: // TODO Delete

    O "delete", como o nome mesmo diz, delete propriedades de algum objeto.
    Exemplo:

        (function () {
            var obj = {
                prop1: 'prop1',
                prop2: 'prop2',
                prop3: 'prop3'
            };
            console.log( delete obj.prop2 );
        })();

        Neste caso especifico, será deletado a "prop1"

String: // TODO Strings

    Tratamento de String é algo relativamente simples.

        str.charAt(x) = Retorna o elemento que está na posição "x", pode ser feito também com a notação de array():
            str[x] = retorna a mesma coisa que o "charAt()";
        str.concat(elemento) = Retorna a string concatenada com o "elemento". Não altera a string origianl;
        str.indexOf( elemento, x ) = Retorna em qual posição o "elemento" está localizada na string. O elemento "x" é
            opcional, caso seja inserido a busca do "index" será inciada a partir do elemento "x";
        str.lastIndexOf( elemento, x ) = Retorna em qual posição o "elemento" está localizada na string fazendo a busca da direita
            para a esquerda. O elemento "x" é opcional, caso seja inserido a busca do "index" será inciada a partir do elemento "x";
        str.replace( x, novo x ) = Retorna uma nova string substituindo o "x" pelo "novo x". Não altera a string original;
        str.slice( x, y ) = Retorna uma nova string removendo do elemento "x" até o elemento "y". Não altera a string original;
        str.split( x ) = Retorna a string em um formato de array separando os elementos entre "x" e removendo.
            Uma forma interessante é usa-lo junto com o join() pois conseguimos fazer uma substituições geral.
            Exemplo: 'Carla'.split( 'a' ).join( 'o' ) = irá retornar "Corlo" justamente porque ele substituiu os "a" por "o".
            Não altera a string original.
        str.substring( x, y ) = Faz a mesma coisa que o "slice" só que com um "plus", onde podemos fazer a exclusão de trás
            para frente.
        str.toLowerCase() = Retorna uma nova string com todas as letras em caixa baixa;
        str.toUpperCase() = Retorna uma nova string com todas as letras em caixa alta;

Regex: // TODO Regex

    O "Regex" traduzida para o português: Expressões regulares, tem por objetivo o manuseio de strings só que de forma
    mais dinamica e interativa.
    A notação do "Regex" é basicamente: /elemento/gmi = Onde a expressão irá pro curar "x" na string e "gmi" são os parametros
    de busca:

        g - Global: Para pesquisar em todo texto;
        i - Ignore Case: Procurar o caracter, independente da formatação: maiusculo, menusculo.
        m - Multline: Para pesquisas iniciadas com "^" e possuem quebra de linhas.

    Exemplo:

        var text = "Olá, tudo bom? Meu nome é Gustavo Davi";

        console.log( text.match( /m/g ) );
        console.log( text.match( /m/gi ) );

        No primeiro caso usamos o metodo .match() para "procurar" os elementos, retornando assim um array contendo 2 "m";
            Justamente porque existe somente 2 "m" minusco na string em questão.
        Já no segundo caso o resultado será uma array com 3 "m", justamente por causa do parametro "i", onde a procura do
        elemento é independe da sua formatação.

        Uma forma utlizada para busca de mais de um elemento é:

        console.log( text.match( /m|n/g ) );
        console.log( text.match( /[mn]/g ) );

        As duas declarações estão certa, ambas procuram o caracter "m" ou "n";

        Uma forma de busca de sequencias:

        console.log( text.match( /[0-9]/g ) );
        console.log( text.match( /[a-z]/g ) );
        console.log( text.match( /[0-9a-zA-Z]/g ) );

        Na primeira notação o regex irá procurar qualquer número no intervalo de "0 a 9";
        No segundo a procura é de letras minusculas de "'a' a 'z'";
        E na ultima notação a procura é por números de "0 a 9", letras minusculas "'a' a 'z'" e maiusculas de "'A' a 'Z'";

    Outras propriedades do "Regex" são: // TODO Propriedades Regex

        \w - Para obtenção de caracteres alfabeticos, númericos e o "_" (underline);
        \d - Para obtenção de somente números(digits);
        \s - Para espaços em branco/tabulação;
        \n - Para quebras de linha;
        \t - Para tabulação;
        . - Para todos os tipos de caracteres, exceto quebra de linha;

        Exemplo:

        var text = "Olá, meu nome é Gustavo Davi, tenho 25 anos e nasci no dia 29/08/1993";

        console.log( text.match( /\w/g ) );

        Essa primeira notação irá retornar todos os itens da string que sejam alfabeticos, númericos e o "_" (underline);
            Será retorado um array que em cada posição haverá um elemento da string.
            IMPORTANTE: Letras com assento é considerado caracter especial, não sendo considerado pelo "\w";

        console.log( text.match( /\d/g ) );

        Nessa segunda notação será retorando todos os números que estão dentro da string, cada um ocupando um posição dentro
            de um array();

        Algo interessante é que podemos agrupar esses comandos:
        Exemplo:

            console.log( text.match( /\d\d/g ) );

            Neste caso especifico será armazenado um parde números para cada posição no array(), diferente da anterior que
            está expresso em cada unidade.

        Negação no Regex: // TODO Negação Regex

            A negação no regex é para você fazer uma seleção de caracteres de forma exclusiva.
            Exemplo:

                console.log( /[^aeiou]/g );

                Neste caso o regex irá pegar qualquer caracter que não esteja algum desses que estão dentro dos colchetes.

            Há também a negação das funcionalidades:

                \W - Pega todos os caracteres que não sejam alfanumericos ou "_";
                \D - Pega todos os caracteres menos númericos;
                \S - Pega todos os caracteres menos os espaços em branco;

        Repitição no Regex: // TODO Repetição Regex

            Sabemos que para selecionar quatro caracteres númericos por exemplo podemos fazer: /\d\d\d\d/g;
            Dai ele vai selecionar 4 números que estejam um ao lado do outro. Contudo se precisarmos de muitos, acaba ficando
            praticamente inlegivel devido a quantidade de "\d".

            Ai onde entra as repetições no regex, onde simplificamos essa digitação. Da seguinte forma:

                console.log( /\d{x,y}/g );

                    1 - Onde "x" é a quantidade minima que o "\d" terá que aparecer e o
                    2 - "y" a quantidade maxima para dar match;

            Também pode ser expressa a quantidade exata que deseja:

                console.log( /\d{x}/g );

                    1 - Nesse caso o a pesquisa de "\d" será com sequencia de "x" vezes;

            Não é obrigatorio o uso do "y", caso ele não seja declarado, o parametro só terá minimo como exigencia.

                console.log( /\d{x,}/g );

                    1 - A procura irá ser feita com no minimo quantidade "x" de aparições.
                    2 - E como não possui "y", não há limite de repetições maximas.

            Exemplo:

                Utlizando o mesmo exemplo acima, para pegar 4 números podemos fazer:

                console.log( /\d{4,4}/g );

                Nessa caso:

                    1 - Será selecionado números ("\d");
                    2 - {x, y} - Com no minimo "x" aparições e no maximo "y" aparições;

                console.log( /\d{1,4}/g );

                Neste caso:

                    1 - Os números serão selecionados caso apareçam no minimo uma vez e no maximo 4;

            "?": // TODO "?" no Regex

                A interrogação "?" tem uma função de deixar o elemento que ela se refere opcional.
                Exemplo:

                    console.log( /\d\d?/g );

                    Neste caso a busca será por um elemento númerico, mas caso o elemento seguinte seja númerico também
                    dará match.

                    var text = 'Nascimento: 29/08/1993';

                    console.log( text.match( /\d\d\d?\d?/g ) );

                    Neste caso o resultado será: [ '29', '08', '1993' ] Porque:

                        1 - O match será feito para obrigatoriamente 2 números;
                        2 - Caso ele encontre 3 ou 4 números, será dado match também. Em suma opcional;

                Outra funcionalidade do "?" é quando ele é usado ao lado de um repetido. Fazendo a chamada "Captura não gulosa"
                Exemplo:

                    var text = '<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>';

                    console.log( text.match( /(<\w+>)(.+)(<\/\w+>)/)  );

                    Nesse caso haveŕa 1 match e 3 capturas, contudo se quisermos que cada flag seja um match, precisamos
                    utlizar o "?":

                    console.log( text.match( /(<\w+>)(.+?)(<\/\w+>)/g ) );

                    Desta forma o match será feito com a quantidade minima possivel de caracteres:

                        1 - O regex irá fazer uma busca que inicie com uma flag;
                        2 - Qualquer coisa que estiver dentro dessa flag;
                        3 - E assim que ele achar um fechamento de flag ele termina o primeiro match;

            "+": // TODO "+" no Regex

                O "+" no Regex dá match quando o caracter ou função em questão aparece independe da quantidade de vezes:
                Exemplo:

                    console.log( /\d+/g );

                    Nesse caso será procurado um número sozinho ou não, mas no minimo 1;

                    Caso usemos a notação:

                    console.log( /\d\d+/g );

                    O match será feito em 2 números ou mais, mas no minimo 2;

            "^": // TODO "^" no Regex

                O "^" pode ser usado dentro de uma lista para negar aquilo que está dentro, mas também pode ser usada fora,
                so que com outra funcionalidade. Com o "^" fora de uma lista ele tem a função de verificar se o caracter
                seguinte a ele está no inicio da sentença ou não.
                Exemplo:

                    consol.log( /^A/ );

                    Nesse caso especifico ele irá verificar se a sentença começa com a letra "A", caso não o match não ocorre.

            "$": // TODO "$" no Regex

                O "$" é o oposto do "^" onde consultamos se o elemento anterior ao "$" está no final da string.
                Exemplo:

                    console.log( /a$/ );

                    O regex irá verificar se o ultimo caracter da string é uma "a", caso não o match não acontece.

            "(?:)": // TODDO "(?:)" no Regex

                O "(?:)" tem a funcionalidade de não capturar aquele grupo em que ela foi inserida.
                Exemplo:

                    console.log( /([aeiou])/g );

                    Nesse caso terá um match para existencia de qualquer um dos elementos dentro da lista, e uma captura.
                    Caso eu não queira capturar as vogais fazemos:

                    console.log( /(?:[aeiou])/g );

                    Com essa notação dizemos para o regex somente tentar o match e não capturar as vogais.

            \1, \2...: // TODO "\1, \2..." no Regex

                A notação \1, \2 pode ser usada para referenciar capturas dentro do Regex.
                Exemplo:

                    console.log( /<(h1)>(.+)(\/\w+)/ );

                    Basicamente:

                        1 - O Regex irá buscas por tags iniciando com <h1>;
                        2 - Tenha qualquer coisa dentro dela;
                        3 - E termine com uma "\" + alguma coisa;

                    Contudo dessa forma ele pode casar com fechamento de qualquer tag, dai podemos referencia-lo.

                    console.log( /<(h1)>(.+)(\/\1)/ );

                    Dessa maneira:

                        1 - O Regex irá fazer mesma coisa que o anterior;
                        2 - Só que no fechamento da tag ele irá buscar o fechamento com a tag igual a captura declarada;
            .search(): // TODO .search() no Regex

                O .search() faz a busca de um elemento, igual ao indexOf(), só que com notação de regex.

                var name = 'Gustavo';

                console.log( name.search( /G/ ) );

                    Nesse caso o retorno será da posição que está o elemento, "0". Caso não fosse encontrado seria "-1"
                    IMPORTANTE, ele só procura até a primeira aparição, mesmo colocando o /g de global;

    Usando o .replace no regex: // TODO .replace Regex

        O .replace(x, y) basicamente ele irá procurar o primeiro elemento "x" e substituir por "y". Dai com o Regex podemos
        dar um "plus" no nosso replace.
        Exemplo:

            var text = 'Olá, meu nome é Gustavo Davi, tenho 25 anos e nasci no dia 29/08/1993';

            text.replace( /a/g, 'Pp' );

            Nesse caso o replace irá substituir todos os a minusculo e subistituir por "Pp";

            Podemos fazer agrupamentos:

            text.replace( /(a)/g, '--$1---' );

            Quando utilizamos o "$" o JS entende que aquele elemento será substituido pela primeira capturação, nesse caso o (a).
            Dai quando houver a substituição todos os "a" serão trocados por "--a--";

        Outra funcionalidade muito interessante do .replace() utilizando o regex é a possibilidade de você utilizar
        uma função para o segundo elemento:

            text.replacte( /(a)(b)/g, function( capturaTotal, a, b ) {
                return ( a + b ).toUpperCase();
            } );

        Neste caso os passos são o seguintes:

            1 - O .replace irá procurar na string o "ab";
            2 - Como eles estão entre parenteses o "a" é o "$1" e o "b" o "$2";
            3 - Quando chamamos uma function() {} no segundo elemento do replace o atributo arguments da função já terá:
                3.1 - "ab" como parametro;
                3.2 - "a" como primeira captura;
                3.2 - "b" segunda captura;
            4 - Dai usamos isso como parametros ( capturaTotal, a, b );
                4.1 - capturaTotal retorna "ab";
                4.2 - a retorna "a";
                4.3 - b retorna "b";
            5 - Dai nesse caso teremos uma string para manipula-la como desejarmos;

        Usando esse mesmo raciocinio podemos fazer outro exemplo:

            var name = 'Gustavo';

            console.log( name.replace( /(\w)/g, function( capturaTotal, letra1 ) {
                return letra1.toUpperCase();
            } ) );

            Neste caso assima o .replace() irá:

                1 - Pegar todos os caracteres alfanumericos;
                2 - Na função usaremos a primeira captura, que nessa situação será a propria letra;
                3 - Jogaremos a letra para maiusculo, concatenando todas as letras.

            E o retorno será: 'GUSTAVO';

        Mais um exemplo:

            var name = 'Gustavo';

            console.log( name.replace( /(\w)(\w)/g ), function( capturaTotal, letra1, letra2 ) {
                return letra1.toUpperCase() + letra2.toLowerCase();
            } );

            A logica será:

                1 - Pegar todos os caracteres alfanumericos em pares;
                2 - A função terá os seguintes parametros:
                    2.1 - capturaTotal: \w\w;
                    2.2 - letra1: Primeiro (\w);
                    2.3 - letra2: Segundo (\w);
                3 - Dai fazemos a mesma logica do anterior, só que alterando um a um.

            E o retorno será: 'GuStAvO';

    Funcionalidades do Regex: // TODO Funcionalidades do Regex

        Com o Regex é um tipo de dado, há algumas funcionalidade que podemos utlizar:

        .test():

            É algum bem parecido com o .search(), só que ele diz se há ou não algo na string;
            Exemplo:

                var name = 'Gustavo';

                console.log( /\d/.test(name) );

                Nesse caso, nos passamos um "parametro" (números) e verificamos se a variavel possui algum.
                O retorno será "false" justamente porque não possui aquelo que a expressão procura.

        .exec():

            Ele retorna elementos baseado no parametro do regex e faz uma nova busca cada vez que é chamado.
            Exemplo:

                var name = 'Gus123tavo';

                console.log( /\d/g.exec(name) );
                console.log( /\d/g.exec(name) );
                console.log( /\d/g.exec(name) );
                console.log( /\d/g.exec(name) );

                    1 - O .exec irá procurar conforme o parametro, neste caso números;
                    2 - Dentro da string "name";
                    3 - Na primeira execução o resultado será "1";
                    4 - Na segunda já será "2", pois ele retorna os valores por chamada, não todos de uma vez;
                    5 - Na terceira "3";
                    6 - E caso ocorra a quarta chamada o resultado será "null"; reiniciando a busca;
                    7 - Chamando a quinta vez o resultado volta a ser "1";

Window: // TODO Window

    O "Window" é o objeto global com os elementos do browser.

    Propriedades:

        .alert( Mensagem ) = Retorna com um popup travando a navegação enquanto a caixa da mensagem não for fechada;
        .prompt( Pergunta ) = Irá fazer uma pergunta em um popup e solicitar uma resposta;
        .confirm( Pergunta ) = Irá fazer uma pergunta que terá como resposta: "SIM" ou "NÃO"

    Propriedades do "document":

        .getElementyById( "id" ) = Seleciona o elemento de acordo com o id declarado no HTML;
        .getElementsByClassName( "class" ) = Seleciona os elementos de acordo com a classe aplicado no arquivo HTML;
        .getElementsByTagName( "tag" ) = Seleciona as tags passadas por parametro;
        .getElementsByName( "name" ) = Seleciona os elementos que tiverem o valor name === ao passado no parametro;

    Manuseando os elementos do DOM, natualmente iremos utilizarmos e em alguns casos altera-los.
    Inclusive uma boa pratica é sempre que formos criar uma variavel vinda do DOM, devemos utilizar "$" antes do nome
    Para ficar claro que o valor daquela variavel originou no DOM.
    Como podemos selecionar elementos com as propriedades acima e atribui-las a variavel temos um problema, pois
    Quando atribuimos o valor de um id, class, tag ou name não estamos criando uma variavel mutavel e sim um referencial
    onde qualquer alteração feita na variavel será passada para o objeto global.

    Devido a isso temos a ferramenta:

        .querrySelector( 'elemento' ) = Irá pegar o primeiro elemento que encontrar do tipo solicitado;
        .querrySelectorAll( 'elemento' ) = Irá pegar todos os elementos que batem com o parametro passado.

    Algo interessante falar do .querrySelector:

        Selecionar:

        ID = "#nome_do_id";
        Class = ".nome_da_class";
        Atibuto = "[atributo="nome_do_atributo"]";
        Tag = "nome_da_tag";

    Arvore do DOM:

        Os objetos do DOM funcionam como uma arvore genealogica, onde cada elemente possui pais, irmãos e filhos.

        Propriedades:

          .parentNode = Retorna o pai imediato do elemento;
          Importante! - Espaços e quebra de linha também são considerado filhos nas pripriedades abaixo:
            .childNodes = Retorna todos os filhos do elemento;
            .firstChild = Retorna o primeiro filho do elemento;
            .lastChild = Retorna o ultimo filho do elemento;
            .nextSibling = Retorna o irmão seguinte ao elemento;
            .previousSibling = Retorna o irmão anterior ao elemento;
          Importante! - Propriedades abaixo consideram filhos somente tags HTML:
            .children = Retorna os filhos de uma aplicação que são tags HTML;
            .firstElementChild = Retorna a primeira tag filho;
            .nextElementSibling = Retorna a primeira tag irmão do elemento;
            .previousElementSibling = Retorna a tag irmão anterior ao elemento;
            .childElementCount = Retorna a quantidade de tags dentro de um nó;

          .nodeType = Retorna o tipo do elemento em formato de númeração:

            document = 9;
            element = 1;
            text = 3;
            documentFragment = 11;

          .nodeValue = Retorna o valor de um elemento;
          .nodeName = Retorna o nome do elemento;

        Metodos:

          .hasAttribute('name') = Retorna se existe aquele atributo na tag;
          .hasAttributes() = Retorna se há algum atributo na tag;
          .appendChild(child) = Inseri um elemento filho no final da tag;
          .insertBefore(insertTag, flagTag) = Insere um elemento "inserTag", antes do elemento "flagTag";
          .cloneNode(Boolean) = Clona uma tag. Quando True, todo ele. Quando False, somente a tag sem o conteudo;
          .hasChildNodes() = Retorna se há algum filho dentro da tag, HTML ou não;
          .removeChild(filho) = Remove o filho informado;
          .replaceChild(new, old) = Substitui um elemento por outro;

          document.createTextNode('text') = Cria um elemento texto;
          document.createElement('tagName') = Cria uma tag;

          document.createDocumentFragment() = É utilizado para otimizar o trabalhado do DOM, pois
            quando manipulamos elementos a cada nova alteração no DOM o browser irá recarregar a pagina e
            reconstrui item por item para inserir o que foi alterado, para a pagina não quebrar.
            Contudo com esse metodo nós juntamos todas as alterações em um unico local para quando o
            browser for inserir as alteração faça somente uma vez, não uma para cada elemento.
            Exemplo:

              var $fragment = document.createDocumentFragment();

              var childP = document.createElemente('p');
              var textP = document.createTextNode('Esse é o texto de P!');

              childP.appendChild(textP);
              fragment.appendChild(childP);

              document.body.appendChild(fragment);

              Basicamente:

                1 - Criamos um bloco de alteração com o $fragment;
                2 - Montamos as alterações;
                3 - Inserimos elas dentro do bloco;
                4 - Fazemos uma unica inserção no corpo da nossa pagina;

        Atributos:

          Atributos que retornam e recebem informação (GETTER, SETTER):
            .id = Retorna o id do elemento.
            .className = Retorna as Classes do elemento;
            .value = Retorna o valor do elemento;
            .href = Retorna o link para onde aquela tag está direcionando;
            .title = Retorna o titulo da tag, se não existe retorna "";
            .src = Retorna o local de origem da imgagem;
            .getAttribute('atrib') = Retorna o nome do atributo. Sempre como string;
            .setAttribute('atrib', 'value') = Altera valores de atributos ou cria atributos inseridos os valores passados;

    Funcionalidades:

        .value = Acessa o valor do elemento que ele está referenciando;
        .addEventLister( evento, callback function, outra coisa ) = É um metodo que fica "ouvindo" o browser até que o "evento"
            aconteça, quando ocorre a "callback function" é executada;
            outroca coisa pode ser True ou False. Em eventos de blocos, quando False os eventos são desparados do objeto clicado
            até o objeto pai, quando True, os eventos vão do pai para o objeto clicado.
        .removeEventLister = Tem a mesma funcionalidade do add só que para remover eventos, contudo precisa dos mesmo
            parametros para funcionar, 'evento', function de callback e true ou false.
        .preventDefault() = Metodo para quando usado o "submit" (envio de formulario) as informações não sejam apresentadas
            no browser;
        .setTimeOut( function() {}, x * 1000 ) = Executa uma função depois de "x" segundos;
        .setInterval( function() {}, x * 1000 ) = Executa a função a cada "x" segundos;
        .clearTimeOut( TimeOut ) = Interrompe a execução do "setTimeOut";
        .clearInterval ( Interval ) = Interrompe a execução do "setInterval";
        window.localiton.href = "index.html" = Redereciona a pagina para o arquivo informado;


    Eventos:

        'click' = Quando ocorre um clique em uma aerea determinada;
        'input' = Valida cada caracter inserido no input;
        'keyup' = Valida cada tecla que é apertada e solta, só valida quando a tecla é solta;
        'keydonw' = Valida as teclas que são apertadas;
        'change' = Sempre que há uma alteração de valor;

    Eventos do document:

        'DOMContentLoaded' = Dispara um aviso para o JS quando os elementos que quero manipular estão carregados na pagina;
            Metodo geralmente utilizado quando o script é carregando antes do texto.

    Eventos do Window:

        'load' = Evento usado para executar algo somente quando toda a pagina já está carregada;

AJAX: // AJAX

*/
// TODO FIM

