/*
	In this exercise you will create a function called specialsum(num1, num2) that takes two numbers as parameters.
	The first must be multiplied by 2 and stored in a variable within the function.
	The second must be divided by 2 and must also be stored in a variable within that function.
	This function must return the sum of these two variables, found from the parameters received.

	Nesse exercício você criará uma função chamada somaEspecial(num1, num2) que recebe dois números como parâmetros.
	O primeiro deve ser multiplicado por 2 e armazenado em uma variável dentro da função.
	O segundo deve ser dividido por 2 e também deve ser armazenado em um varíavel dentro dessa função.
	Essa função deve retornar a soma entre essas duas variáveis, encontradas a partir dos parâmetros recebidos.
*/


// solution
const specialSum = (a, b) => (a*2) + (b/2)


/*
	Complete the next function called returnNthPower, using the pow(x, y) method of the JavaScript Math library. 
	It returns the power of exponent 'y' of base 'x'

	Complete a função ao lado chamada retornaEnésimaPotência, utilizando o método pow(x, y) da biblioteca Math do JavaScript. 
	Ela retorna a potência de expoente 'y' da base 'x'
*/


// solution
const returnNthPower = (x, y) => Math.pow(x, y)


/*
	Complete the function called returnRoot() which should take a number as a 
	parameter and return the square root of the received value.

	Complete a função chamada retornaRaiz() que deve receber um número como 
	parâmetro e retonar a raiz quadrada do valor recebido.
*/


// solution
const returnRoot = (n) => Math.sqrt(n)


/*
	Use the round(x) method of the JavaScript Math library to create a function called round(x), 
	which takes as a parameter a decimal number, and returns the nearest integer.

	Utilize o método round(x) da biblioteca Math do JavaScript para criar uma função chamada arredonda(x), 
	que recebe como parâmetro um número decimal, e retorna o inteiro mais próximo.
*/


// solution
const round = (x) => Math.round(x)


/*
	Research the floor(x) method of the JavaScript Math library and create a function called roundDown(x), 
	which takes as a parameter a decimal number and returns the largest integer smaller than the number received.

	Pesquise sobre o método floor(x) da biblioteca Math do JavaScript e crie uma função chamada arredondaParaBaixo(x), 
	que recebe como parâmetro um número decimal e retorna o maior inteiro menor que o número recebido.
*/


// solution
const roundDown = (x) => Math.floor(x)


/*
	Create a function called differenceBetweenAverages(n1, n2) that takes two numbers and calculates two different values, 
	which we will call average1 and average2. They must be calculated following the expressions:

	     average1 = (n1+n2)/2
	     mean2 = n1+n2/2

	Have the function return the difference between these averages (average2 - average1)
	Do you know why the values of these variables are different?


	Crie uma função chamada diferencaEntreMedias(n1, n2) que receba dois números e calcule dois valores diferentes, 
	que chamaremos de media1 e media2. Eles devem ser calculados seguindo as expressões:

	    media1 = (n1+n2)/2
	    media2 = n1+n2/2

	Faça com que a função retorne a diferença entre essas médias (media2 - media1)
	Você sabe dizer porque os valores dessas variáveis são diferentes?
*/


// solution
const differenceBetweenAverages = (n1, n2) => (n1 + n2) / 2 - n1 + n2 /2


/*
	Research the ceil(x) method of the JavaScript Math library and create a function called roundUp(x) 
	that takes as a parameter a decimal number and returns the smallest integer greater than the number received.

	Pesquise sobre o método ceil(x) da biblioteca Math do JavaScript e crie uma função chamada arredondaParaCima(x) 
	que recebe como parâmetro um número decimal e retorna o menor inteiro maior que o número recebido.
*/


// solution
const roundUp = (x) => Math.ceil(x)