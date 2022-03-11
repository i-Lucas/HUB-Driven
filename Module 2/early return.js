/*
	Create a function called multipleOfSix(lst), which takes a list and returns the first multiple of six value found in that array. 
	If multiples of 6 are not found, the function must return -1.

	Input: lst = [8, 4, 4, 2, 4,12, 7, 6, 5] => Should return 12


	Crie uma função chamada multiploDeSeis(lst), que recebe uma lista e retorna o primeiro valor múltiplo de seis encontrado nessa array. 
	Caso não seja encontrado múltiplos de 6, a função deve retornar -1.

	Entrada: lst = [8, 4, 4, 2, 4,12, 7, 6, 5] => Deve retornar 12
*/


// solution
function multipleOfSix(lst) {
    for (let i = 0; i < lst.length; i++) {

        if (lst[i] % 6 === 0) {
            return lst[i]
        }
    }
    return -1
}

// alternative solution
function multipleOfSix2(lst) {

	let r = lst.find(element => element % 6 === 0)
	if(r !== undefined) return r
	return -1
}


/*
	Create a function called string3(lst), which takes a list of strings and returns the first 3-letter string found.
	If there are no strings of length 3, return an empty string.

	Ex: lst = ["rice", "land", "sky", "water"] => Should return "sky"
	lst = ["car", "engineering"] => Should return ""


	Crie uma função chamada string3(lst), que recebe uma lista de strings e retorna a primeira string de 3 letras encontrada. 
	Caso não exista strings de tamanho 3, retorne uma string vazia.

	Ex: lst = ["arroz", "terra", "céu", "água"] => Deve retornar "céu"
	lst = ["carro", "engenharia"] => Deve retornar ""
*/


// solution
function string3(lst) {

    for (let i = 0; i < lst.length; i++) {
        if (lst[i].length === 3) {
            return lst[i]
        }
    }
    return ''
}

// alternative solution
function string3s2(lst) {

	let r = lst.find(element => element.length === 3)
	if(r !== undefined) return r
	return ''
}


/*
	Create a function called negativePar(lst), which receives an array of numbers and must return the first
	value that is both even and negative. If there are no values of this type, the function must return false.

	Ex: lst = [3, 2, -5, -2, 5, -7, 12.5] => Should return -2
		lst = [32, 2, 45, 22, 6, 234, 4] => Should return false


	Crie uma função que se chama numParNegativo(lst), que recebe uma array de números e deve retornar o primeiro 
	valor que é simultânemente par e negativo. Caso não exista valores desse tipo, a função deve retornar false.

	Ex:	lst = [3, 2, -5, -2, 5, -7, 12.5] => Deve retornar -2
	    lst = [32, 2, 45, 22, 6, 234, 4] => Deve retornar false
*/


// solution
function negativePar(lst) {

    for (let i = 0; i < lst.length; i++) {

        let number = lst[i]
        if (number % 2 === 0 && number < 0) {
            return number
        }
    }
    return false
}

// alternative solution
function negativePar2(lst) {

	let r = lst.find(element => element % 2 === 0 && element < 0)
	if(r !== undefined) return r
	return false
}


/*
	Make a function called firstString(lst), which takes a list and returns the first string found in that list.
	If there are no strings in this list, the function must return false.

	Ex: lst = [2, 4.3, [3, -5], [], "car", 32, "technician"] => Should return "car"
		lst = [2, 4, 3.4, [-7, -2], 5, 6] => Should return false


	Faça uma função chamada primeiraString(lst), que recebe uma lista e retorna a primeira string encontrada nessa lista. 
	Caso não existam strings nessa lista, a função deve retornar false.

	Ex: lst = [2, 4.3, [3, -5], [], "carro", 32, "técnico"] => Deve retornar "carro"
	    lst = [2, 4, 3.4, [-7, -2], 5, 6] => Deve retornar false 
*/


// solution
function firstString(lst) {

    for (let i = 0; i < lst.length; i++) {
        let element = lst[i]
        if (typeof (element) === 'string') {
            return element
        }
    }
    return false
}

// alternative solution
function firstString2(lst) {

	let r = lst.find(element =>  typeof(element) === 'string')
	if(r !== undefined) return r
	return false
}


/*
	Create a function called firstDecimal(lst), this function takes an array and returns the
	first decimal number it finds in the array, if there are no decimal numbers, this function should return -1.

	Ex: lst = [3, 4.3, 3, 77] => Should return 4.3


	Crie uma função chamada primeiroDecimal(lst), essa função recebe uma array e retorna o 
	primeiro número decimal que ela encontrar na array, caso não existam números decimais, essa função deve retornar -1.

	Ex: lst = [3, 4.3, 3, 77] => Deve retornar 4.3	    
*/


// solution
function firstDecimal(lst) {

    for (let i = 0; i < lst.length; i++) {

        let element = lst[i]

        if (!isNaN(element)) {
            if (parseInt(element) != parseFloat(element)) {
                return element;
            }
        }
    }
    return -1
}

// alternative solution
function firstDecimal2(lst) {

	let r = lst.find(element => element % 1 !== 0)
	if(r !== undefined) return r
	return -1
}


/*
	Write a function called multipleOf(x, lst), which takes two parameters, the first is an integer,
	and the second is an array of integers. The function must look for the first multiple of x and return the index of that element.
	If it doesn't find any multiples when traversing the array, it should return -1.

	Ex: x = 5, lst = [2, 8, 4, 15, 5, 12] => Should return 3
		x =123 lst = [1, 2, 3, 4] => Should return -1


	Escreva uma função chamada multiploDe(x, lst), que recebe dois parâmetros, o primeiro é um número inteiro, 
	e o segundo é uma array de números inteiros. A função deve procurar o primeiro múltiplo de x e retornar o índice desse elemento. 
	Caso não encontre nenhum múltiplo ao atravessar a array deve retornar -1.

	Ex: x = 5, lst = [2, 8, 4, 15, 5, 12] => Deve retornar 3
		x =123 lst = [1, 2, 3, 4] => Deve retornar -1
*/


// solution
function multipleOf(x, lst) {

    for (let i = 0; i < lst.length; i++) {

        let element = lst[i]
        if (element % x === 0) {
            return lst.indexOf(element);
        }
    }
    return -1
}

// alternative solution
function multipleOf2(x, lst) {

	let r = lst.find(element => element % x === 0)
	if(r !== undefined) return lst.indexOf(r)
	return -1
}


/*
	Creates a function called doubleIndexValue(lst), which takes a list of integers and parses
	this list in search of a case where the value of the element is twice the index that that element occupies.
	Return the index value if such a case exists, and false otherwise.

	Ex: lst = [12, 4, 8, 2, 7, 10, 4, 2] => Should return 5


	Cria uma função chamada valorDobraIndice(lst), que recebe uma lista de inteiros e que analisa 
	essa lista em procura de um caso onde o valor do elemento seja o dobro do índice que aquele elemento ocupa. 
	Retorne o valor do índice caso exista esse caso, e false caso contrário.

	Ex: lst = [12, 4, 8, 2, 7, 10, 4, 2] => Deve retornar 5
*/


// solution
function doubleIndexValue(lst) {

    for (let i = 0; i < lst.length; i++) {

        let element = lst[i]
        let index = lst.indexOf(element)

        // console.log(`${element} ${index}`)

        if ((element / 2) === index) {
            return index
        }

    }
    return false
}

// alternative solution
function doubleIndexValue2(lst) {

	e = undefined

	lst.forEach(element => {		
		if((element / 2) === lst.indexOf(element) ) {
			e = lst.indexOf(element)
		}
	})

	if(e !== undefined) return e
	return false
}


/*
	Write a function called squareindex(lst), which takes an array of integers and checks if any element
	has the value of its position in the array squared. Return the value of this element.
	If there is no element that meets this condition, return -1
	Ex:
		lst = [3, 2, 4, 9, 8] => Should return 9
		lst = [2, 6, 4, 3, 1] => Should return 4
		lst = [2, 6, 5, 3, 1] => Should return -1


	Escreva uma função chamada indiceAoQuadrado(lst), que recebe uma array de inteiros e verifica se algum elemento 
	tem o valor da sua posição na array elevado ao quadrado. Retorne o valor desse elemento. 
	Se não existir um elemento que atenda a essa condição retorne -1
	Ex:
		lst = [3, 2, 4, 9, 8] => Deve retornar 9
		lst = [2, 6, 4, 3, 1] => Deve retornar 4
		lst = [2, 6, 5, 3, 1] => Deve retornar -1
*/


// solution
function squareIndex(lst) {

    for (let i = 0; i < lst.length; i++) {

        let element = lst[i]
        let index = lst.indexOf(element)

        if ((index * index) === element) {
            return element
        }
    }
    return -1
}

// alternative solution
function squareIndex2(lst) {

    e = undefined, x = false

    lst.forEach(element => {

        if ((lst.indexOf(element) * lst.indexOf(element)) === element) {
            if (!x) { e = element, x = true }
        }
    })

    if (e !== undefined) return e
    return -1
}


/*
	Create a function called lastNegative(lst) that takes an array, and needs to return the element's value
	with the highest index of that array which is negative. If the function does not find negative values, it must return false.

	Ex: lst = [4, 1, -3, 3, -2, 5, 12] => Should return -2


	Crie uma função chamada ultimoNegativo(lst) que recebe uma array, e precisa retornar o valor do elemento 
	com o maior índice dessa array que é negativo. Caso a função não encontre valores negativos deve retornar false.

	Ex: lst = [4, 1, -3, 3, -2, 5, 12] => Deve retornar -2	    
*/


// solution
function lastNegative(lst) {

    let g = []

    for (let i = 0; i < lst.length; i++) {

        if (lst[i] < 0) {
            g.push(lst.indexOf(lst[i]))
        }
    }

    if (g.length !== 0 ) {

        let max = Math.max(...g);
        return lst[max]
    }
    
    return false
}


// alternative solution
function lastNegative2(lst) {

    let g = []
    lst.forEach(element => { 
    	if (element < 0) { 
    		g.push(lst.indexOf(element)) 
    	} 
    })
    if (g.length !== 0 ) { 
    	return lst[Math.max(...g)] 
    }
    return false
}