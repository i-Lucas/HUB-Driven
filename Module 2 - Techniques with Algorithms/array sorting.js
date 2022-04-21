/*
    Write a function sortNumbers(numbers) that takes an array of numbers as a parameter and returns
    an array of numbers sorted in ascending order.
    Ex:
        numbers = [10, 2, 1, 5] => Should return [1, 2, 5, 10]
        numbers = [] => Should return []

    Escreva uma função ordenaNumeros(numeros) que recebe um array de números como parâmetro e retorna 
    um array dos números ordenados em ordem crescente.
*/


// solution
function sortNumbers(numeros) {
    return numeros.sort((a, b) => a - b)
}


/*
    Write a function sortStrings(strings) that takes an array of strings as a parameter and
     returns an array of strings sorted alphabetically, but backwards.

    Ex:
        strings = ["Brasil", "Argentina", "Chile"] => Should return ["Chile", "Brasil", "Argentina"]

    Escreva uma função ordenaStrings(strings) que recebe um array de strings como parâmetro e 
    retorna um array das strings ordenada alfabeticamente, mas de trás para frente.
*/


// solution
function sortStrings(strings) {   
    return strings.sort((a, b) => b.localeCompare(a))
}


/*
    Implement a sortPeople(people) function that sorts a list of people by age and,
    when age is equal, sort alphabetically.

    For example, sort the following list:
    [
        { name: "Agnaldo", age: 30 },
        { name: "Josephine", age: 29 },
        { name: "Cornelius", age: 29 },
        { name: "Antoniel", age: 23 },
        { name: "Xanthippe", age: 26 }
     ]

     would produce the following list:
     [
        { name: "Antoniel", age: 23 },
        { name: "Xanthippe", age: 26 },
        { name: "Cornelius", age: 29 },
        { name: "Josephine", age: 29 },
        { name: "Agnaldo", age: 30 }
     ]

    with Cornelius coming before Josephine, because despite being the same age, 
    Cornelius comes first alphabetically.
*/


// solution
function sortPeople(pessoas) {

    return pessoas.sort((a, b) => {

        if (a.idade === b.idade) {
            return a.nome > b.nome ? 1 : -1
        }

        return a.idade > b.idade ? 1 : -1
    })
}


/*
    Write a function called sortNumbers(numbers) that takes an array of numbers
    as a parameter and returns an array of the numbers sorted in descending order.

    Ex:
        numbers = [1, 2, 4, 10, 0] => Should return [10, 4, 2, 1, 0]
        numbers = [] => Should return []

    Escreva uma função chamada ordenaNumeros(numeros) que recebe um array de números 
    como parâmetro e retorna um array dos números ordenados em ordem decrescente.
*/


// solution
function sortNumbers(numeros) {
    return numeros.sort((a, b) => b - a)
}