/*
    Make the sumPeers(list) function, which takes a list and sums all the numbers that are even in that list, returning the sum afterwards.
     Ex: list = [5,6,2,7,9,10] => Must return 18

    Faça a função somaPares(lista), que recebe uma lista e soma todos os números que forem pares dessa lista, retornando a soma em seguida.
    Ex: lista = [5,6,2,7,9,10] => Deve retornar 18
*/


// solution
function sumPeers(l) {

    let x = 0

    for (let i = 0; i < l.length; i++) {
        let a = l[i]
        if (a % 2 === 0) {
            x += a
        }
    }
    return x
}


// alternative solution
function sumPeers(l) {

    let r = 0

    l.forEach(number => {
        if (number % 2 === 0) {
            r += number
        }
    })
    return r
}


/*
    Make the sumIntegers(list) function, which takes a list and sums the integers that are found in that list.
    Ex: list = ["abc", [ ], ["No"], 2, 4, 2.5, "car", 2.5, 1] => Should return 7

    Faça a função somaInteiros(lista), que recebe uma lista e soma os números inteiros que forem encontrados nessa lista.
    Ex: lista = ["abc", [ ], ["Não"], 2, 4, 2.5, "carro", 2.5, 1] => Deve retornar 7
*/


// solution
function sumIntegers(list) {

    let r = 0

    for (let i = 0; i < lista.length; i++) {
        let e = lista[i]

        if (!isNaN(e)) {
            if (parseInt(e) == parseFloat(e)) {
                r += e
            }
        }
    }

    return r
}


// alternative solution
function sumIntegers(list) {

    let r = 0

    list.forEach(number => {
        if(typeof(number) === 'number' && number % 1 === 0) {
            r += number
        }
    })

    return r
}


/*
    Make a function called convertAndSum(lst), this function takes a list that contains numeric strings,
    and must return the value relative to the sum of the numbers in these strings.

    Ex:
        lst = ["15", "5", "10"] => Should return 30
        lst = ["5.5", "6.5", "12"] => Should return 24


    Faça uma função chamada convertAndSum(lst), essa função recebe uma lista que contém strings numéricas, 
    e deve retornar o valor relativo a soma dos números nessas strings.

    Ex:
        lst = ["15", "5", "10"] => Deve retornar 30
        lst = ["5.5", "6.5", "12"] => Deve retornar 24
*/


// solution
function convertAndSum(lst) {

    let x = 0

    for (let i = 0; i < lst.length; i++) {
        let e = lst[i]

        e = parseFloat(e)
        x += e
    }
    return x
}


// alternative solution
function convertAndSum(lst) {

    let r = 0

    lst.forEach(element => {
        element = parseFloat(element)
        r += element
    })

    return r
}


/*
    Write a function called product(lst), which takes a list of numeric values and should return the product of the elements in the list.
    Ex: lst = [3, 3, 2] => Should return 18

    Escreva uma função chamada produto(lst), que recebe uma lista de valores numéricos e deve retornar o produto dos elementos da lista.
    Ex: lst = [3, 3, 2] => Deve retornar 18     
*/


// solution
function product(lst) {

    let x = 1

    for (let i = 0; i < lst.length; i++) {
        let e = lst[i]
        x *= e
    }

    return x
}


// alternative solution
function product(lst) {

    let r = 1
    lst.forEach(element => {
        r *= element
    })

    return r
}



/*
    Create a function called productEvenNumbers(lst), which takes a list of integers and accumulates into a variable
    the product of the even numbers found in this list. Return the value of this variable. If there are no even numbers, return -1.

    Ex:
        lst = [3, 1, 2, 4, 5] => Should return 8
        lst = [1, 1, 1, 3] => Should return -1


    Crie uma função chamada productEvenNumbers(lst), que recebe uma lista de números inteiros e acumula em uma variável 
    o produto dos números pares encontrados nessa lista. Retorne o valor dessa variável. Caso não existam números pares retorne -1.

    Ex:
        lst = [3, 1, 2, 4, 5] => Deve retornar 8
        lst = [1, 1, 1, 3] => Deve retornar -1
*/


// solution
function productEvenNumbers(lst) {

    let x = 1, p = false

    for (let i = 0; i < lst.length; i++) {
        let e = lst[i]
        if (e % 2 === 0) {
            x *= e
            p = true
        }
    }

    return p === true ? x : -1
}


// alternative solution
function productEvenNumbers(lst) {

    let r = 1, x = false

    lst.forEach(number => {
        if(number % 2 === 0) {
            r *= number
        }
    })

    return r !== 1 ? r : -1
}



/*
    Create a function called accumulateString(lst), which takes a list of strings and accumulates those strings into a single string
    separating one element from another by a space.
        Ex: lst = ["Bee", "blue", "buzzing", "in the sea"] => Should return "Blue bee buzzing in the sea";


    Crie uma função chamada acumulaString(lst), que recebe uma lista de strings e acumula essas strings em uma única string
    separando um elemento do outro por um espaço.
        Ex: lst = ["Abelha", "azul", "zumbindo", "no mar"] => Deve retornar "Abelha azul zumbindo no mar";
*/


// solution
function accumulateString(lst) {

    let a = []

    for (let i = 0; i < lst.length; i++) {
        let e = lst[i]
        a.push(e)
    }
    return a.join(' ')
}


// alternative solution
function accumulateString(lst) {

    let a = []

    lst.forEach(element => {
        a.push(element)
    })

    return a.join(' ')
}


/*
    Make a function called accumulateVowels(lst), which receives a list containing strings of a single character each,
    and accumulate in a string all the vowels in that list. Return the string of accumulated variables.
    Ex:
        lst = ["u", "r", "u", "b", "u"] => Should return "uuu"
        lst = ["a", "z", "e", "i", "t", "o", "u"] => Should return "aeiou"
        lst = ["v", "l", "w"] => Should return ""


    Faça uma função chamada acumulaVogais(lst), que recebe uma lista contendo strings de um único caracter cada, 
    e acumule em uma string todas as vogais dessa lista. Retorne a string das variáveis acumuladas.
    Ex:
        lst = ["u", "r", "u", "b", "u"] => Deve retornar "uuu"
        lst = ["a", "z", "e", "i", "t", "o", "u"] => Deve retornar "aeiou"
        lst = ["v", "l", "w"] => Deve retornar ""
*/


// solution
function accumulateVowels(lst) {

    let v = ['a', 'e', 'i', 'o', 'u']
    let g = ''

    for (let i = 0; i < lst.length; i++) {
        let e = lst[i]

        for (let x = 0; x < v.length; x++) {
            if (e === v[x]) {
                g += e
            }
        }
    }

    return g
}


function accumulateVowels(lst) {

    let v = ['a', 'e', 'i', 'o', 'u'], a = []

    lst.forEach(char => {
        v.forEach(vowel => {
            if(char === vowel) {
                a.push(char)
            }
        })
    })

    return a.join('')
}


/*
    Write a function called justLetters(lst), which takes a list of strings, and takes only those strings that are made up of 1 character.
    It must accumulate these letters in a variable and return the word formed by them.
    Ex:
        lst = ['A', 'm', 'mar', 'car', 'o', 'pain', 'r'] => Should return 'Love'
        lst = ['plane', 'dream', 'SOUND', 'blue'] => Should return ''

    Escreva uma função chamada apenasLetras(lst), que recebe uma lista de strings, e pega apenas as strings que são compostas por 1 caracter. 
    Ela deve acumular essas letras em uma variável e retornar a palavra formada por elas.
    Ex:
        lst = ['A', 'm', 'mar', 'carro', 'o', 'dor', 'r'] => Deve retornar 'Amor'
        lst = ['avião', 'sonho', 'SOM', 'azul'] => Deve retornar ''
*/


// solution
function justLetters(lst) {

    let b = ''

    for (let i = 0; i < lst.length; i++) {
        let e = lst[i]

        if (e.length === 1) {
            b += e
        }
    }

    return b
}


// alternative solution
function justLetters(lst) {

    let a = []

    lst.forEach(char => {
        if(char.length === 1) {
            a.push(char)
        }
    })

    return a.join('')
}


/*
    Create a function called deltaPN(lst), which takes a list of numbers and should accumulate in a variable
    all positive numbers in this list and in another variable the negative numbers.
    The function must take the absolute values of these variables, and return the difference between the accumulated in the variable
    of positive numbers and the variable of negative numbers.

    Tip: To get an absolute value of a variable you can use the Math tool

    Example:
        lst = [-2, 5, -2] => Should return 1
        lst = [2, -5, 2] => Should return -1


    Crie uma função chamada deltaPN(lst), que recebe uma lista de números e deve acumular em uma variável 
    todos os números positivos dessa lista e em outra variável os números negativos. 
    A função deve pegar os valores absolutos dessas variáveis, e retornar a diferença entre o acumulado na variável 
    dos números positivos e a variável dos números negativos.

    Dica: Para pegar um valor absoluto de uma variável você pode utilizar a ferramenta Math

    Exemplo:
        lst = [-2, 5, -2] => Deve retornar 1
        lst = [2, -5, 2] => Deve retornar -1
*/


// solution
function deltaPN(lst) {

    let p = 0, n = 0

    for (let i = 0; i < lst.length; i++) {
        let e = lst[i]

        if (e > 0) {
            p += e
        } else {
            n += e
        }
    }

    p = Math.abs(p)
    n = Math.abs(n)

    if (p > n) {
        return p - n
    } else {
        return - (n - p)
    }
}


// alternative solution
function deltaPN(lst) {

    let p = 0, n = 0

    lst.forEach(number => {
        if(number > 0) { p += number } 
            else { n += number }  
        })

    p = Math.abs(p), n = Math.abs(n)

    if(p > n) { return p - n }
    return - (n - p)
}


/*
    Create a function called exponentOfBaseTwo(n), which takes a number that is a power of 2 and that
    must decompose that number and find out what the exponent of that power is.
    Ex:
        n = 16 => Should return 4, because 16 = 2^4
        n = 1024 => Should return 10
        n = 1 => Must return 0

    Crie uma função chamada expoenteDaBaseDois(n), que recebe um número que é potência de 2 e que
    deve decompor esse número e descobrir qual o expoente dessa potência.
    Ex:
        n = 16 => Deve retornar 4, porque 16 = 2^4
        n = 1024 => Deve retornar 10
        n = 1 => Deve retornar 0
*/


// solution
function exponentOfBaseTwo(n) {

    let x = 1
    if (n % 2 == 0) {
        while (n != 2) {
            n = n / 2
            x ++
        }
        return x
    }
    return 0
}