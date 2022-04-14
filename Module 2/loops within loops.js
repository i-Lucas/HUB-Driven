/*
	Create a function called sumTable(),
    which computes and returns the sum of all multiplication tables results from 1x1 to 9x9.

    For example, you will have to do all the multiplications since 1x1, 1x2, 1x3, etc.,
    going through 2x1, 2x2, 2x3, etc until reaching 9x9 and adding all the values, returning the sum at the end.

    Crie uma função chamada somaTabuada(), 
    que compute e retorne a soma de todos os resultados das multiplicações da tabuada de 1x1 até 9x9.

    Por exemplo, você terá que fazer todas as multiplicações desde 1x1, 1x2, 1x3, etc, 
    passando por 2x1, 2x2, 2x3, etc até chegar em 9x9 e somar todos os valores, retornando a soma ao final.
*/


// solution
function sumTable() {

    let soma = 0;
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            soma += i * j;
        }
    }
    return soma;
}


/*
	Create a function called printSequences(num),
    which receives a number representing the total lines and prints all strings
    using nested loops following the following format:

    Ex:
    printSequences(9), it should print:

        '1'
        '12'
        '123'
        '1234'
        ...
        ...
        '123456789'

    Crie uma função chamada imprimeSequencias(num), 
    que recebe um número representando o total de linhas e imprime todas as strings 
    usando loops aninhados seguindo o seguinte formato:
*/


// solution
function printSequences(num) {

    let sequencia = '';
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            sequencia += j;
        }
        console.log(sequencia);
        sequencia = '';
    }
}


/*
	Make a function called allSubstrings(str),
    which receives a string of a word and must return a list containing all possible substrings with the letters of that word.
    Order is not evaluated in tests.

    Ex:
        str = 'test' => Should return ['t', 'e', 's', 't', 'te', 'es', 'st', 'tes', 'est', 'test']
        str = 'baba' => Should return ['b', 'a', 'b', 'a', 'ba', 'ab', 'ba', 'bab', 'aba', 'baba']

    Faça uma função chamada allSubstrings(str), 
    que recebe uma string de uma palavra e deve retornar uma lista contendo todas as subtrings possíveis com as letras dessa palavra. 
    A ordem não é avaliada nos testes.
*/


// solution
function allSubstrings(str) {

    let result = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            result.push(str.slice(i, j + 1));
        }
    }

    return result;
}


/*
	Create a function called printList(num) that takes a number and prints a number of lines
    equal to the input parameter, descending, up to 1.

    Ex:
    printAi(4) should print:

        4 3 2 1
        3 2 1
        2 1
        1

    Crie uma função chamada printList(num) que recebe um número e imprime um número de linhas 
    igual ao parâmetro de entrada, de modo decrescente, até 1.
*/


// solution
function printList(num) {

    let array = []
    for (let i = 1; i <= num; i++) {
        array.push(i)
    }

    array.reverse()
    while(array.length > 0) {
        console.log(array.join(' '))
        array.shift()
    }
}


/*
	Creates the function called printPattern(numLinhas), which receives a number and prints,
    ascending from number 1 to number received, then descending to number 1.

    Ex:
    printPattern(5) should printkey: "value", 

        1
        1 2
        1 2 3
        1 2 3 4
        1 2 3 4 5
        1 2 3 4
        1 2 3
        1 2
        1

    Cria a função chamada imprimePadrao(numLinhas), que recebe um número e imprime, 
    de modo crescente a partir do número 1 até o número recebido, em seguida, de modo decrescente, até o número 1.
*/


// solution 1
function printPattern(row) { 

    let array = []

    for(let i = 0; i < row; i++) {
        array.push(i + 1)
        console.log(array.join(' '))
    }
    while(array.length > 0) {
        array.pop()
        console.log(array.join(' '))
    }
}


// solution 2
function printPattern(row) {

    for (let i = 1; i <= row; i++) {
        let lst = [];
        for (let j = 1; j <= i; j++) {
            lst.push(j);
        }
        console.log(lst.join(" "));
    }
    for (let i = row - 1; i >= 1; i--) {
        let lst = [];
        for (let j = 1; j <= i; j++) {
            lst.push(j)
        }
        console.log(lst.join(" "))
    }
}


/*
	Create a function called printTable() that prints the multiplication table, from 1 to 9, of all numbers.
    Ex: printTable() should print:
   
    1 x 1 = 1
    1 x 2 = 2
    1 x 3 = 3
    ...
    ...
    9 x 8 = 72
    9 x 9 = 81

    Crie uma função chamada imprimeTabuada() que imprime a tabuada, a partir do 1 até o 9, de todos os números.
*/


// solution
function printTable() {

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            console.log(`${i} x ${j} = ${i * j}`)
        }
    }
}


/*
	Create a function called tableTable(), which prints the tables values, from 1 to 10, following the following matrix pattern:
    Ex: tableTable() should print:

    1 2 3 ... ...9 10
    2 4 8 ... ...18 20
    3 6 9 ... ... 27 30
    ... ... .... ... ... ....
    ... ... .... ... ... ....
    9 18 27 ...81 90
    10 20 30...90 100

    Crie a função chamada tabelaTabuada(), que imprime os valores da tabuadas, de 1 a 10, seguindo o seguinte padrão de matriz:
*/


// solution
function tableTable() {

    let array = []

    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            array.push(i * j)
        }
        console.log(array.join(' '))
        array = []
    }
}


/*
	Make the function on the side create a plane of asterisks like the one in the figure below:
    Where there are 25 rows, and each column is represented by two asterisks ('**' => one column),
    totaling 50 asterisks per line. Do not change the constants.

    Faça a função ao lado criar um plano de asteriscos como o da figura abaixo:
    Onde existem 25 linhas, e cada coluna é representada por dois asteriscos ('**' => uma coluna), 
    totalizando 50 asteriscos por linha. Não altere as constantes.
*/


// solution
function printX() {

    const xSize = 25;
    const ySize = 25;

    for (let i = 0; i < xSize; i++) {
        for (let j = 0; j < ySize; j++) {
            console.log('**')
        }
        console.log('\n')
    }
}