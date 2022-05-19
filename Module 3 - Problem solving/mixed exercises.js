/*
    Write a function called createMatrix(num), which takes a positive integer and creates an array following the pattern:
    For the tests your function must return the array correctly, and being an array structure of arrays.

    Escreva uma função chamada criaMatriz(num), que recebe um inteiro positivo e cria uma matriz seguindo o padrão:
    Para os testes sua função must return a matriz corretamente, e sendo uma estrutura de array de arrays.

    Ex: 

    n = 1 -> [1]

    n = 2 -> [1   2]
             [2   4]

    n = 3 -> [1   2   4]
             [2   4   8]
             [4   8   16]

    n = 4 -> [1   2   4   8]
             [2   4   8   16]
             [4   8   16  32]
             [8   16  32  64]
*/


// solution
function createMatrix(n) {

    if (n == 0) return;

    let row = []
    for (let i = 0; i < n; i++) { row.push(2 ** i) }

    let matrix = []
    for (let i = 0; i < n; i++) {

        matrix.push(row)
        row = row.map(item => item * 2)
    }

    return matrix;
}


/*
    Create a function called tresMinor(lst), which takes a list of integers
    positive and returns a new list with the lowest three numbers in the input list.
    The input list will always be size 3 or greater.

    Crie uma função que se chama tresMenores(lst), que recebe uma lista de números inteiros 
    positivos e retorna uma nova lista com os três menores números da lista de entrada. 
    A lista de entrada sempre terá tamanho 3 ou maior.

    Ex:
        lst = [3, 2, 5, 6, 2, 3, 4, 1] => must return [1, 2, 2]
        lst = [115, 105, 106, 3, 109, 115] => must return [3, 105, 106]
        lst = [1, 1, 1, 1, 2, 2, 3, 3] => must return [1, 1, 1]
*/


// solution
function threeMinors(lst) {

    let result = [];

    for (let i in lst) {

        result.push(lst[i]);
        result = result.sort((a, b) => a - b);
        result = result.slice(0, 3);
    }

    return result;
}


/*
    Create a function called contaStrings(lst), which takes an array of arrays and for each inner array checks
    the number of strings that exist in this inner array.
    It should return a new list with the string count of each internal array.
    Each inner array can contain any type of element.

    Crie uma função chamada contaStrings(lst), que recebe uma array de arrays e para cada array interna verifica
    a quantidade de strings que existem nessa array interna. 
    must return uma nova lista com a contagem das strings de cada array interna. 
    Cada array interna pode conter qualquer tipo de elemento.

    Ex:
        lst = [ [1, 2.3, 'a'], ['a', 'b', 'c', 'd', 'e'], [ 1, 2, 3, 4], [ 'ar', 'flor', undefined] ] => [1, 5, 0, 2]
        lst = [ ['céu', 4, 20], [ ], ['nave espacial'] ] => must return [1, 0, 1]
*/


// solution
function countStrings(lst) {

    return lst.map(function (arr) {
        return arr.filter(function (elem) {
            return typeof elem === 'string';
        }).length;
    });
}


/*
    Create a function called greaterthan(x, lst)
    which takes two parameters: the first is a number and the second is a list of numbers.
    From the number received as input, your function must traverse the input list and return an array
    that contains all numbers greater than or equal to x found in lst.
    If there are no numbers greater than or equal to x, it must return an empty array.

    Crie uma função chamada maiorQue(x, lst)
    que recebe dois parâmetros: o primeiro é um número e o segundo é uma lista de números. 
    A partir do número recebido como entrada, sua função deve atravessar a lista de entrada e retornar uma array 
    que contenha todos os números maiores ou iguais a x, encontrados em lst. 
    Caso não existam números maiores ou iguais a x, must return uma array vazia.

    Ex:
        x = 15, lst = [ 10, 16, 9, 15, 2, 20] => must return [16, 15, 20]
        x = 0, lst = [5, 4, -2, 4, 2, -6, 3] => must return [5, 4, 4, 2, 3]
        x = 30, lst = [3, 4, 2, 5, 23, 5] => must return [ ]
*/


// solution
function greaterthan(x, lst) {

    let result = [];

    for (let i in lst) {
        if (lst[i] >= x) { result.push(lst[i]) }
    }

    return result;
}


/*
    Create a function called sortStrings(arr), which takes an array of strings, and returns that array
    sorted in ascending order of size and with words of the same size sorted in alphabetical order.

    Crie uma função chamada ordenaStrings(arr), que recebe uma array de strings, e retorna essa array 
    ordenada por ordem crescente de tamanho e com palavras de mesmo tamanho ordenadas em ordem alfabética.

    Ex:
        arr = ['abcd', 'abc', 'cba', 'dcba', 'dabc', 'b', 'c'] => must return ['b', 'c', 'abc', 'cba', 'abcd', 'dabc', 'dcba']
        arr = ['casa', 'mesa', 'mar', 'noite'] => must return ['mar', 'casa', 'mesa', 'noite']
*/


// solution
function sortStrings(arr) {

    return arr.sort((a, b) => {

        if (a.length > b.length) {
            return 1;

        } else if (a.length < b.length) {
            return -1;

        } else {
            return a.localeCompare(b);
        }
    });
}


/*
    Create a function called stopAtDouble(lst), which takes a list of non-negative integers and iterates
    through this list while summing the elements until it reaches the end, or until it finds an element that has a value
    which is twice the index that this element occupies (in the latter case, this element does not enter the sum).
    The function returns the calculated sum.

    Crie uma função chamada paraNoDobro(lst), que recebe uma lista de números inteiros não-negativos e itera 
    por essa lista enquanto soma os elementos até chegar ao final, ou até encontrar um elemento que possui um valor 
    que é o dobro do índice que esse elemento ocupa (nesse último caso, esse elemento não entra na soma). 
    A função retorna a soma calculada.

    Ex:

        lst = [0, 5, 6, 7] => must return 0
        lst = [ ] => must return 0
        lst = [1, 2, 3, 5] => must return 1
        lst = [9, 0, 1, 3, 7,10, 9, 8] => must return 20
*/


// solution
function stopAtDouble(lst) {

    let sum = 0;
    for (let i in lst) {

        if (lst[i] == i * 2) {
            return sum;
        }
        sum += lst[i];
    }
    return sum;
}


/*
    Create a function called secondaryproducer(mat) that takes an array of arrays,
    which will always represent a square matrix. This function must be able to calculate
    the product of the elements on the secondary diagonal of this array.

    Crie uma função chamada produtorioSecundario(mat) que recebe uma array de arrays, 
    que sempre representará uma matriz quadrada. Essa função deve ser capaz de calcular
    o produto dos elementos na diagonal secundária dessa array.
*/


// solution 1
function secondaryProducer(mat) {

    const x = mat.length
    let prod = 1
    for (let i = 0; i < mat.length; i++) {
        prod *= mat[i][x - 1 - i]
    }
    return prod
}


// solution 2
function secondaryProducer(mat) {

    let prod = 1
    for (let i = 0; i < mat.length; i++) {
        let reversed = mat[i].reverse()
        prod *= reversed[i]
    }
    return prod;
}


/*
    Create a function called biggestNoEnd(str), which takes a string composed of separate words
    each other by a single single whitespace, finds the longest word in that string
    and swaps that position word with the last word of the string.

    Crie uma função chamada maiorNoFim(str), que recebe uma string composta por palavras separadas 
    entre si por um único espaço em branco simples, encontra a maior palavra dessa string
    e troca essa palavra de posição com a última palavra da string.

    Ex:
        str = "a paralelepipedo palavra maior" => must return "a maior palavra paralelepipedo"
        str = "abc aa aabbcc aabb aac" => must return "abc aa aac aabb aabbcc"
        str = "" => must return ""
*/


// solution
function biggestInEnd(str) {

    let arr = str.split(" ");
    let bigger = 0;
    let position = 0;

    for (let i in arr) {
        if (arr[i].length > bigger) {
            bigger = arr[i].length;
            position = i;
        }
    }

    let aux = arr[arr.length - 1];
    arr[arr.length - 1] = arr[position];
    arr[position] = aux;
    return arr.join(" ");
}


/*
    Create a function called ancestors(lst) that takes a list of integers and should return a new one
    list containing the predecessor of each element of the original list.
    Attention: the original list cannot be modified!

    Crie uma função chamada antecessores(lst) que recebe uma lista de inteiros e must return uma nova 
    lista contendo o antecessor de cada elemento da lista original. 
    Atenção: a lista original não pode ser modificada !

    Ex:
        lst = [3, 4, 5] => must return [2, 3, 4]
        lst = [-1, -2] => must return [-2, -3]
        lst = [ ] => must return [ ]
*/


// solution
function ancestors(lst) {

    let newList = [];
    for (let i in lst) {
        newList.push(lst[i] - 1);
    }
    return newList;
}


/*
    Create a function called checkRepeat(lst), which takes a list of numbers and checks
    if any value is repeated in this list. If there are repeated values, return true, otherwise false.

    Crie uma função chamada verificaRepetidos(lst), que recebe uma lista de números e verifica
    se algum valor se repete nessa lista. Caso existam valores repetidos, retorne true, em caso contrário false.

    Ex:
        lst = [1, 2, 3, 2, 5, 6] => must return true
        lst = [1, 2, 3, 4, 5, 6] => must return false
        lst = [1] => must return false
        lst = [ ] => must return false
*/


// solution
function checkRepeat(lst) {

    for (let i = 0; i < lst.length; i++) {

        let elm = lst[i]

        for (let j = i + 1; j < lst.length; j++) {

            if (elm == lst[j]) {
                return true
            }
        }
    }

    return false
}


/*
    Create a function called createArray(num). This function should create an array of size 15.
    Then you must fill the first position of this array with the input parameter,
    and in all subsequent positions insert half of the previous value
    (may be broken number, do not do any rounding).

    // --

    Crie uma função chamada criaArray(num). Essa função deve criar uma array de tamanho 15. 
    Em seguida deve preencher a primeira posição desse array com o parâmetro de entrada, 
    e em todas as posições seguintes inserir metade do valor anterior 
    (poderá ser número quebrado, não faça nenhum arredondamento).

    Ex: num = 100 000 => must return [100 000, 50 000, 25 000, 12 500, 7250, ..., ]
*/


// solution
function createArray(num) {

    let array = [];
    array[0] = num;

    for (let i = 1; i < 15; i++) {
        array[i] = array[i - 1] / 2;
    }

    return array;
}


/*
    Create a function called arrayHash(arr).

    This function will receive an array composed of strings.
    All strings in the same test case have the same length.
    All strings are made up of up to 30 uppercase letters in the range A-Z.
    The value that each letter will represent for us will be calculated by the formula:

        Value = (Alphabet Position) + (Element Position) + (Input Position)

    All positions are calculated from 0. Letter 'A' has value 0, letter 'B' has value 1, ...
    Your function should return the sum value to the input array.

    // --

    Crie uma função chamada arrayHash(arr).

    Essa função vai receber uma array composta por strings.
    Todas as strings em um mesmo caso de teste têm o mesmo tamanho.
    Todas as strings são compostas de até 30 letras maiúsculas no intervalo de A-Z.
    O valor que cada letra representará para gente será calculado pela fórmula:

        Valor = (Posição no Alfabeto) + (Posição do Elemento) + (Posição no Input)

    Todas as posições são calculadas a partir do 0. A letra 'A' tem valor 0, a letra 'B' tem valor 1, ...
    Sua função deve retornar o valor da soma para a array de entrada.

    Ex:
        arr = ['CBA', 'DDD'], cada caracter poderia ser computado da seguinte forma:

    Valor = (Posição no Alfabeto) + (Posição do Elemento) + (Posição da String)

        2 = 2 + 0 + 0 : 'C' tem valor 2, está na posição 0, da string 0
        2 = 1 + 1 + 0 : 'B' tem valor 1, está na posição 1, da string 0
        2 = 0 + 2 + 0 : 'A' tem valor 0, está na posição 2, da string 0
        4 = 3 + 0 + 1 : 'D' tem valor 3, está na posição 0, da string 1
        5 = 3 + 1 + 1 : 'D' tem valor 3, está na posição 1, da string 1
        6 = 3 + 2 + 1 : 'D' tem valor 3, está na posição 2, da string 1

    Para esse exemplo, o retorno deveria ser 2+2+2+4+5+6 = 21
    For this example, the return should be 2+2+2+4+5+6 = 21
*/


// solution
function arrayHash(arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {
            let charValue = arr[i].charCodeAt(j) - 65
            sum += charValue + j + i
        }
    }

    return sum;
}


/*
    Create a function called fib(n), which takes a number and returns the nth value of the Fibonacci sequence.
    Consider fib(0) = 0 and fib(1) = 1.

    Crie uma função chamada fib(n), que recebe um número e retorna o n-ésimo valor da sequência de Fibonacci. 
    Considere fib(0) = 0 e fib(1) = 1.
*/


// solution
function fib(n) {

    if (n == 0 || n == 1) return n;
    if (n == 2) return 1;

    let arr = [1, 1];
    let sum = 1;

    for (let i = 1; i < arr.length && i < n - 1; i++) {
        sum += arr[i - 1]
        arr.push(sum)
    }

    return arr[arr.length - 1]
}


/*
    Create the fixBug(str) function, which receives a sentence that is written 'from the inside out'
    and must turn it into the correctly written sentence.
    You can assume that the input will always be an even-length string.

    // --

    Crie a função consertaBug(str), que recebe uma frase que está escrita 'de dentro para fora' 
    e deve transformá-la na frase escrita de forma correta.
    Você pode considerar que a entrada vai ser sempre uma string de tamanho par.

    Ex:
        str = "CBAFED" => Deve retornar "ABCDEF"
        srr = "asaCaL lepaPeD" => Deve retornar "LaCasaDePapel "
*/


// solution
function fixBug(str) {

    let a = str.slice(0, str.length / 2)
    let b = str.slice(str.length / 2)

    a = a.split("").reverse().join("")
    b = b.split("").reverse().join("")

    return a + b
}


/* 
    A teacher, after finishing the correction of the class tests, wants your help to analyze the students' grades.
    He wants to find out what the most common grade is among students on his latest exam. All grades are integers between 0 and 100 (inclusive)
    If there is more than one most frequent grade, you must return the highest grade (among the most frequent).

    // --

    Um professor, após terminar a correção das provas da turma, quer a sua ajuda para analisar as notas dos alunos.
    Ele quer descobrir qual é a nota mais comum entre os alunos na sua última prova. Todas as notas são inteiros entre 0 e 100 (inclusive)
    Se existir mais de uma nota mais frequente, você deve retornar a maior nota (entre as mais frequentes).

    Ex:
        lst = [20, 80, 80, 10, 20] => should return 80
        lst = [20, 25, 85, 40, 25, 90, 25, 40, 55, 40] => should return 40
        lst = [10, 10, 10, 40, 40, 5, 5, 5] => should return 10

*/


// solution
function mostFrequent(lst) {

    let counts = {};

    lst.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    let arr = Object.keys(counts).map(function (x) { return [x, counts[x]]; });
    let result = arr.reduce(function (a, b) { return a[1] > b[1] ? a : b; })[0];

    return parseInt(result);
}


/*
    Galopeira music is a great classic of the sertanejo and for decades has challenged the best lungs in a true breath test.
    Based on accurate measurements, they came to the conclusion that each sung letter takes exactly 1/100 second and each letter "e" takes 5/100.
    Knowing this, make a program that measures the time, in seconds, of the classic chorus.

    Input: Input is text with at least nine letters and up to 1000 letters.
    Output: Output is the total time in seconds, to two decimal places, spent on all letters.

    // --

    A música Galopeira é um grande clássico do sertanejo e há décadas desafia os melhores pulmões numa verdadeira prova de fôlego. 
    Com base em medições precisas, chegaram à conclusão que cada letra cantada demora exatos 1/100 segundos e cada letra "e" demora 5/100. 
    Sabendo disso faça um programa que mede o tempo, em segundos, do clássico refrão.

    Entrada: A entrada é um texto com pelo menos nove letras e até 1000 letras.
    Saída: Saída é o tempo total em segundos, com duas casas decimais, gasto em todas as letras.

    Ex.:
        Input: galopeeeeeeeeeeeeeeeeeira
        Output: 0.93

        Input: galopeira
        Output: 0.13
*/


// solution
function musicTime(str) {

    let result = 0;

    for (let i in str) {
        str[i] === 'e' ? result += 5 / 100 : result += 1 / 100;
    }

    return Number(total.toFixed(2));
}


/*
    John wants to assemble a panel containing a number made of LEDs.
    He doesn't have many LEDs and he needs to know how many LEDs it will take for him to assemble the number he wants.
    Help John by setting up an algorithm that from a non-negative integer input and considering the configuration of each number below,
    calculate the minimum number of LEDs needed for João to assemble his panel.

    // --

    João quer montar um painel contendo um número feito de LEDs.
    Ele não tem muitos LEDs e ele precisa saber quantos LEDs serão necessários para ele montar o número que deseja.
    Ajude João montando um algoritmo que a partir de um número inteiro não-negativo de entrada e considerando a configuração de cada número abaixo, 
    calcule o número minimo de LEDs necessários para que João consiga montar seu painel.

    Ex:
        num = 15 => Deve retornar 7
        num = 115 => Deve retornar 9
        num = 115380 => Deve retornar 27
*/


// solution
function countLeds(num) {

    let str = num + ''
    let result = 0
    let data = { 0: 6, 1: 2, 2: 5, 3: 5, 4: 4, 5: 5, 6: 6, 7: 3, 8: 7, 9: 6 }

    for (let i in str) {

        let keys = Object.keys(data)
        if (keys.includes(str[i])) result += data[str[i]]
    }

    return result
}


/*
    Your mother gave you a shopping list to pick up at the local grocery store, and she was very clear that you should bring all the items on the list,
    or as many of them as possible in order of priority. To give you an incentive, she said you could keep the change.
    Excited at the idea of ​​buying everything in bullets, you accept the quest.
    Arriving at the grocery store, you discover that your mother had called moments before and passed the shopping list to the attendant,
    who wrote down the prices of each product on a list, following the order dictated by her mother.

    At that moment, you realize that maybe there won't be any change and you have the brilliant idea of ​​creating a program that checks this possibility for you,
    so whenever your mother asks you to go to the market again you can check if you have any change left.

    Your program should receive two lists, the first with purchase items, the second with prices following the order of the items on the shopping list,
    and finally the value of the money received. Your program will display the list of items purchased with the given value.
    Item prices and total money may be broken values ​​(eg 3.5), but will be positive. The shopping list will always have at least 1 item.

    // ----

    Sua mãe passou uma lista de compras para ir buscar no mercadinho do bairro, e ela foi bem clara que você deveria trazer todos os itens da lista, 
    ou o máximo possível deles seguindo a ordem de prioridade. Para te dar um incentivo, ela disse que o troco poderia ficar para você. 
    Empolgado com a ideia de comprar tudo em balas, você aceita a missão. 
    Chegando no mercadinho, você descobre que sua mãe havia ligado momentos antes e passado a lista de compras para o atendente, 
    que anotou os preços de cada produto em uma lista, seguindo a ordem ditada por sua mãe.

    Nesse momento, você percebe que talvez não haverá troco e tem a brilhante ideia de criar um programa que verifica essa possibilidade para você, 
    assim sempre que sua mãe pedir novamente para que você vá ao mercado você poderá verificar se irá sobrar um troco.

    Seu programa deve receber duas listas, a primeira de ítens de compra, a segunda com os preços seguindo a ordem dos ítens da lista de compras,
    e por fim o valor do dinheiro recebido. Seu programa irá mostrar a lista de ítens comprados com o valor dado. 
    Os preços dos ítens e dinheiro total podem ser valores quebrados (ex: 3.5), mas serão positivos. A lista de compras sempre terá pelo menos 1 item.

    Ex: list = ['detergente', 'sal', 'macarrao', 'pao']; precos = [3.00, 1.00, 4.0, 12.0] ;total = 9 => Deve retornar ['detergente, 'sal', 'macarrao']

*/


// solution
function shoppingList(lista, precos, total) {

    let result = [];
    let sum = 0;

    for (let i in lista) {

        sum += precos[i];
        if (sum > total) break;
        result.push(lista[i]);
    }

    return result;
}

/*
    Um professor de geologia reparou que em um determinado terreno, a cada 100 metros ele encontrava um cume e exatamente 
    no meio entre dois cumes se encontrava um vale. Isso significa que a cada 50 metros terá um vale ou um cume e durante todo 
    o terreno não existe nenhum cume seguido por outro cume, nem nenhum vale seguido por outro vale.

    Esse professor ficou curioso com esse padrão e gostaria de saber se ele ocorre em outros terrenos. 
    Sua tarefa é: dada uma array representando um outro terreno, indicar se esse terreno possuí ou não esse padrão.

    A array é composta por diversos números inteiros que representam as alturas medidas a cada 50 metros. 
    Uma medida é considerada cume se é maior que a medida anterior e é considerada vale se é mais baixa que a anterior.

    Sua função deve retornar true, caso exista o padrão na array, e false, caso contrário

    Ex:
        arr = [1, 4, -2] => Deve retornar true
        arr = [100, 99, 112, -8, -7] => Deve retornar true
        arr = [1, 2, 2, 1] => Deve retornar false
        arr = [ ] => Deve retornar false
        arr = [2, 1] => Deve retornar true
        arr = [1, 2] => Deve retornar true
        arr = [ 4 ] => Deve retornar false
*/


// solution
function hasPattern(arr) {

    // undefined

}