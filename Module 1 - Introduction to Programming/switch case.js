/*
	Create a function called returnMonth(num) that takes a number from 1 to 12 as a parameter, and returns
	a string with the name of the respective month that this number represents in the Gregorian calendar.
	This function must use the Switch Case structure.

	Crie uma função chamada retornaMes(num) que recebe um número de 1 a 12 como parâmetro, e retorna 
	uma string com o nome do respectivo mês que esse número representa no calendário gregoriano.
	Essa função deve utilizar a estrutura Switch Case.
*/


// solution
function returnMonth(num) {

    switch (num) {
    	
        case 1: return 'janeiro'
        case 2: return 'fevereiro'
        case 3: return 'março'
        case 4: return 'abril'
        case 5: return 'maio'
        case 6: return 'junho'
        case 7: return 'julho'
        case 8: return 'agosto'
        case 9: return 'setembro'
        case 10: return 'outubro'
        case 11: return 'novembro'
        case 12: return 'dezembro'
    }
}


/*
	Write a function that uses the Switch/Case structure called returnWord(char).
	This function takes a vowel, and must return a word that starts with that vowel.
	In your Switch/Case structure add an exception that responds with the string "Not a vowel"
	if the function receives a character that is not a vowel.

	Escreva uma função que utilize a estrutura Switch/Case chamada retornaPalavra(char). 
	Essa função recebe uma vogal, e deve retornar uma palavra que se inicia com aquela vogal. 
	Na sua estrutura Switch/Case adicione uma exceção que responda com a string "Não é vogal" 
	caso a função receba um caracter que não é vogal.
*/


// solution
function retornaPalavra(char) {

    switch(char) {

        case 'a' : return 'Amanda'
        case 'e' : return 'Emmanuel'
        case 'i' : return 'Igor'
        case 'o' : return 'Oliveira'
        case 'u' : return 'Uyara'
        default  : return 'Not a vowel'
    }
}


/*
	Light passing through water particles in the atmosphere can be refracted and create beautiful rainbows in the sky.
	Rainbows are formed by these colors in the following order:

		1 - Red
		2 - Orange
		3 - Yellow
		4 - Green
		5 - Blue
		6 - Indigo
		7 - Violet

	Write a function that uses the Switch/Case structure, called colorDoArcoIris(color),
	which takes a string containing the name of one of the seven colors of the rainbow and returns the number of that color.
	If this function receives something other than these colors, return the string "Not a rainbow color".

	Watch out! The string is representing a user input and can have different formats:

		"Red" / "Red" / "RED"
		"Orange" / "Orange" / "Orange"


	A luz ao atravessar partículas de água na atmosfera pode sofrer refração e gerar lindos arco-íris no céu. 
	Os arco-íris são formados por essas cores na seguinte ordem:

		1 - Vermelho
		2 - Laranja
		3 - Amarelo
		4 - Verde
		5 - Azul
		6 - Anil
		7 - Violeta

	Escreva uma função que utilize a estrutura Switch/Case, chamada corDoArcoIris(cor), 
	que recebe uma string contendo o nome de uma das sete cores do arco-íris e retorna o número dessa cor. 
	Caso essa função receba algo diferente dessas cores, retorne a string "Não é uma cor do arco-íris".

	Cuidado! A string está representando um input de um usuário e pode possuir diferentes formatos:

		"Vermelho" / "vermelho" / "VERMELHO"
		"LAranja" / "Laranja" / "laranja"
*/


// solution
function corDoArcoIris(cor) {

    cor = cor.toUpperCase()

    switch(cor) {

        case 'VERMELHO': return 1
        case 'LARANJA' : return 2
        case 'AMARELO' : return 3
        case 'VERDE'   : return 4
        case 'AZUL'    : return 5
        case 'ANIL'    : return 6
        case 'VIOLETA' : return 7
        default: return 'Not a rainbow color'
    }
}