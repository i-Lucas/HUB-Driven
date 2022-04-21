/*
	Write the function transformInArray(str1, str2, str3),
	which takes three strings and returns an array with the strings in the same order each occupying a position

	Escreva a função transformaEmArray(str1, str2, str3), 
	que recebe três strings e retorna uma array com as strings na mesma ordem cada uma ocupando uma posição
*/


// solution
function transformInArray(str1, str2, str3) {

    let array = []
    array.push(str1)
    array.push(str2)
    array.push(str3)
    return array
}


/*
	Create a function called checkPoints(array), which takes an array of numbers of any size
	and checks if the first element is greater than the last. If true return true otherwise return false.

	Crie uma função chamada verificaPontas(array), que recebe uma array de números de tamanho qualquer 
	e verifica se o primeiro elemento é maior que o último. Caso verdadeiro retorne true caso contrário retorne false.
*/


// solution
const checkPoints = (array) => array[0] >= array.length-1 ? true : false


/*
	Write the returnMiddleOne(array) function, which takes a list of numbers and returns the number that is in the central index.
	In the case of arrays with an even number of items, the index chosen must be the smaller of the two central indices.
	
	Escreva a função returnMiddleOne(array), que recebe uma lista de números e retorna o número que está no índice central. 
	Em caso de arrays com quantidade par de itens, o índice escolhido deve ser o menor dos dois índices centrais.
*/


// solution
function returnMiddleOne(array) {

    let c = (array.length - 1) / 2
    if (array.length % 2 === 0) {

        let c = 0
        for(let i=0; i<array.length; i++){
            c++
        }
        x = (c / 2) - 1
        return array[x]
    }
    return array[c]
}


/*
	In this exercise write the function called installment(value), which receives the value of a product as a parameter
	and returns a list with the values of the installments, when this product is divided into 3x, 6x and 10x.

	Ex: installment (1000) must return the list [333.33, 166.67, 100.00]
	Format the numbers so that they only show up to two decimal places in the answer.


	Nesse exercício escreva a função chamada parcelamento(valor), que recebe o valor de um produto como parâmetro 
	e retorna uma lista com os valores das parcelas, quando esse produto for parcelado em 3x, 6x e 10x.

	Ex: parcelamento(1000) deve rertornar a lista [333.33, 166.67, 100.00]
	Formate os números para que eles só apresentem até duas casas decimais na resposta.
*/


// solution
const installment = (value) => [(value / 3).toFixed(2), (value / 6).toFixed(2), (value / 10).toFixed(2)]