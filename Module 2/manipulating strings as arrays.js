/*
	Create a function called countC(str) that traverses a string and returns the total amount of 'c' letters 
	that appear in the string.
	Ex:
		str = 'carcará' => Must return 2
		str = 'feature' => Should return 3
		str = '' => Must return 0

	Crie uma função chamada contaC(str) que atravessa uma string e retorna a quantidade total de letras 'c' 
	que aparecem na string.
*/


//  solution 1
function countC(str) {

	let total = 0
	for(let c in str) {
		if(str[c] === 'c') {
			total ++
		}
	}
	return total
}


/*
	Create a function called changeVogal(str), which takes a string and returns a new string where the vowels "a"
	have been replaced by "and".
	Ex:
		str = "atheist" => Should return "etheist"
		str = "maca" => Should return "mece"
		str = "bcd" => Should return "bcd"
		str = "" => Should return ""

	Crie uma função chamada mudaVogal(str), que recebe uma string e retorna uma nova string onde as as vogais "a" 
	foram substituídas por "e".
*/


// solution 1
function changeVogal(str) {

	let copy = ''

	for(let c in str) {

		if(str[c] === 'a') { copy += 'e' }
		else { copy += str[c] }	
	}

	return copy
}


/*
	Create a function called haveK(str), which takes a string and checks if there is the letter 'k' in that string and
	returns the index representing the position of that letter. If the string does not have 'k', it must return -1.
	Ex:
		str = 'king' => Must return 0
		str = 'strike' => Should return 4
		str = 'abcd' => Should return -1
		str = '' => Should return -1

	Crie uma função chamada temK(str), que recebe uma string e verifica se existe a letra 'k' nessa string e
	retorna o índice que representa a posição dessa letra. Caso a string não possua 'k' deve retornar -1.
*/


// solution 1
function haveK(str) {

	for(let c in str) {
		if(str[c] === 'k') {
			return str.indexOf(str[c])
		}
	}
	return -1
}


/*
	Create a function called shiftLetters(str), which takes a string and moves all the characters
	one position to the left, turning the first character into the last.
	Ex:
		str = 'abcd' => Must return 'bcda'
		str = '1234' => Should return '2341'

	Crie uma função chamada deslocaLetras(str), que recebe uma string e move todos os caracteres
	uma posição para esquerda, transformando o primeiro carácter na último.
*/


// solution 1
function shiftLetters(str) {

	let newstr = ''
	for(let i = 0; i<str.length; i++) {

		if(i === str.length -1) newstr += str[0]
			else newstr += str[i + 1]
	}
	return newstr
}


// solution 2
function shiftLetters(str){

	if(str.length === 0){ return str }
	let final =  str.slice(1) + str[0]
	return final
}

/*
	Create a function called indexNum(str), which takes a string and returns a list with the values of
	indices at the positions of the received string where there are numbers.

	Ex:
		str = "1abc23" => Should return [0, 4, 5]
		str = "abc3d3" => Should return [3, 5]
		str = "abc" => Should return [ ]

	Crie uma função chamada indexNum(str), que recebe uma string e retorna uma lista com o valor dos 
	índices nas posições da string recebida onde existem números.
*/


// solution 1
function indexNum(str) {

	let array = [], numbers = '0123456789'

	for(let i in str) {

		for(let n in numbers) {

			if(str[i] === numbers[n]) {
				array.push(str.indexOf(str[[i]]))
			}
		}

	}
	return array
}


// solution 2
function indexNum(str) {

	let final = []

	for(let i = 0; i < str.length; i++) {

		if (/[0-9]/.test(str[i])) {
			final.push(i)
		}
	}
	return final;
}


/*
	Create a function called addCedilha(str, x), which takes a string and adds a "ç" at the x position of the string,
	pushing the letters to the right. If there is no x position, add the letter to the end of the string.
	Ex:
		x = 3, str = 'machete' => Must return 'faction
		x = 19, str = 'Scrub' => Should return 'Scrub'
		x = 13, str = '' => Must return 'ç' 

	Crie uma função chamada adicionaCedilha(str, x), que recebe uma string e adiciona um "ç" na posição x da string, 
	empurrando as letras para direita. Caso não exista posição x, adicione a letra no final da string.
*/


// solution 
function addCedilha(str, x){

    if(x === undefined) return str + 'ç'        
    return str.substr(0, x) + 'ç' + str.substr(x)
}


// solution 2
const addCedilha2 = (str, x) => x === undefined ? str + 'ç' : str.substr(0, x) + 'ç' + str.substr(x)


/*
	Create a function called removeL(str) that takes a string and returns a new string without the letters 'l'.
	Ex:
		str = 'lion' => Should return 'eão'
		str = 'lulu' => Should return 'uu'
		str = 'la la land' => Should return 'a a and'
		str = ' ' => Must return ' '

	Crie uma função chamada removeL(str) que recebe uma string e retorna uma nova string sem as letras 'l'.
*/


// solution 1
// function removeL(str) {
//     return str.replace(/l/g, '');
// }


// solution 2
function removeL(str){
    let newStr = '';
    for(let i in str) {
        if(str[i] !== 'l'){
            newStr += str[i];
        }
    }
    return newStr;
}


/*
	Creates a function called insertParenthesis(str) that takes a string and returns the string inside parentheses.
	Ex:
		str = "plate" => Should return "(plate)"
		str = "note above" => Should return "(note above)"
		str = "" => Should return "()"

	Cria uma função chamada insereParenteses(str) que recebe uma string e retorna a string dentro de parênteses.
*/	


// solution 1
function insertParenthesis(str) {
    return `(${str})`
}


// solution 2
const insertParenthesis = (str) => `(${str})`