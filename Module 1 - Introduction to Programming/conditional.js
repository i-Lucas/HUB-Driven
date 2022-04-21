/*
	Create a function called compareNumbers(num1, num2), the function should return "EQUAL" 
	if the numbers are the same, or "DIFFERENT" if the numbers are different.

	Crie uma função chamada comparaNumeros(num1, num2), a função deve retornar "IGUAIS" 
	caso os números sejam iguais, ou "DIFERENTES" caso os números sejam diferentes.
*/


// solution
const compareNumbers = (n, m) => n === m ? 'EQUAL' : 'DIFFERENT'


/*
	Create a function called franceTime(hour, min) that receives two numeric parameters, 
	the hour and the minute of the time in Brasilia. It returns a string that must contain the time in France. 
	In France the time zone is +5 hours compared to Brazil.
	The formatting of the string that the function returns must be:

	     "HH:MM"

	The function must verify that the values passed as parameters are valid. If the data is entered incorrectly, 
	it should return "Invalid Data"


	Crie uma função chamada horaFranca(hora, min) que recebe dois parâmetros numéricos a hora e o minuto do horário em Brasília. 
	Ela retorna uma string que deve conter o horário na França. Na França o fuso horário é de +5 horas em relação ao Brasil.
	A formatação da string que a função retorna deve ser:

	    "HH:MM"

	A função deve verificar se os valores passados como parâmetros são válidos. 
	Caso os dados sejam informados incorretamente, ela deve retornar "Dados Inválidos"
*/


// solution
const check = (h, m) => h > 24 || h < 0 && m > 60 || m < 0 ? true : false

function franceTime(hour, minute) {

	if (check(hour, minute)) return 'Invalid Data'

	hour += 5
	if(hour >= 24) {

		hour = hour - 24
		return`${hour}:${minute}`
	}

	return `${hour}:${minute}`
}


/*
	Create a function called calculateOneRoot(a, b, c, sign) that will receive the parameters a, b and c representing 
	respectively the coefficients of a quadratic equation, and which also receives the boolean parameter sign.
	This parameter will define which of the two roots we will be calculating.

	If sign = true, then we must calculate the positive root of the equation
	If sign = false, then we must calculate the negative root of the equation

	Your function should return the desired root value correctly.


	Crie uma função chamada calculaUmaRaiz(a, b, c, sinal) que vai receber os parâmetros a, b e c que representam 
	respectivamente os coeficentes de uma equação do segundo grau, e que recebe também o parâmetro booleano sinal. 
	Esse parâmetro vai definir qual das duas raízes estaremos calculando.

	Se sinal = true, então devemos calcular a raíz positiva da equação
	Se sinal = false, então devemos calcular a raíz negativa da equação

	Sua função deve retornar o valor da raíz desejada corretamente.
*/


// solution
function calculateRoot(a, b, c, s) {

    const delta = b * b - 4 * a * c

    if(s) { return (-b + Math.sqrt(delta)) / (2 * a) }

    else return (-b - Math.sqrt(delta)) / (2 * a)
}


/*
	Imagine that you work for an NGO that studies alcohol consumption among teenagers,
	and this NGO is based in 6 different countries Brazil, USA, Paraguay, Jamaica, Iran and Armenia.

	You should create a function called isLegal(age, country) that takes a person's age and their name
	country of origin. This function must return true if the person has legal authorization to ingest drinks
	alcoholic beverages in that country, or false otherwise. Use the information below:

	Table of Countries and their respective legal ages for consumption of alcoholic beverages:

		Brazil: 18 years
		USA: 21 years
		Paraguay: 20 years
		Jamaica: 16 years
		Iran: never
		Armenia: no age limit

	Note: Consider the strings sent by parameter in the function as follows:
	"brazil", "usa", "paraguay", "jamaica", "ira", "armenia"


	Imagine que você trabalhe para uma ONG que estuda o consumo de alcool entre adolescentes, 
	e essa ONG tem base em 6 países diferentes Brasil, EUA, Paraguai, Jamaica, Irã e Armênia.

	Você deve criar uma função chamada isLegal(age, country) que receba a idade de uma pessoa e o nome do seu 
	país de origem. Essa função deve retornar true caso a pessoa tenha autorização legal para ingerir bebidas 
	alcoólicas naquele país, ou false em caso contrário. Utilize as informações abaixo:

	Tabela de Países e suas respectivas idades legais para consumo de bebida alcoólicas:

		Brasil: 18 anos
		EUA: 21 anos
		Paraguai: 20 anos
		Jamaica: 16 anos
		Irã: nunca
		Armênia: sem limite de idade

	Obs: Considere as strings enviadas por parâmetro na função da seguinte forma: 
	"brasil", "eua", "paraguai", "jamaica", "ira", "armenia"
*/


// solution
function isLegal(age, country) {

    if (country == 'brasil') {
        if (age >= 18) { return true } else { return false }
    }
    if (country == 'eua') {
        if (age >= 21) { return true } else { return false }
    }
    if (country == 'paraguai') {
        if (age >= 20) { return true } else { return false }
    }
    if (country == 'jamaica') {
        if (age >= 16) { return true } else { return false }
    }
    if (country == 'ira') { return false }
    if (country == 'armenia') { return true }
}

