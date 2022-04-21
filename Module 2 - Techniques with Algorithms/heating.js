/*
    Create a function called hasString(lst) that takes a list checks if there are strings in that list or not.
    If there is no string, it must return false, if there are strings, it must return true. Use a boolean variable.

    Ex:
        lst = [12, 2, [ ], "dog", 4.5] => Must return true
        lst = [23, 12, 3, 2, 1] => Should return falseheat

    Crie uma função chamada temString(lst) que recebe uma lista verifica se existem strings nessa lista ou não. 
    Caso não exista string, deve retornar false, caso existam strings devem retornar true. Utilize uma variável do tipo booleano.
*/


// solution
const hasString = (lst) => lst.filter(item => typeof item === 'string').length > 0


/*
    Create a function called hasDecimal(lst).
    It should return true if there are decimal numbers in this array, and false otherwise.

    Crie uma função chamada temDecimal(lst). 
    Ela deve retornar true caso existam números decimais nessa array, e false em caso contrário.
*/


// solution
const hasDecimal = (lst) => lst.filter(item => typeof item === 'number' && item % 1 !== 0).length > 0


/*
    Create a function called hasTwoTypeNum(lst), it should return true if there are integers AND decimal numbers in this array
    and false otherwise.
    Ex:
        lst = [12, 32, 'house', 3] => Should return false
        lst = [4, 3.2, "clothes"] => Should return true

    Crie uma função chamada temDoisTiposNum(lst), ela deve retornar true caso existam números inteiros 
    E números decimais nessa array, e false em caso contrário.
*/


// solution
function hasTwoTypeNum(lst) {

    const dec = lst.filter(item => typeof item === 'number' && item % 1 !== 0);
    const int = lst.filter(item => typeof item === 'number' && item % 1 === 0);
    return dec.length > 0 && int.length > 0;
}