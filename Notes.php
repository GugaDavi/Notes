<!--

O comando PHP sempre tem inicio quando dizemos: // TODO PHP

    <?php

    ?>    

Desta forma declaramos para o codigo que naquele escolo será inserido codigos PHP.

As variaveis em PHP são declaradas com "$": // TODO Variaveis

$nome_da_variavel = 'valor';

O nome da variavel não pode ter no primeiro caracter:

    "Espaço";
    Caracteres especiais;
    Números

As variaveis primitivas são:

    $string = 'texto';
    $numberInt = 90; // Números inteiros;
    $float = 1.5; // Números decimais;
    $bulleam = true; // or false;
    $array = [];

Comentarios: // Comentarios

    No PHP os comentarios são feitos com:

    // Para uma linha de comentarios;
    /**/ 2 ou mais linhas;

Para impressão na tela: // Impressão na Tela

    echo // Para impressões simples;
    print_r() // Para impressões de objetos


Para concatenação utilizamos o "."

Array() // TODO Array 
{

    O array alem de receber elementos unicos como:

        $array = [1, 2, 3];

    Pode receber alementos como um objeto:

        $array = [
            'name' = 'Gustavo',
            'lastName' = 'Guedes',
            'age' = 25    
        ];

    A forma de consulta é usando a mesma notação de array;

        echo array['name']; // Irá printar na tela o valor contido na variavel "name";
    
    Para inserirmos um elemento dentro do array na proxima posição disponivel fazemos:

        $array[] = 4;

    Nesse caso o php irá iserir o valor "4" na proxima posição disponivel;

}

Variaveis Globais // TODO Variaveis Globais
{

    São variaveis que já vem por padrão no PHP, exemplo:
    
    $_SERVER // Irá retornar varias informações sobre a conexão com o servidor
    $_GET // Utilizada para pegar informações passadas pelo navegador;
    $_POST // Pega os dados passados pelo navegador que não são mostrados na URL;

    Exemplo:

        $user = $_GET['nome_da_variavel']

        echo 'O usuario que entrou foi: ' . $user;

    Nesse caso quando o usuario for passado pelo navegador o $_GET irá transferir o valor para $user;

    Geralmente quando acessamos uma pagina os dados de usuario e senha não são enviados automaticamente
    Então para isso usamos a função isset() para fazer essa validação:

    Exemplo:

        if ( isset( $_POST['email'] ) ) {
            echo 'Usuario enviou o e-mail';
        }

    Basicamente o comando acima será executado se no formulario da pagina a tag com o name 'email' exista;

    Outra funcionalidade utilizada para validação de formulario é o empty(), usado para saber se o campo está vazio

        if ( empty( $_POST['email'] != false ) ) {
            echo 'E-mail não está vazio'
        }

    Basicamente ele retorna 'true' para quando o campo está vazio, caso retorno seja 'false' (preenchido)
    satisfaz a nossa condicional;
}

Constantes // TODO Constantes 
{

    São variaveis que não há alteração de valor naquela aplicação:

        displey('SITE', 'http://www.meusite.com.br');

    Nesse caso criamos uma constante que irá receber a url do meu site. Irá economizar nosso tempo na digitação
    dess URL;

    
}

Condicionais // TODO Condicionais 
{

    Os condicionais é uma ferramenta para validação logica de um valor;

    SE (ISSO) {
        FAÇA ISSO
    } SE NÃO {
        FAÇA ISSO
    }

    A logica acima é transcrita no codigo da seguinte forma:

    if (isso) {
        faça isso;
    } else {
        faça isso;
    }
}

Primeira validação de Login // TODO Primeira Validação de Login

Geralmente codamos em um arquivo separado daquele que está o nosso HTML, por exemplo, contudo há algumas
formas de processar informações em arquivos separados.

1 - Fazendo o codigo em um outro arquivo, inserimos no form, por exemplo, a tag action=""
    que irá direcitar o que foi colhido no formulario e enviado para outra pagina com os valores;
2 - Outra opção é utlizar o require "" é uma função do PHP que ele transporta os codigos que estão
    em outro arquvio para o local onde ele está sendo invocado executando os comandos no mesmo arquivo;
3 - A terceira opção é o include, funcionamento muito parecido com o require, só

Algo importe no preenchimento de formularios ou obtenção de informações é o redirecionamento quando atualizamos
a pagina, em uma loja virtual por exemplo: Quando adicionamos um produto no carrinho, e caso apertemos F5
será inserido novamente o que foi feito pelo cliente, gerando uma duplicidade do produto.

Para solicinar esse problema precisamos no final da obtenção dos dados direcionar para a pagina onde a cliente
está, para não haver esse problema de formulario. Exemplo:

    if ( isset($_POST['msg']) ){
        $msg = $_POST['msg'];

        header("Location: index.php");
    }

Nesse exemplo, quando obtermos o valor de "msg" a pagina será direcionada paara "index.php";

Exemplo de validação de sistema de login:

<?php

    if ( isset($_POST['email']) && empty( $_POST['email'] == false )) {
        if ( empty( $_POST['senha'] == false && isset($_POST['senha']) ) ) {
            $email = $_POST['email'];
            $senha = $_POST['senha'];
            echo 'Usuario enviou o e-mail '.$email;
            echo 'Senha preenchida com '.$senha;
        }
        
    }
    
?>
-->
<form action="" method="POST">

    E-mail:<br/>
    <input type="text" name="email"><br/><br/>

    Senha:<br/>
    <input type="password" name="senha"><br/><br/>

    <input type="submit" value="Enviar" id="enviar">

</form>

<!--

O Exemplo acima passa pelos seguintes comandos:

    1 - Verifica se o e-mail foi enviado pelo 'submit' e se ele não está vazio;
    2 - Depois de pegar essa validação fará o mesmo procedimento com a senha;
    3 - Por fim retornará na tela o que foi digitado no campo de e-mail e senha;
    4 - Caso algumas das condições acima não forem validadas corretamente nada irá acontecer;s

-->
<!--

Loops: // TODO Loops

    Os metodos de repetição são utilizados para, como o nome ja indica, economizar na repetição de comandos;

    WHILE:

        O while é um metodo simples que irá girar em torno do questionamento logico no header;

        $x = 0;

        while( $x <= 10 ) {
            echo $x;
            $x++;   
        }

        Nesse caso especifico será retornado os valores de 0 a 10, pois o while faz a seguinte pergunta:

            1 - Enquanto a validação que foi passada, nesse caso ( $x <= 10 ), for valida;
            2 - Irei imprimir na tela o valor de '$x' e depois incrementar uma unidade;
            3 - Quando o "$x" não for mais "<=" a 10; a premissia será falsa, logo termina o loop;

    FOR:

        O for tem as funcionalidades parecidas com o WHILE só que com uma particuliaridade de ter um inicio e um fim;

        for ( $x = 0; $x <= 10; $x++ ) {
            echo 'O valor de X é '.$x;
        }

        A construção do for por si já é diferente, onde declaramos o nosso contador, a validação, e a forma de incremento;
        Basicamente será dessa forma;

    FOREACH:

        O FOREACH é uma ferramenta utilizada para percorrer dados de arrays();

        $usuarios = [
            'Gustavo',
            'Helber',
            'Matheus',
            'Herta'    
        ];

        foreach( $usuarios as $values ) {
            echo $values;
        }

        Nesse caso especifico será impresso na tela todos os nomes inseridos em usuarios.

        Uma forma mais complexa de utiliza-lo é juntando as informações dos valores e das chaves de cada um. Exemplo:

        $users = [
            'nome' => 'Gustavo',
            'idade' => 25,
            'sexo' => 'M',
            'cidade' => 'Maceio'    
        ];

        foreach ( $users as $keys => $values ) {
            echo $keys.' => '.$values.'<br/>';
        }

        Nesse caso será impresso não somente os valores, mas também suas chaves:

            nome => Gustavo
            idade => 25
            sexo => M
            cidade => Maceio

Funções: // TODO Funções

    As funções são usadas para armazenar codigos para serem executados quando essa função é chamada.

    function somar( $x, $y ) {
        return $x + $y;
    }

    Na função acima quando invocada será inserido dois valores: x e y. Onde serão somados.

    FUNÇÕES DE TEMPO:
    
        data() - Usado para retornar datas e horas do servidor, da data atual;
        time() - Retorna resultados voltado para datas em formato de milisegundos;
        strtotime() - Conseguimos adicionar na data atual, valores como: Anos, meses, semanas, dias e tudo mais;
    
    FUNÇÕES MATEMATICAS:

        abs() - Retorna o número absoluto; Ex: abs(-10) = 10; abs(-4.2) = 4.2;
        round() - Arredonda o valor para mais ou para menos. Até .4 para baixo, depois, para cima;
        ceil() - Arredonda o valor sempre para mais. ceil(2.00001) = 3;
        floor() - Arredonda o valor sempre para menos. floor(2.9999) = 2;
        rand(x, y) - Retorna um número aleatorio entre x e y;

    MANIPULANDO STRING:

        explode('', string) - Retorna um array, segmentando a string de acordo com o primeiro parametro;
        implode('', array) - Retorna uma string, juntando os elementos de um array com o declarado no primeiro parametro;
        number_format(8.24984, x) - Retorna o número com varias casas decimais, com apenas x casas;
        str_replace(x, y, string) - Retorna a string substituindo x por y;
        strtolower('STRING') - Converte todas as letras pra minusculos;
        strtoupper('string') - Converte todas as letras para maiusculas;
        substr($String, x, y) - Seleciona uma string da letra "x" a letra "y";
        ucfirst($string) - Coloca a primeira letra da string maiuscula;
        ucword($string) - Coloca cada primeira palavrava da string em maiuscula;

    MANIPULANDO ARRAYS:

        array_keys($array) - Retorna uma array com as keys de uma array;
        array_values($array) - Retorna um array com os valores do array;
        array_pop($array) - Remove o ultimo elemento do array;
        array_shift($array) - Remove o primeiro item do array;
        asort($array) - Ordena o array de acordo com os valores, sem perder a conexão entre chaves e valores;
        arsort($array) - Ordena o array de acordo com os valores de forma decrescente;
        count($array) - Retorna a quantidade de elementos dentro do array;
        in_array(x, $array) - Retorna se "x" existe em array(); True or False;

Criptografia: // TODO Criptografia

    Utilizada para armazenar informações importantes, como senhas.

    Há duas formas de codificar uma informção.

    Uma inreversivel, onde depois de criptografada não conseguimos saber o valor original:

    $criptografarSenha = md5($senha);

    Outra forma de criptografar a senha, mas que podemos reverser é o:

    $criptografarSenha = base64_code($senha);
    
        Iŕa gerar um codigo menor, mas mascarado. Contudo que pode ser descriptografado com:

    $criptografarSenha = base64_decode($senha);

        Irá retornar o valor original de $senha;

Segurança da Informação: // TODO Segurança da informação

    Quando fizermos o submit de um formulario, sempre utilizaro o codigo para obtenção do item com o
    
    addslaches($_POST["usuraio"])

    Justamente para garantir que pessoas má intencionadas não acesse nosso banco de forma indevida.
    Ele serve para blindar possiveis tecnicas de acessar ou fazer edições no nosso banco.

Sessão e Cookie: // TODO Sessão e Cookie

    Quando iniciamos uma sessão é uma linha de conexão constante entre o usuario (navegador) e o servidor.
    Caso o navegador seja fechado, será necessario iniciar uma nova sessão.
    A diferença para o Cookie é que ele salva informações com o usuario, tanto que fechando o navegador
    não é suficiente para exclui-los.

    Para iniciar uma sessão no PHP fazemos:

    session_start();

    Dessa forma o PHP sabe que desse momento em diente, será iniciado uma sessão;

    Para salvar alguma informação no servidor durante a sessão utilizamos;

    $_SESSION['usuario'] = 'Gustavo';

    Nesse caso será armazenado durante o periodo ativo da sessão na chave "usuario" o valor 'Gustavo';

    Para criação do cookie utilizamos:

    setcookie( 'nomeDoCookie', 'valorDoCookie', time() + 3600 );

    Basicamente declaramos o nome dele, o valor e o tempo que ele irá ficar armazenado no browser do usuario
    Nesse caso especifico ele irá pegar o horario atual com a função time() e acrescentar mais 3600 milissegundos.
    1 hora.

Erros no PHP: // TODO Erros no PHP

    Avisos de erros no PHP:

    Fatal Erro: Quando acontece o PHP trava a aplicação impedindo de carragar as aplicações seguintes;
    Warnig: Gera um erro, mas não impede a excução das outras funcionalidades do site;
    Parse Erro: Erros de digitação: Geralmente esquecimento do ";";

PDO: // TODO PDO

    PDO é uma biblioteca que nos permite acessar os bancos de dados de diversos tipos;
    Basicamente fazemos:

        $dns = 'mysql:dbname=sistema;host=localhost';

        Nessa primeira variavel declaramos 'tipoDoBanco:dbname=nomeDoBanco;host=IpOuURLdoAcesso';

        $dbuser = 'root';

        Aqui inserimos o nome do ususario;

        $dbpass = '';

        Senha do usuario quando houver;

    Depois de obtidos as informações acima, vamos para o acesso propriamente dito:

        try {
            $pdo = new PDO( $dns, $dbuser, $dbpass );
        } catch ( PDOException $e ) {
            echo 'Falhou '.$e -> getMessage();
        }

        Nessa parte utilizamos o "try", um metodo para gericiar possiveis erros de acesso, onde:

        1 - No primeiro bloco de codigo, dentro do try:
            1.1 - criamos um acesso e um novo objeto PDO;
            1.2 - passando como paramentros as variaveis de: banco, login e senha;
        2 - No catch é onde gerenciamos os erros de acesso do try, onde:
            2.1 - Como parametro passamos o: PDOException $e onde será armazenado o erro;
            2.2 - E pro fim a tratativa do erro dentro do bloco de codigo do catch;

    Com o acesso ao banco estabelecido podemos começar a consultar informações:

        try {
            $pdo = new PDO( $dsn, $dbuser, $dbpass );

            $sql = 'SELECT * FROM usuarios';

            $sql = $pdo -> query( $sql );

            if ( $sql -> rowCount() > 0 ) {
                forEach( $sql -> fetchAll() as $linha ) {
                    echo 'O valor do banco é: '.$linha['nome'].' - '.$linha['email'].'<br/>';
                }
            } else {
                echo 'Erro ao consultar o banco';
            }
        } catch ( PDOException $e ) {
            echo 'Falhou '.$e -> getMessage();
        }

    Basicamente:

        1 - Caso não acessado o banco, será mostrado processado o codigo condido em catch();
        2 - Entrando no banco criamos uma variavel que terá o que queremos fazer no banco;
        3 - Nesse caso especifo a variavel 'sql' irá retornar todos os dados contidos na tabela usuarios;
        4 - Em sequida subscrevemos a mesma variavel utilizamos com uma propriedade do objeto '$pdo';
        5 - Usando o metodo query( $sql ), passando como parametro a string com o comando de consulta;
        6 - No condicional iremos consultar se foi retornado algo nessa query();
        7 - Com a propriedade rowCount(), que diz quantas linhas possui o retorno do banco, veremos
            qual a resposta, se o valor for superior a 0, necessariamente retornou algo;
        8 - Sse não retornar nada, será entradno no 'else';
        9 - Caso condicional retorne 'True', podemos dar trativas nos dados, pois puxamos do banco para nossa memoria;
        10 - Em seguida fazemos um forEach para passar por cada item do item retornado do banco;
        11 - Como ele ainda não é um array() usamos a propriedade fetchAll() que irá transformar
            cada linha é uma item do array;
        12 - Em seguida passando por cada item do array() podemos acessar cada key de cada item;
        13 - No caso acima chamamos as keys 'nome' e 'e-mail';

    Propriedades do PDO:

        -> query( $comando ) - Envia um comando para o banco;
        -> lastInsertId() - Retorna o número do ultimo 'id' inserido;

    Uma forma mais correta de criação de querys é usando o PDOStatement e binds.
    Consiste em uma forma mais segura de receber dados e fazer a consulta dele no banco;
    Exemplo: 
    
    Atualização do nome de usuario no banco:

        try {
            $pdo = new PDO( $dsn, $dbuser, $dbpass );

            $nomeNovo = 'Gustavo';
            $id = '1';

            $sql = "UPDATE usuarios SET nome = :novoNome WHERE id = :id";

            $sql = $pdo -> prepare( $sql );
            $sql -> bindValue( ':novoNome', $nomeNovo );
            $sql -> bindValue( ':id', $id );
            $sql -> execute();

            echo 'Usuario atualizado com sucesso';

        } catch ( PDOException $e ) {
            echo 'Falhou '.$e -> getMessage();
        }

        No caso assima:

        1 - Recebemos o novo que o usuario deseja alterar e o id;
        2 - Criamos a query substituindo os valores propriamente ditos por flags usaremos como referenciais;
        3 - Usamos a propriedade 'prepare( $sql )' passando como parametro nossa query;
            3.1 - Esse metodo diz para o query que iremos trocar algumas informações nela;
        4 - Já com a query pré-pronta utilizamos o metodo 'bindValue()';
            4.1 - Onde temos dois parametros o priemiro a flag;
            4.2 - O segundo o valor da flag. Que nesse caso as variaveis recebidas;
        5 - Por fim executamos a query;

   
Envio de arquivos: // TODO Envio de arquivos:

    Envio de um unico arquivo:

        index.php:

        <form method="POST" enctype="multipart/form-data" action="config.php">
            <input type="file" name="arquivo"> <br/><br/>
            <input type="submit" value="Enviar">
        </form>

        config.php:

        <?php

        $arquivo = $_FILES['arquivo'];

        if ( isset($arquivo['tmp_name']) && empty($arquivo['tmp_name']) == false) {
            move_uploaded_file( $arquivo['tmp_name'], 'arquivo/'.$arquivo['name'] );

            echo 'Arquivo enviado com sucesso';
        
        }
        ?>

        1 - Index.php enviado o arquivo para o config.php;
        2 - Anexamos o arquivo na variavel $arquivo;
        3 - Há uma validação se o arquivo existe e se não está vazio;
        4 - Satisfazendo a validação utilizamos a função move_uploaded_file();
        5 - Onde passamos dois parametros: O que será movido, Para onde;

    Para varios arquivos:

        index.php:

        <form method="POST" enctype="multipart/form-data" action="config.php">
            <input type="file" name="arquivo[]" multiple> <br/><br/>
            <input type="submit" value="Enviar">
        </form>

        config.php:

        <?php

        if ( isset($_FILES['arquivos']) ) {
            if ( count($_FILES['arquivos']['tmp_name']) > 0 ) {
                for ( $cont = 0; $cont < count($_FILES['arquivos']['tmp_name']); $cont++ ) {
                    $nomeDoArquivo = md5( $_FILES['arquivo']['name'][$cont].time().rand(0, 999) ).'jpg';

                    move_uploaded_file( $_FILES['arquivo']['tmp_name'][$cont], 'arquivos/'.$nomeDoArquivo );

                    echo 'Enviados com sucesso';
                }
            }
        }

        ?>

        1 - Nesse caso prisamos usar a propriedade "multiple" e transformar o arquivo em array "arquivo[]";
        2 - No config.php verficamos se foram enviados os arquivos;
        3 - Se pelo menos um arquivo foi movido para a pasta temporaria no servidor;
        4 - Um loop para passarmos por cada item que está na pasta;
        5 - Como o "tmp_name" agora é um array precisamos passar por cada item;
        6 - Geramos um nome para o arquivo, onde criptografamos com: nome, horario que foi anexado e um número aleatorio;
        7 - Por fim movemos cada arquivo para o local determinado;
        
-->