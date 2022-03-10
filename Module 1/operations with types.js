// Create a function called returnsInReais(n) that takes a number and returns that number converted to the format "R$XXXX.XX"
// Crie uma função chamada retornaEmReais(n) que recebe um número e retorna esse número convertido para o formato "R$XXXX.XX"


// solution
const returnsInReais = (x) => "R$ " + x.toPrecision(5);


/*
	Create a function called highbox(str), which takes a string and returns that string with all characters in uppercase.
	Then create the lowbox(str) function, which also receives a string and returns this string with all characters in lowercase.

	Crie uma função chamada caixaAlta(str), que recebe uma string e retorna essa string com todos os caracteres em letra maiúscula.
	Crie em seguida a função caixaBaixa(str), que também recebe uma string e retorna essa string com todos os caracteres com letras minúsculas.
*/


// solution
const highbox = (s) => s.toUpperCase()
const lowbox = (s) => s.toLowerCase()


/*
	Write a function called contain(char, str), which takes a character and a string as parameters, 
	and checks if the character is contained in the string. If this character exists in the string, 
	the function must return true and otherwise false.

	Escreva uma função chamada contem(char, str), que recebe como parâmetro um caractere e uma string, 
	e verifica se o caracter está contido na string. Caso esse caracter exista na string a função deve 
	retornar true e em caso contrário false.
*/


// solution
const contain = (c, s) => s.includes(c) ? true : false