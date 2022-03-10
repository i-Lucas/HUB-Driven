/*
	Create a function called uneCompanies(nameA, nameB) that takes two company names and joins them following the model:
	If nameA = "Company A" and nameB = "Company B", then the result should be:
    "Company A & Empresa B S.A."

	Crie uma função chamada uneEmpresas(nomeA, nomeB) que recebe dois nomes de empresas e une eles seguindo o modelo:
	Se nomeA = "Empresa A" e nomeB = "Empresa B", então o resultado deve ser:
	"Empresa A & Empresa B S.A."
*/


// solution
const uneCompanies = (a,b) => `${a} & ${b} S.A.`


/*
	Create a function called getMedia(x, y), 
	knowing that it takes two numbers as a parameter and calculates the average between those numbers.
	We suggest using Template Strings syntax (which can merge variables into strings) to make this function return:

	     "(x + y)/2 = #"

	Information
	Where # represents the calculated average, shown with only two decimal places and x and y must be replaced by their respective values.

	Crie uma função chamada getMedia(x, y), sabendo que ela recebe dois números como parâmetro e calcula a média entre esses números.
	Sugerimos a utilização da sintática de Template Strings (que consegue intercalar variáveis dentro de strings) 
	para fazer com que essa função retorne:

	    "(x + y)/2 = #"

	Onde # representa a média calculada, mostrada com apenas duas casas decimais e x e y devem ser 
	substituídos pelos seus respectivos valores.
*/


// solution
function getMedia (x, y)  { 
	let r = (x + y) / 2
	return `(${x} + ${y}) / 2 = ${r}0` 
}


/*
	Write a function showTaboada(num) capable of receiving a value, and showing the table of this number from 1 to 4. As in the example:
	If num = 2 the function return should be the string:

	     "1x2 = 2, 2x2 = 4, 3x2 = 6 and 4x2 = 8"

	Information
	Tip: Use Template Literals to write the string that should be returned by the function.


	Escreva um função mostraTaboada(num) capaz de receber um valor, e mostrar a taboada desse número de 1 a 4. Conforme o exemplo:
	Se num = 2 o retorno da função dever ser a string:

	"1x2 = 2, 2x2 = 4, 3x2 = 6 e 4x2 = 8"

	Dica: Utilize Template Literals para escrever a string que deverá ser retornada pela função.
*/


// solution
const showTaboada = (n) => `1x${n} =${n}, 2x${n} = ${n * 2}, 3x${n} = ${n * 3} e 4x${n} = ${n*4}`