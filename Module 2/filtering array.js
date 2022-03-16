/*
	Create a function called filterOdd(list) that takes a list of integers and returns a new list
	containing only the odd numbers from the original list.
	Ex:
		list = [4, 3, 1, 3, 4] => Should return [3, 1, 3]
		list = [4, 4, 2] => Should return [ ]
		list = [ ] => Should return [ ]


	Crie uma função chamada filtraImpares(lista) que recebe uma lista de números inteiros e retorna uma nova lista 
	contendo apenas os números ímpares da lista original.
	Ex:
	    lista = [4, 3, 1, 3, 4] => Deve retornar [3, 1, 3]
	    lista = [4, 4, 2] => Deve retornar [ ]
	    lista = [ ] => Deve retornar [ ]
*/


// solution 1
function filterOdd(list) {

    return list.filter(number => number % 2 !== 0)
}


// solution 2
const filterOdd1 = (list) => list.filter(number => number % 2 !== 0)


/*
	Rewrite the function called filterOdd(lst), which filters a list returning a new list with only the odd numbers.
	Ex:
		lst = ['rice', 5, 4, 3.6, 2, 5.4, 0, 'beans', 7, 9, 8.2] => Should return [5, 7, 9]
		lst = [ 5.3, 5.1, 5.0, 'potato', 9.0, 10 ] => Should return [5.0, 9.0]
		lst = [ ] => Should return [ ]


	Reescreva a função chamada filtraImpares(lst), que filtra uma lista retornando uma nova lista apenas com os números ímpares.
	Ex:
	    lst = ['arroz', 5, 4, 3.6, 2, 5.4, 0, 'feijão', 7, 9, 8.2] => Deve retornar [5, 7, 9]
	    lst = [ 5.3, 5.1, 5.0, 'batata', 9.0, 10 ] => Deve retornar [5.0, 9.0]
	    lst = [ ] => Deve retornar [ ]
*/


// solution 1
function filterOdd(list) {

    return list.filter(number => number % 2 !== 0 && typeof (number) === 'number')
}


// solution 2
const filterOdd2 = (list) => list.filter(number => number % 2 !== 0 && typeof (number) === 'number')


/*
	Create a function called greater23(lst) that takes a list of numbers and checks if any of the numbers are greater than 23.
	Return another list with values greater than 23. If there are no values greater than 23, return -1.
	Ex:
		lst = [2, 1, 34, 1, 31, 43, 2, 7] => Should return [34, 31, 43]
		lst = [2, 4, 6, 4, 6, 7, 5] => Should return -1
		lst = [2, 4, 23, 24, 4, 2] => Should return [24]


	Crie uma função chamada maior23(lst) que recebe uma lista de números e verifica se algum dos números é maior que 23. 
	Retorne uma outra lista com os valores maiores que 23. Caso não exista valores maiores que 23, retorne -1.
	Ex:
	    lst = [2, 1, 34, 1, 31, 43, 2, 7] => Deve retornar [34, 31, 43]
	    lst = [2, 4, 6, 4, 6, 7, 5] => Deve retornar -1
	    lst = [2, 4, 23, 24, 4, 2] => Deve retornar [24]
*/


// solution 1
function greater23(list) {

    let b = list.filter(number => number > 23)
    return b.length === 0 ? -1 : b
}


// solution 2
const greater23a = (list) => list.filter(number => number > 23).length === 0 ? -1 : list.filter(number => number > 23)


/*
	Create a function called lessthan(x, lst), which takes two parameters, the first is a number and the second is a list of numbers.
	From the number received as input, your function must traverse the input list and return an array that contains
	all numbers less than x found in lst. If there are no numbers smaller than x, it must return an empty array.
	Ex:
		x = 15, lst = [ 10, 16, 9, 15, 2, 20] => Should return [10, 9, 2]
		x = 0, lst = [5, 4, -2, 4, 2, -6, 3] => Should return [-2, -6]
		x = -10, lst = [3, 4, 2, 5, 23, 5] => Should return [ ]


	Crie uma função chamada menorQue(x, lst), que recebe dois parâmetros, o primeiro é um número e o segundo é uma lista de números. 
	A partir do número recebido como entrada, sua função deve atravessar a lista de entrada e retornar uma array que contenha
	todos os números menores que x, encontrados em lst. Caso não existam números menores do x, deve retornar uma array vazia.
	Ex:
	    x = 15, lst = [ 10, 16, 9, 15, 2, 20] => Deve retornar [10, 9, 2]
	    x = 0, lst = [5, 4, -2, 4, 2, -6, 3] => Deve retornar [-2, -6]
	    x = -10, lst = [3, 4, 2, 5, 23, 5] => Deve retornar [ ]
*/


// solution 1
function lessthan(x, list) {

    return list.filter(number => number < x)
}


// solution 2
const lessthan2 = (x, list) => list.filter(number => number < x)


/*
	Create a function called filterTamTres(lst) that takes a list of strings and filters that list returning
	for us a new list containing only the strings that have length less than or equal to three.
	Ex:
		lst = ["cheese", "yes", "love", "heaven", "a", "dog" ] => Should return ["yes", "heaven", "a"]
		lst = [ ] => Should return [ ]


	Crie uma função chamada filtraTamTres(lst) que recebe uma lista de strings e filtra essa lista retornando 
	para gente uma nova lista contendo apenas as strings que possuem tamanho menor ou igual a três.
	Ex:
	    lst = ["queijo", "sim", "amor", "céu", "a", "cachorro" ] => Deve retornar ["sim", "céu", "a"]
	    lst = [ ] => Deve retornar [ ]
*/


// solution 1
function filterTamTres(list) {

    return list.filter(string => string.length < 3)
}


// solution 2
const filterTamTres2 = (list) => list.filter(string => string.length < 3)


/*
	Create a function called filterWordsWithA(lst) this function receives a list of strings and should return a new l
	ista containing only the words starting with the letter 'a' from our original list. This function must not be case sensitive.
	Ex: lst = ['House', 'plane', 'shop', 'amor', 'Ana'] => Should return ['plane', 'amor', 'Ana'


	Crie uma função chamada filtraPalavrasComA(lst) essa função recebe uma lista de strings e deve retornar uma nova l
	ista contendo apenas as palavras que começam com a letra 'a' da nossa lista original. Essa função não deve ser case sensitive.
	Ex: lst = ['Casa', 'avião', 'loja', 'amor', 'Ana'] => Deve retornar ['avião', 'amor', 'Ana	 
*/


// solution 1
function filterWordsWithA(list) {

    return list.filter(string => string[0] === 'a' || string[0] === 'A')
}


// solution 2
const filterWordsWithA2 = (list) => list.filter(string => string[0] === 'a' || string[0] === 'A')


/*
	Create a function called filterVowels(lst) that receives a list of characters and returns
	a new list with only the vowels that appear in the original list.
	Ex:
		lst = ['g', 'h', 'o', 'o', 'i', 't'] => Should return ['o', 'o', 'i'];
		lst = ['t', 'k', 't'] => Should return [ ]
		lst = [ ] => Should return [ ]


	Crie uma função chamada filtraVogais(lst) que recebe uma lista com caracteres e que retorna 
	uma nova lista apenas com as vogais que aparecem na lista original.
	Ex:
	    lst = ['g', 'h', 'o', 'o', 'i', 't'] => Deve retornar ['o', 'o', 'i'];
	    lst = ['t', 'k', 't'] => Deve retornar [ ]
	    lst = [ ] => Deve retornar [ ]
*/


// solution
function filterVowels(list) {

    const vowels = (c) => c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u'
    return list.filter(char => vowels(char))
}


/*
	Create a function called subsProprio(lst) that receives a list with nouns and should return
	another list containing only the proper nouns from the original list.
	Ex:
		lst = ['car', 'André', 'John', 'plane', 'motorcycle'] => Should return ['André', 'John']
		lst = [ ] => Should return [ ]

	Crie uma função chamada subsProprio(lst) que recebe uma lista com substantivos e deve retornar 
	uma outra lista contendo apenas os substantivos próprios da lista original.
	Ex:
	    lst = ['carro', 'André', 'João', 'avião', 'moto'] => Deve retornar ['André', 'João']
	    lst = [ ] => Deve retornar [ ]
*/


// solution
function subsProprio(list) {

    let uppercase = (c) => /[A-Z]/.test(c)
    return list.filter(string => uppercase(string) && typeof(string) === 'string')
}