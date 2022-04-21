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

    return lst.map(function(arr) {
        return arr.filter(function(elem) {
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
    Caso não existam números maiores ou iguais a x, deve retornar uma array vazia.

    Ex:
        x = 15, lst = [ 10, 16, 9, 15, 2, 20] => Deve retornar [16, 15, 20]
        x = 0, lst = [5, 4, -2, 4, 2, -6, 3] => Deve retornar [5, 4, 4, 2, 3]
        x = 30, lst = [3, 4, 2, 5, 23, 5] => Deve retornar [ ]
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
        arr = ['abcd', 'abc', 'cba', 'dcba', 'dabc', 'b', 'c'] => Deve retornar ['b', 'c', 'abc', 'cba', 'abcd', 'dabc', 'dcba']
        arr = ['casa', 'mesa', 'mar', 'noite'] => Deve retornar ['mar', 'casa', 'mesa', 'noite']
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

        lst = [0, 5, 6, 7] => Deve retornar 0
        lst = [ ] => Deve retornar 0
        lst = [1, 2, 3, 5] => Deve retornar 1
        lst = [9, 0, 1, 3, 7,10, 9, 8] => Deve retornar 20
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
        str = "a paralelepipedo palavra maior" => Deve retornar "a maior palavra paralelepipedo"
        str = "abc aa aabbcc aabb aac" => Deve retornar "abc aa aac aabb aabbcc"
        str = "" => Deve retornar ""
*/


// solution
function biggestInEnd(str) {

    let arr = str.split(" ");
    let bigger = 0;
    let position = 0;

    for (let i in arr ) {
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

    Crie uma função chamada antecessores(lst) que recebe uma lista de inteiros e deve retornar uma nova 
    lista contendo o antecessor de cada elemento da lista original. 
    Atenção: a lista original não pode ser modificada !

    Ex:
        lst = [3, 4, 5] => Deve retornar [2, 3, 4]
        lst = [-1, -2] => Deve retornar [-2, -3]
        lst = [ ] => Deve retornar [ ]
*/


// solution
function ancestors(lst) {

    let newList = [];
    for (let i in lst ) {
        newList.push(lst[i] - 1);
    }
    return newList;
}