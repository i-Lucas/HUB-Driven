/*
	From now on, we will train to use the most common Loops structure, the for structures.
	To start, write the function print100(),
	which prints the numbers from 100 to 0 in descending order.

	A partir de agora vamos treinar a utilização da estrutura de Loops mais comum, as estruturas for. 
	Para começar escreva a função imprime100(), 
	que imprime em ordem decrescente os números de 100 até 0.
*/


// solution
function print100() {

    let x = 100
    while (x >= 0) {
        console.log(x)
        x--;
    }
}


/*
	In this exercise create a function called pairsUp(x).
	This function will print all even numbers from 0 to the parameter x (positive integer) passed to it.
	It must include the parameter x if it is even.

	Nesse exercício crie uma função chamada paresAte(x). 
	Essa função vai imprimir todos os números pares de 0 até o parâmetro x (inteiro positivo) passado para ela. 
	Ela deve incluir o parâmetro x caso ele seja par.
*/


// solution
function pairsUp(x) {

    for (let i = 0; i <= x; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}


// 	Refactor the printInterval(x,y) function to use a for structure instead of the while structure
// 	Refatore a função printInterval(x,y) para utilizar uma estrutura for, no lugar da estrutura while


// solution
function printInterval(x, y) {
	
    let b = x+y
    for (let i = 0; i <= b; i++) {
        while (x <= y) {
            console.log(x);
            x++;
        }
    }
}