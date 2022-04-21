// 	In this exercise create and return an array, with the numbers from 1 to 50. Call the returnIntegersArray() function.
// 	Nesse exercício crie e retorne uma array, com os números de 1 a 50. Chame a função de returnIntegersArray().


// solution
function returnIntegersArray() {
    
    let a = [], n = 1
    while(n <= 50) { a.push(n), n++ }               
    return a
}


/*
	In this exercise we will manually program the indexOf(array, num) function.
	This function takes an array of numbers and another parameter which is a number.
	The function should check if the number exists in that array, and if it does, it should return the position of that number in the array.
	Otherwise it should return -1.


	Nesse exercício vamos programar manualmente a função indexOf(array, num). 
	Essa função recebe uma array de números e outro parâmetro que é um número. 
	A função deve verificar se o número existe nessa array, e se existir, deve retornar a posição desse número na array. 
	Caso contrário deve retornar -1.
*/


// solution
const indexOf = (array, n) => array.indexOf(n) !== undefined ? array.indexOf(n) : -1


/*
	In this exercise create a function called printOdd(array)
	which takes an array of numbers, and prints only those numbers in the array that are odd.

	Nesse exercício crie uma função chamada imprimeImpares(array) 
	que recebe uma array de números, e imprime apenas aqueles números da array que são ímpares.
*/


// solution
const printOdd = (array) => array.forEach(n => { if(n % 2 !== 0) { console.log(n) } })