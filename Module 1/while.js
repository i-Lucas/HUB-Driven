/*
	We are going to work with while loop structures, so the solutions will only present this command.
	Write the printNumbers() function, which takes no parameters and prints the numbers from 1 to 10. Use 10 prints in the console.
	Remember to use a while loop structure.

	PS: Don't forget to increment the control variable at the end of the while,
	or change the while condition value to false at some point, to avoid infinite loops!


	Vamos trabalhar estruturas de loops do tipo while, por isso as soluções apresentarão apenas esse comando.
	Escreva a função printNumbers(), que não recebe parâmetros e imprime os números de 1 a 10. Use 10 impressões no console. 
	Lembre-se de usar uma estrutura de loop while.

	PS: Não esqueça de incrementar a variável de controle no final do while, 
	ou alterar o valor da condição do while para false em algum momento, para evitar loops infinitos!
*/


// solution
function printNumbers() {

	let n = 10
    while(n--) {
        console.log(n)
    }
}


/*
	In this exercise write the function printInterval(x, y), which takes two numbers 
	as parameters and prints all numbers in the interval [x,y].

	Nesse exercício escreva a função printInterval(x, y), que recebe dois números 
	como parâmetros e imprime todos os números no intervalo [x,y].
*/


// solution
function printInterval(x, y) {

   let counter = x
    while (counter <= y) {
       console.log(counter)
       counter ++
   }
}


/*
	In this exercise, rewrite the function repeatCommands(), 
	using the while structure without changing the printed result.

	Neste exercício reescreva a função repetirComandos(), 
	utilizando-se da estrutura while sem alterar o resultado impresso.
*/


// solution
function repeatCommands(x) {
  
  let i = 0
  while (i < x) {
      sum1(i)
      multiply2(i)
      i++
  }
}

const sum1 = (n) => console.log(n+1);
const multiply2 = (n) => console.log(n*2)