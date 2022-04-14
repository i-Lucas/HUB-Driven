/*
    Create a function called transformObjArr(objArr) that takes an array of objects,
    where each object has the properties ''name", "phone" and "address" and transform into an array of arrays,
    where each object of the original array is transformed into an internal array of our final array where the properties
    are respectively at indices 0, 1 and 2 of these internal arrays.

    Crie uma função chamada transformaObjArr(objArr) que recebe uma array de objetos, 
    onde cada objeto possui as propriedades ''nome", "telefone" e "endereco" e transforme em uma array de arrays,
    onde cada objeto da array original seja transformado em uma array interna da nossa array final onde as propriedades 
    estejam respectivamente nos índices 0, 1 e 2 dessas arrays internas.

    Ex:

    objArr = [

        {nome: "João", telefone: "21 999990000", endereco: "Laranjeiras, RJ"},
        {nome: "Ana", telefone: "11 998989898", endereco: "Brooklin, SP" },
        {nome: "Thiago", telefone: "21 995896585", endereco: "Botafogo, RJ"}
    ]

    Should return :

    [
        ["João", "21 999990000", "Laranjeiras, RJ"],
        ["Ana", "11 998989898", "Brooklin, SP"],
        ["Thiago", "21 995896585", "Botafogo, RJ"]
    ]
*/


// sulution
function transformObjArr(lst) {

    let result = []
    for (let i in lst) {

        let obj = lst[i]
        let temp = []

        temp.push(obj.nome)
        temp.push(obj.telefone)
        temp.push(obj.endereco)
        result.push(temp)
    }
    return result
}


/*
    In this exercise make a function called printMultiArray(arr),
    which will receive a three-dimensional array and must print the elements of this array as in the example:

    Nesse exercício faça uma função chamada imprimeMultiArray(arr), 
    que vai receber uma array de três dimensões e deve imprimir os elementos dessa array conforme o exemplo:

    Ex:

        arr = [ [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 1, 3, 5, 7 ] ], [ [ 8, 6, 4, 2],[ 8, 7, 6, 5],[ 4, 3, 2, 1] ] ] Should return :

        [0][0][0] = 1
        [0][0][1] = 2
        [0][0][2] = 3
        ...
        ...
        [2][3][0] = 4
        [2][3][1] = 3
        [2][3][2] = 2
        [2][3][3] = 1
*/


// solution
function printMultiArray(arr) {

    for (let i in arr) {
        for (let j in arr[i]) {
            for (let k in arr[i][j]) {
                console.log(`[${i}][${j}][${k}] = ${arr[i][j][k]}`)
            }
        }
    }
}


/*
    Create a function called sumElements(arr), which takes an array of arrays iterates through this
    input and returns the sum of all elements.

    Crie uma função chamada somaElementos(arr), que recebe uma array de arrays itera por essa 
    entrada e retorna a soma de todos os elementos.

    Ex:
        arr = [ [1, 2], [3, 2, 4], [1, 2], [3] ] => Should return 18
*/


// solution
function sumElements(lst) {

    let result = 0
    for (let i in lst) {
        for (let j in lst[i]) {
            result += lst[i][j]
        }
    }
    return result
}


/*
    Create a function called oddInner(lst) that takes an array of arrays,
    and returns a new array containing the number of odd numbers in each inner array.

    Crie uma função chamada imparesInternos(lst) que recebe uma array de arrays,
    e retorna uma nova array contendo a quantidade de números ímpares em cada array interna.

    Ex:
        lst = [ [1, 2], [3, 2, 1, 3], [2], [], [2, 3, 4, 2, 4] ] => Should return [1, 3, 0, 0, 1]
*/


// solution
function oddInner(lst) {

    let result = []
    for (let i in lst) {
        let temp = 0
        for (let j in lst[i]) {
            if (lst[i][j] % 2 !== 0) {
                temp++
            }
        }
        result.push(temp)
    }
    return result
}


/*
    Create a function called sumInternalProduct(arr), which takes an array of arrays,
    then the function must sum the product of the elements of the internal arrays and return the total value of the sums.

    Crie uma função chamada somaProdutorioInterno(arr), que recebe uma array de arrays, 
    em seguida a função deve somar o produto dos elementos das arrays internas e retornar o valor total das somas.

    Ex:
        arr = [ [5], [12, 3, 0], [2, 3, 5] ] => Should return 35
        arr = [ [], [4, 5], [6] ] => Should return 26
*/


// solution
function sumInternalProduct(arr) {

    let sum = 0
    for (let i in arr) {

        let prod = 1
        if (arr[i].length == 0) continue

        for (let j in arr[i]) { prod *= arr[i][j] }
        sum += prod;
    }
    return sum;
}

/*
    Create a summation(arr) function, which receives an array of arrays and numbers.
    This function must accumulate in a variable the sum of the even numbers of the internal arrays,
    along with the sum of all numbers that have stored directly in the outermost array.

    Crie uma função somatorio(arr), que recebe uma array de arrays e números.
    Essa função deve acumular em uma variável a soma dos números pares das arrays internas, 
    junto da soma de todos os números que tiverem armazenados diretamente na array mais externa.

    Ex:
        arr = [ [2, 3, 4], 4, 3, [3, 3, 3], [2, 3, 3] ] => Should return 15
        arr = [ [1, 1, 1], [0], [1, 1, 1] ,1, 2, 3] => Should return 6
        arr = [ [2, 4, 8, 6], [1, 3, 5, 7] ] => Should return 20
*/


// solution
function summation(arr) {

    let sum = 0
    for (let i in arr) {

        if (Array.isArray(arr[i])) {

            for (let j in arr[i]) {

                if (arr[i][j] % 2 == 0) {
                    sum += arr[i][j]
                }
            }
        } else {
            sum += arr[i]
        }
    }
    return sum
}


/*
    Create a function called hiddentext(arr) that takes an array of arrays and should
    return a string with the words found in the inner arrays separated by space.

    Crie uma função chamada textoEscondido(arr) que recebe uma array de arrays e deve
    retornar uma string com as palavras encontradas nas arrays internas separadas por espaço.

    Ex:
        arr = [ [3, 2, "arroz"], ["mar", "terra", 43], [3, 4, 5] ] => Should return "arroz mar terra"
        arr = [ [2, 1, 4, 2], ["mato", "planta", "flor"], [4, 5, 4, "céu"], ["casa", "apartamento"] ] => Should return "mato planta flor céu casa apartamento"
        arr = [ [1, 2, 3, 4], [ ], [ ], [23, 2, 4] ] => Should return ""
*/


// solution
function hiddentext(arr) {

    let str = "";
    for (let i in arr) {

        for (let j in arr[i]) {

            if (typeof arr[i][j] == "string") {
                str += arr[i][j] + " "
            }
        }
    }
    return str.slice(0, -1);
}