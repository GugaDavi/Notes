/*

Banco de dados: // TODO Banco de dados

    O nome é muito explicativo, mas sem dúvida complexo nas suas funcionalidades.
    Utilanzo os componetes que já vem no Apache, com o banco de dados mySQL acessamos:

    localhost/phpmyadmin

    E vamos acessar nossa plataforma com os bancos de dados.

    Para crianção de um novo banco de dados fazemos:

    CREATE DATABASE nomeDoBanco;

    Os comandos sempre em letras maiusculas e o nome dos objetos em minusculas;

    Outra forma de criar é na parte grafica:

    1 - Base de dados;
    2 - Inseri o nome do banco;
    3 - Seleciona o tipo (Utilizar o utf8_general_ci)

    O banco funciona de uma forma parecido de uma planilha no excel, onde há celulas, colunas e linhas
    Onde cada um tem seus valores ou conjunto de valores.

    No banco funciona da mesma fora, onde você pode criar uma coluna, por exemplo: "usuarios", e dentro
    dessa coluna outras subcolunas como: id, nome, email e telefone. 

Selecionar dados: // TODO Selecionar dados

    Para selecionar algum dado utilizamos o comando SELECT:

        SELECT nome, email FROM usuarios;

        Basicamente você determina quais elementos deseja obter e onde pegar.
        Algo importe é que tem que haver um espaço entre o COMANDO e os elementos;
        Para selecionarmos todos os dados utilizamos o "*";

Filtrando dados: // TODO Filtrando dados

    WHERE:

        Uma forma mais avançada para você fazer uma seleção de usuarios é utilizando o WHERE.
        Exemplo:

            SELECT * FROM usuarios WHERE id = '1';

            Dessa forma determinamos qual o item chave que será procurado. Nesse caso quem tiver o id 1;

        Esse metodo pode ser utilizado de forma agrupada utilizando um pouco de logica e precedencia.

            SELECT * FROM usuarios WHERE email = 'guga_davi@hotmail.com' AND senha = '123';

            Esse é uma forma de fazer a validação de um sistema de login, onde ele irá buscar o usuario que tiver
            a o respectivo email e senha;

        Outra opção é com precedencia:

            SELECT * FROM usuarios WHERE (email = 'guga_davi@hotmail.com' and senha = '123') OR data_nascimento = '1993-08-29';

            Nesse caso haverá uma primeira validação onde poderá ser satisfeito uma ou outra ou as duas ao mesmo tempo;
            Será buscado o usuario que tem o e-mail e senha respectivamente OU que possua a data de nascimento pedida.
            Dessa forma caso o usuario não achemos o usuario pelo email e senha, poderemos achar pela data de nascimento.
            Caso não achemos pela data de nascimento buscaremos pelo e-mail e senha.

        Em algumas situações não teremos a informação completa para fazer uma busca acertiva dai temos alguns atributos
        no WHERE para nos ajudar:

    LIKE:
    
        Basicamente utilizado para procurar partes de uma informação:

            SELECT * FROM usuarios WHERE email LIKE '%@gmail.com'

            Basicamente ele irá fazer uma procura na lista dos e-mail cadastrados que possuam a sentença @gmail.com no final;
            É no final justamente por causa do "%" ele nos auxilia na busca, dizendo que o que está antes ou depois
            (dependendo se você inseri no começo, no fim ou nos dois) é opcional;

    BETWEEN:

        Usado geralmente para nũmeros e datas, principalmente datas.

        Ele irá buscar por elementos que estejam dentro daquele roll. Exemplo:

            SELECT * FROM usuarios WHERE data_nascimento BETWEEN '1990-01-01' AND '2005-12-31';

            Ele irá buscar os usuarios que tem data de nascimento cadastrada de 01/01/1990 até 31/12/2005;

    IN:

        Usando geralmente para procurar em escopos definidos:

            SELECT * FROM usuarios WHERE id IN (1, 3, 4, 10, 156, 210);

            Bascamente será feito uma busca por esses ids especificos;

    HAVING:

        Tem quase a mesma funcionalidade que o WHERE só que com diferencias peculiares.
        O WHERE basicamente faz uma pesquisa filtrando de acordo com as condicionais que são passadas.
        O HAVING processa todos os dados e no resultado faz outro processamento. Exemplo:

            SELECT *, ( id + 10 ) as soma FROM usuarios HAVING soma < 15;

            Basicamente o comando acima está dizendo:

                1 - Selecione todos os ususarios;
                2 - Adicione 10 na númeração dos ids;
                3 - Crie uma nova coluna chamada soma e atribua o resultado das somas acima a ela;
                4 - Por fim selecione todos aqueles que tiverem soma < 15;

        Esse tipo de consulta não poderia ser feita com o WHERE, justamente porque ele faz a filtragem
        na passagem em cada item e como a coluna "soma" não existe daria erro no comando. Contudo
        o HAVING tem essa propriedade de esperar o resultado para depois processa-lo;
        Um dos defeitos dele é justamente esse que como ele irá esperar a soma de todos os usuarios
        o tempo que ele irá gastar será superior ao WHERE;
    
    ORDER BY:

        Utilizado para filtrar os elementos de um banco de acordo com a minha necessidade:

            SELECT * FROM usuarios ORDER BY data_nascimento ASC

            Nesse caso o resultado será feito pela de acordo com a data de nascimento, crescente;
            Para fazer de forma decrecente utilizamos: DESC;

        Caso queremos um limite de resultado, por exemplo os 10 primeiros:

            SELECT * FROM usuarios ORDER BY data_nascimento ASC LIMIT 0,10;

            Irá retornar os 10 usuarios mais velhos;
        
        Esse 0, 10 expressa que o LIMIT irá iniciar a busca sem pular elementos no inicio até os proximos 10;
        Caso não inserimos algum número como: 2,10 Ele irá pulas 2 elementos e pegará os 10 proximos;

    GROUP BY:

        Serve para pesquisas agrupadas, quando por exemplo há grupos dentro dos usuarios e queremos filtra-los.
        Caso usemos o WHERE iremos precisar pesquisar grupo por grupo.

            SELECT COUNT(*) as contagem, faixa_salarial FROM usuarios GROUP BY faixa_salarial;

            1 - Irá fazer uma contagem em todos os itens e armazenar na coluna contagem;
            2 - E na segunda coluna qual a faixa salarial;
                    

Inserindo dados: // TODO Incluir dados

    Para inserir dados utilizamos os seguingtes comandos:

    Primeira opção:

        INSERT INTO usuarios SET nome = 'Jose', email = 'jose@gmail.com', telefone = '82999999999';

        Basicamentos dizemos: Insira em usuarios o nome do elemento e o seu valores;

    Segunda opção:

        INSERT INTO usuarios (nome, email, telefone) VALUES ('Jose', 'jose@gmail.com', '82999999999');

        Aqui fazemos a mesma coisa só que de uma forma agrupada. Onde determinamos os elementos que serão inseridos
        seguidos dos valores na ordem respectiva.

Alteração de dados: // TODO Alterar dados 

    Quando precisamos alterar um campo ou varios em um banco de dados utilizamos:

        UPDATE usuarios SET nome = 'Helber' WHERE id = '1';

        Basicamente estamos dizendo: Atualize na tabela usuarios para o nome Helber no id 1;

    Caso desejamos alterar um grupo:

        UPDATE usuarios SET senha = '123' WHERE sexo = 'f';

        Dessa maneira iremos atualizar a senha de todos que estão cadastrados em usuarios que possuam
        sexo tipo 'f' (Feminimo);

Deletar informações: // TODO Deletar informações

    Para delar algum dos itens de que está cadastrado no banco fazemos:

        DELETE FROM usuarios WHERE id = '1';

        Ele irá deletar de usuarios o id 1;

Relacionamento de Tabelas: // TODO Relacionamento de Tabelas

    O relacionamento de tabelas é entre um tipo de dado ou varios de uma tabela ou tabelas. Existe alguns tipos:

        1 - 1:N = 1 Para muitos;
        2 - 1:1 = 1 Para 1;
        3 - N:N = Muitos para Muitos;

        1:N = É geralemnte utilizado quando tenho um tipo de dado que é utilizado por varios outros dados
        Exemplo: Em uma empresa existe varios cargos e em algumas situações há varias pessoas fazendo o mesmo
        tipo de serviço como um atendente de telemarking. Varias pessoas são atendentes, que é a função, e muitos
        são tem essa função;

        1:1 = É utilizado para conexão unica entre dois dados. Exemplo: O CPF, é um dado unico que pertence a
        uma unica pessoa, instraferivel ou inalteravel, então necessariamente só existe uma pessoa com uma númeração
        de CPF.

        N:N = Varios dados "A" que tem caracteristicas "B", caracteristica "B" que não é exclusividade de "A".
        Exemplo: Cores, nós podemos ter varias cores de carros e varios carros com essa mesma variedade de cores,
        como a cor preta, varios carros tem a cor preta e ela também está em varios carros.

JOIN: // TODO JOIN

    É uma ferramenta para pesquisa relacionada entre tabelas, onde passamos os parametros e ela irá retornar conforme
    Forem sendo satisfeitos.
    Há algumas opções para execução desse comando:

    INNER JOIN:

        blabla

        SELECT usuarios.nome, salarios.valores FROM usuarios INNER JOIN salarios ON salarios.id = usuarios.faixa_salarial;

        O raciocinio é o seguinte:

            1 - Iremos fazer duas colunas com os nomes e de usuarios e os valores de salarios;
            2 - A ligação é feita entre a tabela usuarios e salarios;
            3 - Onde o id de salarios corresponde a faixa salarial de usuarios;

        Algo inportante a mencionar é que o INNER irá retornar as combinações validas. Caso alguem esteja em uma faixa
        Que não exista ou há alguma faixa que não há ninguem cadastrado nela, não será mostrado a pessoa nem/ou faixa;

    RIGHT e LEFT JOIN:

        Usado para priorizar a coluna da esquerda(LEFT) ou da direita(RIGHT), diferente do INNER, LEFT e RIGHT mostra
        o resultado mesmo se a combinação não for feita.
        Exemplo:

        SELECT usuarios.nome, salarios.valores FROM usuarios LEFT JOIN salarios ON salarios.id = usuarios.faixa_salarial;

        O comando irá:

            1 - Iremos fazer duas colunas com os nomes e de usuarios e os valores de salarios;
            2 - A ligação é feita entre a tabela usuarios e salarios;
            3 - Caso exista algum usuario que não tem faixa salarial cadastrada ele irá retornar da mesma forma;

        O RIGHT iria funcionar da mesma forma, só que iria priorizar a coluna "salarios" que iria aparecer todas as faixas salariais
        E na que não tiver usuario cadastrado será retornado "NULL";

FUNÇÕES: // TODO Funções

    As funções são criadas para economizar espaçamento de codigo e produtividade.

    A estrutura basicamente é:

        CREATE FUNCTION CONTAR(elemento VARCHAR(100))
            RETURNS INT(10)
            BEGIN
                DECLARE qt INT(10);
                SET qt = LENGHT(elemento);
                RETURN qt;
            END

        A logica ficou assim:

        1 - Utilizamos o metodo CREATE FUNCTION com o nome da função;
        2 - Dentro dos parenteses os parametros com o tipo de elemento que será inserido;
            a - Nesse caso um elemento tipo VARCHAR com até 3 caracteres;
        3 - Em seguida passamos o retorno que será do tipo INT(10), número inteiro até 2 caracteres;
        4 - Em seguida abrimos o codigo que será rodado quando a função for chamada;
        5 - No caso especifico declaramos uma variavel do tipo INT(10);
        6 - Em seguida atribuimos a ela o LENGHT(contagem do tamanho) do parametro;
        7 - Por fim o retorno da variavel criada;

    Aplicando a função em uma linda de comando podemso:

        SELECT usuarios.nome, usuarios.email, CONTAR(nome) as contagem FROM usuarios;

        A linha de comando irá:

        1 - Fazer 3 colunas: Nome, email e uma chamada de Contagem;
        2 - Com a execução da função contagem, passamos como parametro o nome;
        3 - O resultado será uma tabela com nome, e-mail e a quantidade de caractes de nome;

VIEWS: // TODO Views

    Views são utilizados para criação de tabalas de conteudos virtuais, essa tabela não pode ser alterada,
    pois ela somente guarda um resultado. Geralmente utilziada em bancos com muitos dados, exemplo, um
    banco de cadastro de todos os pilotos de avião do mundo. Posso criar uma view somente com os brasileiros;
    Com isso não precisamos fazer uma pesquisa manual para separar-los e por fim dar alguma trativa;

    A forma de criação é:   

        CREATA VIEW nomedaview AS
            SELECT * FROM usuarios WHERE nacionalidade = 'br';

        1 - Criamos uma view;
        2 - Dentro do bloco logico dela inserimos a informação que queremos guardar;
        3 - Sempre que precisarmos da informação que ela guarda, basta chama-lá;

*/