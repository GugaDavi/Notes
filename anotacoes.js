/*

Anotaçãoes:

O JS é uma linguagem que nasceu na web, não na internet.

Internet != Web
    Internet == Conexão
    Web == Pagina Web

Variaveis: 
    O JS trabalha com variaveis, onde são declaradas com:

    var
    let
    const

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

Operadores aritimetricos:

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

Operadores condicionais:

    Os operadores condicionais são aqueles que criam um vinculo entre verificação de variaveis.

    && - "e" Usando verificar se duas condições são verdadeiras;
    || - "ou" Usado para verificar se pelo menos uma das condições é verdadeira.

Arrays() - São listas, onde cada item da lista tem uma posição, inciando da posição 0.

    Para consulta em um array() utilizamos a forma: array[posição do que quero acessar]
        Exemplo: var lista = ['maça', 'banana', 'pera']
        Se eu der um console.log(lista[0]) - Irá gerar no console o item maça
    
    Os Arrays() são objetos desfarçados, onde mesmo sendo uma lista, possui propriedades onde podemos acessar,
    consultar e alterar.

    Funções do Array():

        array().lenght = mostra o tamanho da lista, quantidade de elementos
        array().push(elemento) = acrescenta o elemento ao array já criado.

Objeto{} - São metodos que dentro dele existe atributos.

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

Funções() {} - É um bloco que codigo que tem um nome, que para esses codigos serem executados tem que ser chamados
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

        Neste ultimo caso, não há uma forma de chamarmos a função escrita, dai precisamos transforma-la em uma expressão:

        (funciton () {
            return 1 + 2;
        })();

        A mesma função declarada dessa forma será executada quando o JS passar por ela, contudo só será executada aquela unica vez.


Funções e Objetos: Basicamente a parte mais utilizada no JS, a junção desses dois não tem limites.
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

Operadores condicionais:

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

Condicional ternario:

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

Loops:

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

Saltos:

    Os saltos são utilizados para interferir na sequencia de um codigo, quando precisamos que ele retorne algo, pare e reinicie ou sai da instrução.
    É o caso dos saltos: return, break e continue.

        Return: Usado em function () {} irá retornar algo e irá encerrar a função.
        Break: Geralmente usado no Swith e laços, usado para para a instrução e sair dela.
        Continue: Usado também em laços e swith, usado para parar e voltar para o inicio da instrução, ignorando os comandos abaixo.


Escopo de variavel:

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

*/
