/*
    In the year of the World Cup, the official sticker album is always a great success
    among children and adolescents.

    For those who don't know, the album contains spaces numbered from 1 to N to paste the stickers;
    each sticker, also numbered from 1 to N, is a small photo of a player from one of the teams
    that will compete in the World Cup.

    The objective is to complete the album, in order to paste all the stickers in their respective spaces.

    The stickers are sold in sealed envelopes, so the buyer does not know which stickers
    is buying, and when opening the package, you may find a sticker that he already has in the album
    thus collecting a repeated figure.

    To help users, the company responsible for selling the album wants to create an application that allows
    easily manage the missing stickers to complete the album and is asking for your help.

    Given the total number n of album slots, and a list of stickers already purchased
    (which may contain repeated stickers), your task is to determine which stickers are missing to complete
    the album and return a list of these stickers in ascending order.

    Complete the missing figurines function on the side, knowing what the parameters represent respectively:
    n: The total number of stickers that are on the album. n will be between 1 and 50 thousand
    lst: The list of purchased stickers (pasted in the album and repeated). The size of lst will be between 1 and 50 thousand

    // --

    Em ano de Copa do Mundo, o álbum de figurinhas oficial é sempre um grande sucesso 
    entre as crianças e adolescentes.

    Para quem não conhece, o álbum contém espaços numerados de 1 a N para colar as figurinhas; 
    cada figurinha, também numerada de 1 a N, é uma pequena foto de um jogador de uma das seleções 
    que disputará a Copa do Mundo.

    O objetivo é completar o álbum, de modo a colar todas as figurinhas nos seus respectivos espaços.

    As figurinhas são vendidas em envelopes fechados, de forma que o comprador não sabe quais figurinhas 
    está comprando, e pode ocorrer de ao abrir o pacote encontrar uma figurinha que ele já possui no álbum 
    colecionando assim uma figurinha repetida.

    Para ajudar os usuários, a empresa responsável pela venda do álbum quer criar um aplicativo que permita 
    gerenciar facilmente as figurinhas que faltam para completar o álbum e está solicitando a sua ajuda.

    Dados o número total n de espaços do álbum, e uma lista das figurinhas já compradas 
    (que pode conter figurinhas repetidas), sua tarefa é determinar quais figurinhas faltam para completar 
    o álbum e retornar uma lista com essas figurinhas em ordem crescente.

    Complete a função figurinhasFaltantes ao lado, sabendo que os parâmetros representam respectivamente:
    n: O número total de figurinhas que existem no álbum. n estará entre 1 e 50 mil
    lst: A lista de figurinhas compradas (coladas no álbum e repetidas). O tamanho de lst estará entre 1 e 50 mil

    Ex: figurinhasFaltantes(n, lst)

    n = 10, lst = [5, 8, 3] => Deve retornar [1, 2, 4, 6, 7, 9, 10]
    n = 5, lst = [3, 3, 2, 3, 3, 3] => Deve retornar [1, 4, 5]
*/


// solution
function missingFigurines(n, lst) {

    let figurines = [];

    for (let i = 1; i <= n; i++) {
        if (!lst.includes(i)) {
            figurines.push(i);
        }
    }

    return figurines;
}


/* 
    Given a board represented by the matrix T[12][12] your mission is to mark with the letter X only the
    entered positions determined by the user.

    input:
    The input is composed of an integer numeric parameter C, such that 0 ≤ C ≤ 11, that r
    represents the column that will receive the markings, the second parameter is a list containing
    two integers: I and F, such that 0 ≤ I ≤ 11, 0 ≤ F ≤ 11, I ≤ F, these numbers represent the
    lines that must be marked with the letter 'x'. All cells starting at row I and ending at F
    (always in column C) must be checked.

    output:
    The output should print to the console the T board marked with the letter X in the positions
    informed and with an underscore in the unmarked positions. That is, its function should not
    return nothing, it should use console.log to write to the console.
    This implies that there can be no "debug" console.log, otherwise it will interfere with checking the response.

    Ex.:
    Input: (1, [1, 4])
    Output (note that there are exactly 12 lines and that each line has 12 characters being "_" or "x"):

    // --

    Dado um tabuleiro representado pela matriz T[12][12] sua missão é marcar com a letra X apenas as 
    posições inseridas determinadas pelo usuário.

    Entrada
    A entrada é composta por um parâmetro numérico inteiro C, tal que 0 ≤ C ≤ 11, que r
    epresenta a coluna que irá receber as marcações, o segundo parâmetro é uma lista contendo
    dois números inteiros: I e F, tal que 0 ≤ I ≤ 11, 0 ≤ F ≤ 11, I ≤ F, esses números representam as 
    linhas que devem ser marcadas com a letra 'x'. Todas as células começando na linha I e terminando na F 
    (sempre na coluna C) devem ser marcadas.

    Saída
    A saída deve printar no console o tabuleiro T marcado com a letra X nas posições 
    informadas e com um sublinhado nas posições não marcadas. Ou seja, sua função não deve 
    retornar nada, ela deve usar console.log para escrever no console. 
    Isso implica que não pode haver console.log de "debug", senão ele interferirá na checagem da resposta.

    Ex.:
    Entrada: (1, [1, 4])

    Saída (observe que são exatamente 12 linhas e que cada linha tem 12 caracteres sendo "_" ou "x"):
    ____________

    _x__________

    _x__________

    _x__________

    _x__________

    ____________

    ____________

    ____________

    ____________

    ____________

    ____________
*/


// solution
function toDraw(column, arr) {

    let lines = arr[0];
    let final = arr[1];
    let board = [];

    for (let i = 0; i < 12; i++) {
        board.push([]);
    }

    for (let i = lines; i <= final; i++) {
        board[i][column] = 'x';
    }

    for (let i = 0; i < 12; i++) {
        let line = '';
        for (let j = 0; j < 12; j++) {
            if (board[i][j] === undefined) {
                line += '_';
            } else {
                line += board[i][j];
            }
        }
        console.log(line);
    }
}


// solution 2
function toDraw(column, arr) {

    for (let i = 0; i < 12; i++) {
        let marked = '';
        for (let j = 0; j < 12; j++) {
            if ((i >= arr[0] && i <= arr[1]) && j === column) {
                marked += 'x';
            } else {
                marked += '_';
            }
        }
        console.log(marked)
    }
}


/* 
    Faria Lima's Shoes, Sneakers and Slippers squad placed a large order for sneakers of various sizes.
    However, there was a glitch in the packaging process and not all boxes contain a correct pair,
    that is, shoes of the same size for each foot. Squad Head asked everyone to return their shoes
    in their respective boxes.

    When Head found out that you know programming, he got excited and asked you to write a
    program that forms possible pairs of shoes.

    input:

    The input consists of a list of lists, each internal list represents a lot of shoes.
    Each lot is formed by an amount N of shoes, such that 2 ≤ N ≤ 100, where N is an even integer.
    Each shoe is formed by a textual value with a number M, such that 30 ≤ M ≤ 60 separated by a space
    of an L value, being 'E' or 'D'

    output:
    Your program should return a list of integer values, where each value represents the amount
    of possible pairs in each lot respectively. Knowing that to form a possible pair the shoes
    must have the same size M and one unit with L = 'E' and another L = 'D',
    forming a pair of the same size for the left foot and another for the right foot.
    
    // --

    A squad de Sapatos, Sapatilhas e Sapatênis da Faria Lima fez um grande pedido de sapatênis de diversos tamanhos. 
    No entanto, houve uma falha no processo de empacotamento e nem todas as caixas contêm um par correto, 
    isto é, sapatênis do mesmo tamanho para cada pé. O Head da squad pediu que todos devolvessem os sapatênis 
    nas suas respectivas caixas.

    Quando o Head descobriu que você sabe programação ele ficou empolgado e solicitou que você escrevesse um 
    programa que forme pares possíveis de sapatênis.

    Entrada

    A entrada consiste em uma lista de listas, cada lista interna representa um lote de sapatênis.
    Cada lote é formado por uma quantidade N de sapatênis, tal que 2 ≤ N ≤ 100, sendo N um número inteiro par. 
    Cada sapatênis é formado por um valor textual com um número M, tal que 30 ≤ M ≤ 60 separado por um espaço 
    de um valor L, sendo 'E' ou 'D'

    Saída
    Seu programa deve retornar uma lista de valores inteiros, onde cada valor representa a quantidade 
    de pares possíveis em cada lote respectivamente. Sabendo que para formar um par possível os sapatênis
    devem ter o mesmo tamanho M e uma unidade com L = 'E' e outra L = 'D', 
    formando um par do mesmo tamanho para o pé esquerdo e outro para o pé direito.

    Ex.:

    Entrada: lst = [['40 D', '41 E', '41 D', '40 E'], ['38 E', '38 E', '40 D', '38 D', '40 D', '37 E']]
    Saída: [2, 1]
*/


// solution
function formarPar(arr) {

    const pares = []
    for (let i = 0; i < arr.length; i++) {
        let contagem = 0
        for (let j = 0; j < arr[i].length; j++) {
            const sapato = arr[i][j].split(" ")
            for (let k = j + 1; k < arr[i].length; k++) {
                const sapatoDois = arr[i][k].split(" ")
                if (sapato[0] === sapatoDois[0] && sapato[1] !== sapatoDois[1]) {
                    arr[i][j] = "ehPar"
                    arr[i][k] = "ehPar"
                    contagem++
                    break
                }
            }
        }
        pares.push(contagem)
    }
    return pares
}


// solution 2
function formarPar(arr) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {

        let batch = arr[i];
        let pair = 0;

        for (let j = 0; j < batch.length; j++) {
            let numero = batch[j].split(' ')[0]
            let pe = batch[j].split(' ')[1]
            let procuraPar;
            if (pe === 'D') {
                procuraPar = `${numero} E`;
            } else {
                procuraPar = `${numero} D`;
            }

            for (let z = j + 1; z < batch.length; z++) {
                if (batch[z] === procuraPar) {
                    pair++;
                    batch[z] = '';
                    break;
                }
            }

            pairs[i] = pair;
        }
    }
    return pairs;
}


/* 
    You and your crush have developed a revolutionary method to text chat securely,
    without Mark Zuckerberg knowing the content of the conversation. Each message is sent with a list of words
    where each word points to the next. The sentence ends when a word points to position 0.

    Prohibited
    The input consists of an integer numeric parameter I, such that 0 ≤ I ≤ length - 1 of the word list,
    which points to the position of the first word of the sentence. The second parameter is a list of words
    (size greater than or equal to 1) where each word is added with an underscore followed by a number
    integer that points to the position of the next word.

    If this number is between 0 and size-1 of the word list, then it points to the next word;
    if it is -1, it means that the current word is the last word in the sentence, which is now complete; if he goes
    greater than or equal to the size of the list, it means there is an error and there is no message to decrypt.
    There will be no cycles (eg one word points to the next, which points to the previous one again).

    Exit
    If there is an encrypted message, the output must return it, otherwise it must return the text "error".

    // --

    Você e seu crush desenvolveram um método revolucionário para conversarem via texto de modo seguro, 
    sem que o Mark Zuckerberg saiba o conteúdo da conversa. Cada mensagem é enviada com uma lista de palavras 
    onde cada palavra aponta para a próxima. A frase termina quando uma palavra aponta para a posição 0.

    Entrada
    A entrada é composta por um parâmetro numérico inteiro I, tal que 0 ≤ I ≤ tamanho - 1 da lista de palavras, 
    que aponta a posição da primeira palavra da frase. O segundo parâmetro é uma lista de palavras 
    (tamanho maior ou igual a 1) onde cada palavra é acrescida do sublinhado em seguida de um número 
    inteiro que aponta a posição da próxima palavra.

    Se esse número estiver entre 0 e tamanho-1 da lista de palavras, então ele aponta para a próxima palavra; 
    se ele for -1, significa que a palavra atual é a última da frase, que está completa agora; se ele for 
    maior ou igual ao tamanho da lista, significa que há um erro e não há mensagem para descriptografar. 
    Não haverá ciclos (por exemplo: uma palavra aponta para a próxima, que aponta para a anterior de novo).

    Saída
    Caso exista uma mensagem criptografada a saída deve retorná-la, caso contrário deve retornar o texto "erro".

    Ex.:
    Entrada: (3, ['sensacional_2', 'demais_-1', 'é_1 ', 'voce_2', 'melhor_1', 'gratidao_0'])
    Saída: "voce é demais"

    Entrada: (3, ['nao_2', 'vai_7', 'que_1 ', 'sera_2', 'melhor_1', 'gratiluz_0'])
    Saída: "erro"
*/


// solution
function decrypt(index, arr) {

    let result = "";
    let word = arr[index];
    result += word;

    for (let i = 0; i < arr.length; i++) {
        const aux = Number(word.split("_")[1])

        if (aux === -1) return sanitize(result);
        if (!arr[aux]) return "erro";

        word = arr[aux];
        result += word;
    }
    return sanitize(result);
}

const sanitize = (str) => str.replace(/_/g, " ").replace(/-/g, "").replace(/[0-9]/g, "").trim();

// solution 2
function decrypt(index, arr) {

    let msg = [];
    let next = index;

    while (next !== -1 && next < arr.length) {
        let word = arr[next].split('_')[0]
        next = Number(arr[next].split('_')[1])
        msg.push(word)
    }

    if (next >= arr.length) return 'erro';
    return msg.join(' ');
}