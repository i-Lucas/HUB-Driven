/*
    Create a function called temOposto(lst) that takes an array and checks if at some point
    we have an element that is the opposite of another element of the same array. The function must return true
    if it finds this case and false otherwise. The opposite of a number is multiplying it by -1,
    i.e. the opposite of 2 is -2 and the opposite of -5 is 5.

    Ex:
        lst = [2, 4, 5, -2] => Must return true
        lst = [2, 3, 4, 2] => Should return false
        lst = [-3, 1, 3, 8, 4, -8] => Must return true


    Crie uma função chamada temOposto(lst) que recebe uma array e verifica se em algum momento 
    temos um elemento que é o oposto de outro elemento da mesma array. A função deve retornar true 
    caso ela encontre esse caso e false caso contrário. O oposto de um número é a multiplicação dele por -1, 
    ou seja, o oposto de 2 é -2 e o oposto de -5 é 5.

    Ex:
        lst = [2, 4, 5, -2] => Deve retornar true
        lst = [2, 3, 4, 2] => Deve retornar false
        lst = [-3, 1, 3, 8, 4, -8] => Deve retornar true
*/


// solution
function temOposto(lst) {

    for (let i = 0; i < lst.length; i++) {
        for (let j = 0; j < lst.length; j++) {
            if (lst[i] * -1 === lst[j]) {
                return true
            }
        }
    }
    return false
}


/*
    Create a function called findDouble(lst), which takes a list of numbers and checks
    for each number if there is any other element in this list that has twice the value of that number.
    It must return true if this scenario exists and false otherwise.

    Ex:
        lst = [3, 2, 1] => Must return true
        lst = [5, 2, 6, 8, 4] => Must return true
        lst = [5, 7, 11] => Should return false
        lst = [ ] => Should return false
        lst = [0, 2] => Should return false


    Crie uma função chamada procuraDobrado(lst), que recebe uma lista de números e verifica 
    para cada número se existe algum outro elemento nessa lista que possuí o dobro do valor desse número. 
    Deve retornar true caso exista esse cenário e false caso contrário.
    Ex:
        lst = [3, 2, 1] => Deve retornar true
        lst = [5, 2, 6, 8, 4] => Deve retornar true
        lst = [5, 7, 11] => Deve retornar false
        lst = [ ] => Deve retornar false
        lst = [0, 2] => Deve retornar false
*/


// solution 1
function findDouble(lst) {

    if (lst.length === 0) return false
    for (let i = 0; i < lst.length; i++) {
        for (let j = 0; j < lst.length; j++) {
            if (lst[i] * 2 === lst[j]) {
                return true
            }
        }
    }
    return false
}


// solution 2
function findDouble(lst) {

    for (let i = 0; i < lst.length; i++) {
        for (let j = 0; j < lst.length; j++) {
            if (lst[i] == lst[j]) continue
            if (lst[i] == 2 * lst[j])
                return true
        }
    }
    return false
}


/*
    Create a function called checkRepeat(lst) that takes a list of numbers and
    returns a new list containing the numbers that appear more than once in the input list.

    Ex:
        lst = [1, 2, 3, 1, 2, 3, 4, 5] => Should return [1, 2, 3]
        lst = [1, 1, 1, 1, 1, 1] => Should return [1]
        lst = [1 , 2, 3, 4] => Should return [ ]
        lst = [ ] => Should return [ ]

    Crie uma função chamada verificaRepetidos(lst) que recebe uma lista de números e
    retorna uma nova lista que contém os números que aparecem mais de uma vez na lista de entrada.

    Ex:
        lst = [1, 2, 3, 1, 2, 3, 4, 5] => Deve retornar [1, 2, 3]
        lst = [1, 1, 1, 1, 1, 1] => Deve retornar [1]
        lst = [1 , 2, 3, 4] => Deve retornar [ ]
        lst = [ ] => Deve retornar [ ]
*/


// solution
function verificaRepetidos(lst) {

    let array = []
    for (let i = 0; i < lst.length; i++) {
        if (lst.indexOf(lst[i]) !== lst.lastIndexOf(lst[i])) {
            if (!array.includes(lst[i])) {
                array.push(lst[i])
            }
        }
    }
    return array
}


/*
    Create a function called lengthStrings(lst) that takes a list and checks if there are strings of the same length in that list.
    If there are strings of the same length, this function must return a new string with strings of equal length.
    concatenated and space-separated. Otherwise this function should return an empty string
    Ex:
        lst = ["house", "apartment", "door"] => Must return an empty string
        lst = ["motorcycle", "car", "pastel", "fruit"] => Should return "fruit car"
        lst = ["house", "sky", "moon", "yes", "no", "sea", "door"] => Should return "sky moon yes no sea"
        lst = [ ] => Must return an empty string


    Crie uma função chamada tamanhoStrings(lst) que recebe uma lista e verifica se existem strings do mesmo tamanho nessa lista. 
    Caso existam strings de mesmo tamanho, essa função deve retornar uma nova string com as strings de tamanho igual 
    concatenadas e separadas por espaço. Caso contrário essa função deve retornar uma string vazia
    Ex:
        lst = ["casa", "apartamento", "porta"] => Deve retornar uma string vazia
        lst = ["moto", "carro", "pastel", "fruta"] => Deve retornar "carro fruta"
        lst = ["casa", "céu", "lua", "sim", "não", "mar", "porta"] => Deve retornar "céu lua sim não mar"
        lst = [ ] => Deve retornar uma string vazia
*/


// solution
function lengthStrings(lst) {

    let a = lst.filter((item, index) => lst.indexOf(item) === index);
    let b = a.filter(item => item.length === lst[0].length);
    return b.length < 2 ? '' : b.join(' ')
}


// solution 2
function lengthStrings(lst) {

    let aux = []
    let repeated = null

    for (let i = 0; i < lst.length; i++) {
        let tam = lst[i].length
        for (let j = 0; j < lst.length; j++) {
            if (j == i) {
                continue;
            } else if (lst[j].length == tam) {
                repeated = tam
                break
            }
        }
    }
    for (let i = 0; i < lst.length; i++) {
        if (lst[i].length == repeated)
            aux.push(lst[i])
    }
    return aux.join(' ')
}


/*
    Implement the ImmediateMinorValue(arr) function that takes an array of numbers as a parameter and returns another array
     where at position i of each element of the original array must be the value immediately smaller than the original value
     found in the array. If there is no immediately lower value it must be the same value.

     Ex: [5, 10, 13, 2, 1] should return -> [2, 5, 10, 1, 1]

    Implemente a função valorImediatamenteMenor(arr) que recebe um array de números como parâmetro e retorna um outro array 
    em que na posição i de cada elemento do array original deve estar o valor imediatamente menor do que o valor original 
    encontrado na array. Se não houver valor imediatamente menor deve ser o mesmo valor.

    Ex: [5, 10, 13, 2, 1] deve retornar -> [2, 5, 10, 1, 1] 
*/


// solution
function ImmediateMinorValue(arr) {

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let menor = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < menor) {
                menor = arr[j];
            }
        }
        result.push(menor);
    }
    return result
}


/*
    Create a function called accumulatePairs(lst) that takes a list of integers and returns the sum of
     elements that appear exactly twice in the list.
     Ex:
         lst = [1, 2, 2, 3, 4, 4, 5] => Should return 12
         lst = [1, 2, 3, 4, 5] => Should return 0
         lst = [1, 1, 1, 1, 1, 1] => Should return 0
         lst = [5, 5, 5, 3, 3, 5, 5, 5] => Should return 6

    Crie uma função chamada acumulaPares(lst) que recebe uma lista de inteiros e retorna a soma dos 
    elementos que aparecem exatamente duas vezes na lista.
    Ex:
        lst = [1, 2, 2, 3, 4, 4, 5] => Deve retornar 12
        lst = [1, 2, 3, 4, 5] => Deve retornar 0
        lst = [1, 1, 1, 1, 1, 1] => Deve retornar 0
        lst = [5, 5, 5, 3, 3, 5, 5, 5] => Deve retornar 6
*/


// solution 
function accumulatePairs(lst) {
    let soma = 0;
    for (let i = 0; i < lst.length; i++) {
        let cont = 0;
        for (let j = 0; j < lst.length; j++) {
            if (lst[i] === lst[j]) {
                cont++;
            }
        }
        if (cont === 2) {
            soma += lst[i];
        }
    }
    return soma;
}