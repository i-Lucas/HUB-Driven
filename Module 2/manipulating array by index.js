/*
	Create a function called middleOne(lst), which takes an array of integers and returns the value of the central element,
	if the array has an even number of elements, return the average between the two central elements.
	Ex:
		lst = [1, 6, 5, 4, 9] => 5
		lst = [1, 6, 5, 4, 9, 8] => 4.5

	Crie uma função chamada middleOne(lst), que recebe uma array de inteiros e retorna o valor do elemento central,
	caso a array apresente um número par de elementos, retorne a média entre os dois elementos centrais.
	Ex:
	    lst = [1, 6, 5, 4, 9] => 5
	    lst = [1, 6, 5, 4, 9, 8] => 4.5
*/


// solution
function middleOne(list) {

	const middle = Math.floor(list.length / 2)

	if(list.length % 2 === 0) {
		return (list[middle] + list[middle -1]) / 2
	}
	return list[middle]
}


// solution 2
function middleOne(list) {

    const middle = Math.floor(list.length / 2)
    const isPair = (array) => array.length % 2 === 0 ? true : false
    return isPair(list) ? (list[middle] + list[middle - 1]) / 2 : list[middle]
}


/*
	Create a function called insert(x, lst), which takes a number x and an ordered array of numbers and correctly inserts x at the proper position.
	Ex:
		x = 4, lst = [1, 2, 2, 2, 4, 5, 8] => Should return [1, 2, 2, 2, 4, 4, 5, 8]
		x = 10, lst = [2, 4, 6, 8] => Should return [2, 4, 6, 8, 10]
		x = 5, lst = [ ] => Should return [5]


	Crie uma função chamada insere(x, lst), que recebe um número x e uma array ordenada de números e insere corretamente x na posição adequada.
	Ex:
	    x = 4, lst = [1, 2, 2, 2, 4, 5, 8] => Deve retornar [1, 2, 2, 2, 4, 4, 5, 8]
	    x = 10, lst = [2, 4, 6, 8] => Deve retornar [2, 4, 6, 8, 10]
	    x = 5, lst = [ ] => Deve retornar [5]
*/


// solution
function insert(x, list) {
	return list.push(x), list.sort((a, b) => a - b)
}


/*
	Create a function called returnPoints(lst), which takes a list of numbers and returns the first and last elements of that list in a new list.
	Ex:
		lst = [2, 3, 5, 7, 8] => Should return [2, 8]
		lst = [ 3 ] => Should return [ 3 ]
		lst = [ ] => Should return [ ]

	Crie uma função chamada retornaPontas(lst), que recebe uma lista de números e retorna o primeiro e o último elemento dessa lista em uma nova lista.
	Ex:
	    lst = [2, 3, 5, 7, 8] => Deve retornar [2, 8]
	    lst = [ 3 ] => Deve retornar [ 3 ]
	    lst = [ ] => Deve retornar [ ]
*/


// solution 1
function returnPoints(list) {
    if(list.length <= 1) return [...list]
    return new Array(list[0], list[list.length - 1])
}


// solution 2
const returnPoints2 = (list) => list.length <= 1 ? [...list] : new Array(list[0], list[list.length - 1])


/*
	Create a function called swapPoints(lst) that receives a list and must exchange positions between
	the first and last elements, finally, should return a new list with these elements reordered.
	Ex:
		lst = [3, 2, 4, 5] => Should return [5, 2, 4, 3]
		lst = [2] => Should return [2]
		lst = [ ] => Should return [ ]

	Crie uma função chamada swapPoints(lst) que recebe uma lista e deve fazer uma troca de posições entre 
	o primeiro e o último elemento, por fim deve retornar uma nova lista com esses elementos reordenados.
	Ex:
	    lst = [3, 2, 4, 5] => Deve retornar [5, 2, 4, 3]
	    lst = [2] => Deve retornar [2]
	    lst = [ ] => Deve retornar [ ]
*/


// solution 
function swapPoints(list) {

    let lastI = list.indexOf(list[list.length - 1]), r = list.splice(list.indexOf(list[0]), 1, list[list.length - 1])
    list.splice(lastI, 1, ...r)
    return list
}


// solution 2
function swapPoints(list) {

    let first = list[0], last = list[list.length - 1], firstI = list.indexOf(first), lastI = list.indexOf(last)
    list[firstI] = last, list[lastI] = first
    return list
}


// solution 3
function swapPoints3(list) {

    if(list.length === 0) return []
    let last = list.pop(), first = list.shift()
    list.unshift(last), list.push(first)
    return list
}


/*
	Create the function called swapSmallerNumber(lst) that takes a list, loops through that list looking for the smallest number,
	and performs a position swap between the smallest number and the first element of the array.
	Ex:
		lst = [5, 6, 8, 4, 5, 9] => Should return [4, 6, 8, 5, 5, 9]
		lst = [ 2 ] => Should return [ 2 ]
		lst = [4, 5, 2, 4, 5, 2] => Should return [2, 5, 4, 4, 5, 2]
		lst = [ ] => Should return [ ]


	Crie a função chamada swapMenorNumero(lst) que recebe uma lista, percorre essa lista em busca do menor número, 
	e realiza uma troca de posição entre o menor número e o primeiro elemento da array.
	Ex:
	    lst = [5, 6, 8, 4, 5, 9] => Deve retornar [4, 6, 8, 5, 5, 9]
	    lst = [ 2 ] => Deve retornar [ 2 ]
	    lst = [4, 5, 2, 4, 5, 2] => Deve retornar [2, 5, 4, 4, 5, 2]
	    lst = [ ] => Deve retornar [ ]
*/


// solution
function swapSmallerNumber(list) {

    if (list.length === 0) return []
    let candidate = list[0], smaller = 0

    list.forEach((number, index) => {

        if (number < candidate) {
            candidate = number   
       		smaller = index
        }
    })

    let old = list[0]
    list[0] = candidate
    list[smaller] = old
    return list   
}


/*
	Create a function called paresPeers(lst) that receives a list and should return a new list with just the
	elements that are even and that are at even indices in the original list.
	Ex:
		lst = [0, 1, 2, 3, 4, 5] => Should return [0, 2, 4]
		lst = [1, 2, 10, 12, 13, 4] => Should return [10]
		lst = [] => Should return []

	Crie uma função chamada paresPares(lst) que recebe uma lista e deve retornar uma nova lista apenas com os 
	elementos que são pares e que se encontram em índices pares na lista original.
	Ex:
	    lst = [0, 1, 2, 3, 4, 5] => Deve retornar [0, 2, 4]
	    lst = [1, 2, 10, 12, 13, 4] => Deve retornar [10]
	    lst = [] => Deve retornar []
*/


// solution
function pairsPairs(list) {

    const isPair = (number) => number % 2 === 0 ? true : false
    const check = (number, index) => isPair(number) && isPair(index) ? true : false
    return list.filter((number, index) => check(number, index))
}


// solution 2
const pairsPairs2 = (list) => list.filter((number, index) => number % 2 === 0 && index % 2 === 0)


/*
	Create a function called displace(lst), which takes a list and returns a new list with the elements
	shifted one position to the right, and where the last element of the received list will be the first of the new list.
	Ex:
		lst = [3, 4, 5, 6, 7] => Should return [7, 3, 4, 5, 6]
		lst = [5, 'apple', 9, 'cashews', 15, 'grapes'] => Should return ['grapes', '5, 'apple', 9, 'cashews', 15]
		lst = [ ] => Must return empty

	Crie uma função chamada desloca(lst), que recebe uma lista e retorna uma nova lista com os elementos 
	deslocados uma posição a direita, e onde o último elemento da lista recebida será o primeiro da nova lista.
	Ex:
	    lst = [3, 4, 5, 6, 7] => Deve retornar [7, 3, 4, 5, 6]
	    lst = [5, 'maça', 9, 'cajus', 15, 'uvas'] => Deve retornar ['uvas', '5, 'maça', 9, 'cajus', 15]
	    lst = [ ] => Deve retornar vazia
*/


// solution 1
function displace(list) {

	let size = list.length, endlist = [list[size - 1]], end = list.length - 1
	if(size === 0) return []

	for(let i = 0; i < end; i++) { 

		endlist.push(list[i])
	}

	return endlist
}


// solution 2
function displace2(list) {

	let copy = list
	list.forEach(number => {

		copy.unshift(list.pop())
	})

	return copy
}


// solution 3
function displace3(list) {

	for(let i of list) {

		list.unshift(list.pop())
	}

	return list
}


/*
	Create a function called removeImpares(lst), which takes a list and returns a new list without the elements of the odd indices of the received list.
	Ex:
		lst = [0, 1, 2, 3, 4, 5] => Should return [0, 2, 4]
		lst = ['yes', 'no', 'yes', 'no', 'yes', 'no',] => Should return ['yes', 'yes', 'yes']


	Crie uma função chamada removeImpares(lst), que recebe uma lista e retorna uma nova lista sem os elementos dos índices ímpares da lista recebida.
	Ex:
	    lst = [0, 1, 2, 3, 4, 5] => Deve retornar [0, 2, 4]
	    lst = ['sim', 'não', 'sim', 'não', 'sim', 'não',] => Deve retornar ['sim', 'sim', 'sim']
*/


// solution 1
function removeOdd(list) {
    return list.filter(number => number % 2 !== 0)
}



// solution 2
const removeOdd2 = (list) => list.filter(number => number % 2 !== 0)