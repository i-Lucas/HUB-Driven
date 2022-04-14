/*
	Create a function called largestNumber(list), which takes an array and returns the largest number from that array.
	If the array is empty, return null.
	Example: list = [10, 20, -30, -100, 50, 20] => should return 50


	Crie uma função chamada maiorNumero(lista), que recebe uma array e retorna o maior número dessa array. 
	Caso a array esteja vazia, retorne null.
*/


// // solution 1
function largestNumber(list) {

	if (list.length === 0) return null
	let candidate = lista[0]

	for (let i = 0; i < list.length; i++) {
		if (list[i] > candidate) {
			candidate = list[i]
		}
	}
	return candidate
}


// solution 2
function largestNumber(list) {

	if (list.length === 0) return null
	let candidate = list[0]

	list.forEach(number => {
		if(number > candidate) {
			candidate = number
		}
	})
	return candidate
}


/*
	Create a function called smallestNumber(lst), which takes an array and returns the smallest number from that array.
	Crie uma função chamada menorNumero(lst), que recebe uma array e retorna o menor número dessa array.
*/


// solution 1
function smallestNumber(lst) {

	if (lst.length === 0) return null
	let candidate = lst[0]

	for (let i = 0; i < lst.length; i++) {
		if (lst[i] < m) {
			candidate = lst[i]
		}
	}
	return candidate
}


// solution 2
function smallestNumber(lst) {

	if (lst.length === 0) return null
	let candidate = lst[0]
	
	lst.forEach(number => {

		if(number < candidate) {
			candidate = number
		}
	})
	return candidate
}


/*
	Create a function called lastOdd(lst), which takes an array as input that must be traversed in search of the last odd element.
	It should return the last odd value found. If no odd value is found, null should be returned.
	Ex:
		lst = [7, 3, 9, 10] => Should return 9
		lst = [3, 10, -1] => Should return -1
		lst = [2, 4, 6, 8] => Must return null

	Crie uma função chamada ultimoImpar(lst), que recebe uma array como entrada que deve ser atravessada em busca do último elemento ímpar. 
	Deve retornar o último valor ímpar encontrado. Caso não seja encontrado nenhum valor ímpar, deve ser retornado null.
*/


// solution 1
function lastOdd(lst) {

	let candidate = 0, empty = true
	for (let i = 0; i < lst.length; i++) {

		let element = lst[i]
		if (element % 2 !== 0) {
			candidate = element
			empty = false
		}
	}

	if (empty === true) return null
	return candidate
}


// solution 2
function lastOdd(lst) {

	let candidate = 0, empty = true

	lst.forEach(number => {

		if (number % 2 !== 0) {
			candidate = number
			empty = false
		}
	})

	if (empty === true) return null
	return candidate
}


/*
	Create a function called largestString(lst), which receives an array that can contain any type of structure and variable,
	and which should return the string with the longest length within this array, if there is more than one "longest string" a
	function should return the last one found. If there are no strings in the list, it must return null.
	Ex:
		lst = ['fish', 34.1, 'fire', 'jump', 7] => Should return 'jump'
		lst = [5, 'water', 'sea', ['test']] => Should return 'water'
		lst = [1, 2, 3] => Must return null

	Crie uma função chamada maiorString(lst), que recebe uma array podendo conter qualquer tipo de estrutura e variável, 
	e que deve retornar a string com o maior comprimento dentro dessa array, caso exista mais de uma "maior string" a 
	função deve retornar a última a ser encontrada. Caso não existam strings na lista deve retornar null.
*/


// solution 1
function largestString(lst) {

	let a = [], candidate = 0, big = null

	for (let i = 0; i < lst.length; i++) {
		
		let element = lst[i]
		if (typeof (element) === 'string') {
			a.push(element)
		}
	}

	for(let i = 0; i < a.length; i++) {
		let element = a[i].length

		if(element >= candidate) {
			candidate = element
			big = a[i]
		}
	}

	return big
}


// solution 2
function largestString(lst) {

	let a = [], candidate = 0, big = null

	lst.forEach(element => {

		if (typeof (element) === 'string') {
			a.push(element)
		}
	})

	a.forEach(string => {

		if (string.length >= candidate) {
			candidate = string.length
			big = string
		}
	})
	
	return big
}


/*
	Create a function called posLastEmpty(lst), which takes a list of strings,
	which may or may not be empty and returns the index representing the position of the last empty string.
	If no empty strings are found, this function should return -1.
	Ex:
		lst = ["house", "", "sea", "water", "", "sky"] => Should return 4
		lst = ["", "", ""] => Should return 2
		lst = ["No", "Yes"] => Should return -1

	Crie uma função chamada posLastEmpty(lst), que recebe uma lista de strings, 
	que podem estar vazias ou não e retorna o índice que representa a posição da última string vazia. 
	Caso não sejam encontradas strings vazias essa função deve retornar -1.
*/


// solution 1
function posLastEmpty(lst) {

    let a = -1
    for (let i = 0; i < lst.length; i++) {

        let e = lst[i]
        if (e === '') {
            a = i
        }
    }
    return a
}


// solution 2
function posLastEmpty(lst) {

    let candidate = -1

    lst.forEach( (string, index) => {

        if (string === '') {
            candidate = index
        }
    })
    
    return candidate
}


/*
	Create a function called smallestDecimal(lst), which takes a list and returns the smallest number in decimal format found in the list.
	If there are no numbers in decimal format, return null.
	Ex:
		lst = [3.2, 5, 7.1, 5.4, 3] => Should return 3.2
		lst = [3, 4, 5] => Must return null

	Crie uma função chamada menorDecimal(lst), que recebe uma lista e retorna o menor número em formato decimal encontrado na lista. 
	Caso não existam números no formato decimal retorne null.
*/


// solution 1
function smallestDecimal(lst) {

    let e, a = []
    for (let i = 0; i < lst.length; i++) {

        e = lst[i]

        if (!isNaN(e)) {
            if (parseInt(e) != parseFloat(e)) {
                a.push(e)
            }
        }
    }

    console.log(a)

    let m = a[0]
    for (let i = 0; i < a.length; i++) {
        if (a[i] < m) {
            m = a[i]
        }
    }
    if (a.length === 0) return null
    return m

}


// solution 2
function smallestDecimal(lst) {

    let a = [], candidate

    lst.forEach(number => {

    	if(number % 1 !== 0) {
    		a.push(number)
    	}
    })

    candidate = a[0]
    a.forEach(number => {

    	if(number < candidate) {
    		candidate = number
    	}
    })

    return a.length !== 0 ? candidate : null
}


/*
	Create a function called largestDecimalPart(lst), which takes a list of decimal numbers and returns the largest decimal part,
	between decimal numbers.
	Ex:
		lst = [9423, 5.6, 6.4, 8.1] => Should return 0.6
		lst = [2.2, 2.27] => Should return 0.27

	Crie uma função chamada maiorParteDecimal(lst), que recebe uma lista de números decimais e retorna a maior parte decimal, 
	entre os números decimais.
*/


// solution
function largestDecimalPart(lst) {

    let a = lst.map(elemento => elemento - Math.trunc(elemento))
    return Math.max(...a)
}