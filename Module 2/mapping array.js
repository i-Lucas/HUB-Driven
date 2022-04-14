/*
	Create a function called doubleValues(list) that takes a list of numeric values,
	and returns a new array with the same number of elements but with the values of each element doubled.
	Example:
		list = [2, 4, 5] => Should return [4, 8, 10]
		list = [1.5, 5, 15] => Should return [3, 10, 30]
		list = [ ] => Should return [ ]

	Crie uma função chamada dobraValores(lista) que recebe uma lista de valores numéricos, 
	e retorna uma nova array com o mesmo número de elementos mas com os valores de cada elemento dobrados.
*/


// solution 1
function doubleValues(lst) {

	let a = []

	lst.forEach(number => {
		a.push(number * 2)
	})

	return a
}


// solution 2
function doubleValues(lst) {

    return lst.map(number => number * 2)
}


/*
	Create a function called successors(lst) that takes a list of integers and should return a new list
	containing the successors of the original list element.
	Ex:
		lst = [3, 4, 5] => Should return [4, 5, 6]
		lst = [-1, -2] => Should return [0, -1]
		lst = [ ] => Should return [ ]

	Crie uma função chamada sucessores(lst) que recebe uma lista de inteiros e deve retornar uma nova lista 
	contendo os sucessores do elemento da lista original.
	Ex:
	    lst = [3, 4, 5] => Deve retornar [4, 5, 6]
	    lst = [-1, -2] => Deve retornar [0, -1]
	    lst = [ ] => Deve retornar [ ]
*/


// solution 1
function successors(lst) {

    let a = []

    lst.forEach(number => {
        a.push(number + 1)
    })

    return a
}


// solution 2
function successors(lst) {

    return lst.map(number => number + 1)
}


/*
	Create a function called returnHalf(lst), this function takes a list of numbers and for each element
	divides the value of that element by 2 and returns a new list with those values halved.
	Ex:
		lst = [0, 2, 4, 8] => Should return [0, 1, 2, 4]
		lst = [ ] => Should return [ ]
		lst = [5, 10, 15] => Should return [2.5, 5, 7.5]

	Crie uma função chamada retornaMetade(lst), essa função recebe uma lista de números e para cada elemento 
	divide o valor desse elemento por 2 e retorna uma nova lista com esses valores pela metade.
*/


// solution 1
function returnHalf(lst) {

    let a = []

    lst.forEach(number => {
        a.push(number / 2)
    })

    return a
}


// solution 2
function returnHalf(lst) {

	return lst.map(number => number / 2)
}


/*
	Create a function called numberOpposite(lst) that takes a list of numbers and returns a new list,
	with the elements with the opposite value to what we find in the input list.
	Ex:
		lst = [3, 2, -3, -4, 0, 5] => Should return [-3, -2, 3, 4, 0, -5]
		lst = [ ] => Should return [ ]


	Crie uma função chamada numeroOposto(lst) que recebe uma lista de números e retorna uma nova lista, 
	com os elementos com o valor oposto ao que encontramos na lista de entrada.
*/


// solution 1
function numberOpposite(lst) {

    let a = []
    lst.forEach(n => {
        a.push((n - n) - n)
    })

    return a
}


// solution 2
function numberOpposite(lst) {

    return lst.map(number => (number - number) - number )
}


/*
	Create a function called numToString(lst), which takes a list of numbers and should return a list with the same numbers
	but formatted with type string. Ex: lst = [3, 12, 45] => Should return ['3', '12', '45']

	Crie uma função chamado numToString(lst), que recebe uma lista de números e deve retornar uma lista com os mesmos números 
	mas formatados com o tipo string. Ex: lst = [3, 12, 45] => Deve retornar ['3', '12', '45']	   
*/


// solution 1
function numToString(lst) {

    let a = []
    lst.forEach(n => {
        a.push(n.toString())
    })

    return a
}


// solution 2
function numToString(lst) {

    return lst.map(number => number.toString())
}


/*
	Create a function transformUppercase(lst), which takes a list of strings and transforms them to uppercase
	all strings in this list. Ex: lst = ['hello my', 'name is', Jeff'] => Should return => ['HELLO MY', 'NAME IS', 'JEFF']

	Crie uma função transformaMaiuscula(lst), que recebe uma lista de strings e transforma para letras maiúscula 
	todas as strings dessa lista. Ex: lst = ['olá meu', 'nome é', Jeff'] => Deve retornar => ['OLÁ MEU', 'NOME É', 'JEFF']	
*/


// solution 1
function transformUppercase(lst) {

    let a = []
    lst.forEach(n => {
        a.push(n.toUpperCase(n))
    })

    return a
}


// solution 2
function transformUppercase(lst) {

    return lst.map(number => number.toUpperCase(number))
}


/*
	Create a function called subsProprios(lst), which receives a list of strings containing names, and must return this same list,
	but with all names starting with a capital letter.
	Ex: lst = ['André', 'bruna', 'Anderson', 'Joao', 'tiago'] => Should return ['André', 'Bruna', 'Anderson', 'Joao', 'Tiago']

	Crie uma função que se chama subsProprios(lst), que recebe uma lista de strings contendo nomes, e deve retornar essa mesma lista, 
	porém com todos os nomes começando com letra maiúscula.
	Ex: lst = ['andré', 'bruna', 'Anderson', 'Joao', 'tiago'] => Deve retornar ['André', 'Bruna', 'Anderson', 'Joao', 'Tiago']
*/


// solution 1
function subsProprios(lst) {

    let a = []

    lst.forEach(string => {
        a.push(string[0].toUpperCase() + string.substr(1))
    })

    return a
}


// solution 2
function subsProprios(lst) {

    return lst.map(string => string[0].toUpperCase(string) + string.substr(1))
}


/*
	Create a function called pairHighOddLow(lst), which takes a list of strings, and maps that string from a
	so that the elements that are in even indices are rewritten in capital letters and the elements in
	odd indices are lowercase.

	Ex: lst = [ 'FAlsjfb', 'jfalsaW', 'fjALS', 'fdkjAFgh'] => Should return ["FALSJFB", "jfalsaw", "FJALS", "fdkjafgh"]
	

	Crie uma função chamada parAltaImparBaixa(lst), que recebe uma lista de strings, e mapeia essa string de uma 
	forma que os elementos que estiverem em índices pares, fiquem reescritos em letra maiúscula e os elementos em 
	índices ímpares sejam colocados em letras minúsculas.
*/


// solution 1
function pairHighOddLow(lst) {

    let a = []

    for (let i = 0; i < lst.length; i++) {

        let elm = lst[i], index = i

        if (index % 2 === 0) {

            a.push(elm.toUpperCase())
        }
        else {

            a.push(elm = elm.toLowerCase())
        }
    }
    return a
}


// solution 2
function pairHighOddLow(lst) {

	let a = []
	lst.forEach((element, index) => {
		if(index % 2 === 0) {
			a.push(element.toUpperCase())
		} else a.push(element.toLowerCase())
	})
	return a
}


// solution 3
function pairHighOddLow(lst) {

    const isPair = (index) => index % 2 === 0 ? true : false
    const toLower = (element) => element.toLowerCase()
    const toUpper = (element) => element.toUpperCase()

    return lst.map((element, index) => 
        isPair(index) ? toUpper(element) : toLower(element)
    )
}


/*
	Create a function called foobooMultiples(lst), which takes a list of numbers and maps that list to the multiple numbers
	of 3 are replaced by 'foo', and those that are multiples of 5 are replaced by 'boo'.
	Numbers that are simultaneously multiples of 3 and 5 must be mapped to 'fooboo'
	Ex:
		lst = [3, 4, 1, 3, 5, 15, 7] => Should return ['foo', 4, 1, 'foo', 'boo', 'fooboo', 7]
		lst = [ ] => Should return [ ]
		lst = [5, 30, 3] => Should return ['boo', 'fooboo', 'foo']


	Crie uma função chamada foobooMultiplos(lst), que recebe uma lista com números e mapeia essa lista de uma forma os números múltiplos 
	de 3 sejam substituídos por 'foo', e aqueles que são múltiplos de 5 sejam substituídos por 'boo'. 
	Números que sejam simultânemante múltiplos de 3 e 5 devem ser mapeados para 'fooboo'
*/


// solution 1
function foobooMultiples(lst) {

	let a = []

	lst.forEach(n => {

		if (n % 3 !== 0 && n % 5 !== 0) {
			a.push(n)
		}
		else {

			if (n % 3 === 0 && n % 5 === 0) {
				a.push('fooboo')
			}
			else {

				if (n % 3 === 0) {
					a.push('foo')
				}
				if (n % 5 === 0) {
					a.push('boo')
				}
			}
		}
	})
	return a
}