/*
	Create a function called checkLetter(c), which takes a string of one character
	(a letter) and returns whether the letter is a "Vowel" or a "Consonant".

	Crie uma função chamada verificaLetra(c), que recebe uma string de um caracter 
	(uma letra) e retorna se a letra é uma "Vogal" ou uma "Consoante".
*/


// solution
function checkLetter(c) {

    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u ') {
        return 'Vowel'
    }
	return 'Consonant'
}


/*
	Write a function called check25(x, y) that takes two numbers and checks whether the number 25 is contained in the range (x, y).
	This function should return true if 25 is contained in the range and false otherwise.

	Escreva uma função chamada verifica25(x, y) que recebe dois números e verifica se o número 25 está contido no intervalo (x, y). 
	Essa função deve retornar true caso 25 esteja contido no intervalo e false caso contrário.
*/


// solution
function check25(x, y) {

    if( 25 > x && 25 < y) {
        return true
    }
    return false
}   


/*
	Create a function called testExactRoot() that takes a number as a parameter
	and calculates the square root of that number and checks whether the root is exact or not.
	If the root is exact return true, otherwise return false.

	Crie uma função chamada testeRaizExata() que recebe um número como parâmetro 
	e calcula a raíz quadrada desse número e verifica se a raíz é exata ou não.
	Se a raíz for exata retorne true, senão retorne false.
*/


// solution
function testExactRoot(x) {
    
    let r = Math.sqrt(x)
    if(r % 1 === 0 ) { return true }
    return false
}


/*
	In this exercise you need to create the function checkLoan(income, amount, employee). This function takes three parameters,
	the first two are numerical parameters that respectively represent the person's salary in reais and the loan amount
	she wants to do, the last parameter is a boolean that indicates whether the person is employed or not.

	The conditions are as follows:

		If a person does not have a job, he cannot take out a loan.
		If she has a job, then she can borrow up to 10x her income.
	It must return true in case the person can apply for the loan, or false otherwise.


	Nesse exercício você precisa criar a função verificaEmprestimo(renda, valor, empregado). Essa função recebe três parâmetros, 
	os dois primeiros são parâmetros numéricos que representam respectivamente o salário da pessoa em reais e o valor do empréstimo 
	que ela deseja fazer, já o último parâmetro é um booleano que indica se a pessoa está empregada ou não.

	As condições são as seguintes:

		Se a pessoa não possui emprego, não pode tirar um empréstimo.
		Se ela tiver um emprego, então ela pode tirar um valor de empréstimo até 10x maior que sua renda.
	Deve retornar true para caso a pessoa possa pedir o empréstimo, ou false caso contrário.
*/


// solution
function checkLoan(income, amount, employee) {

    if(!employee) { return false }

    else {
        if(amount > income * 10) { return false }
        return true
    }
    return false
}


/*
	In this exercise we will create a function called checkBolsa
	(numFamiliars, IncomeFamiliar, averageENEM, RedacaoENEM, StudiedPublica, Scholar EM).
	These parameters represent respectively:

		numFamiliars: number of family members
		IncomeFamiliar: number that represents the family income
		mediaENEM: number that represents the average score in ENEM
		redacaoENEM: number that represents the grade in the ENEM essay
		studiedPublica: boolean that indicates if you studied in a public school
		bolsistaEM: Boolean that indicates whether the student was a scholarship holder during High School

	The conditions for the scholarship to be accepted or not are:

		Regardless of the type of scholarship, students who have zeroed the essay or had an average score of less than 450 in the ENEM grade are excluded.
		Students who attended high school in a private school without a scholarship are not eligible for the scholarship.
		To receive a full scholarship, the family income cannot exceed 1.5 minimum wages per member.
		For the partial scholarship, the family cannot earn more than 3 minimum wages per member.

	Consider the minimum wage as having a value of R$ 1100.00. Your function should return false if the person does not meet the conditions,
	1 in the case of a full scholarship and 2 in the case of a partial scholarship.


	Nesse exercício vamos criar uma função chamada verificaBolsa
	(numFamiliares, rendaFamiliar, mediaENEM, redacaoENEM, estudouPublica, bolsistaEM). 
	Esses parâmetros representam respectivamente:

		numFamiliares: número de familiares
		rendaFamiliar: número que representa a renda familiar
		mediaENEM: número que representa a nota média no ENEM
		redacaoENEM: número que representa a nota na redação do ENEM
		estudouPublica: booleano que indica se estudou em escola pública
		bolsistaEM: booleano que indica se o aluno era bolsista durante o Ensino Médio

	As condições para a bolsa ser aceita ou não são:

		Independente do tipo de bolsa, são excluídos estudantes que zeraram a redação ou tiveram uma média de pontos menor que 450 na nota do ENEM.
		Não são elegíveis a bolsa estudantes que cursaram o Ensino Médio em escola particular sem bolsa.
		Para receber bolsa integral, a renda familiar não poder superar 1.5 salários mínimos por integrante.
		Para a bolsa parcial, a família não pode ter renda superior a 3 salários mínimos por integrante.

	Considere o salário mínimo como tendo um valor de R$ 1100,00. A sua função deve retornar false caso a pessoa não atenda as condições, 
	1 no caso de bolsa integral e 2 no caso de bolsa parcial.
*/


// solution
function verificaBolsa(numFamiliares, rendaFamiliar, mediaENEM, redacaoENEM, estudouPublica, bolsistaEM) {

    if (mediaENEM < 450 || redacaoENEM === 0 ) {
        return false
    }

    if(estudouPublica === false && bolsistaEM === false ) {
        return false
    }

    if(rendaFamiliar < (numFamiliares * 1650 )) {
        return 1
    }

    if(rendaFamiliar < (numFamiliares * 3300 )) {
        return 2
    }

    else return false

}


/*
	The fictitious NGO that you helped in the exercise of the previous Module, opened two new offices, in Portugal and Egypt.
	But these new countries have different laws to allow their citizens to consume alcohol.

	In Portugal, the legal age for consumption of Beers and Wines is 16 years old, and the other drinks are 18 years old.
	In Egypt, beer is allowed from the age of 18, while other drinks are only allowed after the age of 21.

	Your isLegal(age, country) function, needs to be updated to isLegal(age, country, drink = ""),
	so that it can receive this new parameter that indicates which drink is being purchased.

	Tip: By defining the function like this: isLegal(age, country, drink = ""), we are saying that when calling the function,
	if no parameter indicating a value for the drink variable is passed, we want the value of drink to be an empty string("").

	Again looking at our table, we have:

		Brazil: 18 years
		USA: 21 years
		Paraguay: 20 years
		Jamaica: 16 years
		Iran: never
		Armenia: no age limit
		Portugal: beer or wine 16 years old, other alcoholic beverages 18 years old
		Egypt: beer 18 years, other drinks 21 years

	Note: For test questions, consider the strings of country names being
	"brazil", "usa", "paraguay", "jamaica", "ira", "armenia", "portugal" and "egypt".


	A fictícia ONG que você ajudou no exercício do Módulo anterior, abriu duas novas sedes, em Portugal e no Egito. 
	Mas esses novos países tem leis diferentes para permitir o consumo de álcool de seus cidadãos.

	Em Portugal a idade legal para consumo de Cervejas e Vinhos é 16 anos, e as demais bebidas 18 anos. 
	Já no Egito, a Cerveja é permitida a partir dos 18 anos, enquanto outras bebidas são permitidas apenas após os 21 anos.

	A sua função isLegal(age, country), precisa ser atualizada para isLegal(age, country, drink = ""), 
	para que ela possa receber esse novo parâmetro que indica qual a bebida que está sendo comprada.

	Dica: Ao definir a função dessa forma: isLegal(age, country, drink = ""), estamos dizendo que ao chamar a função, 
	caso não seja passado nenhum parâmetro indicando um valor para a variável drink, queremos que o valor de drink seja uma string vazia("").

	Novamente observando nossa tabela, temos:

		Brasil: 18 anos
		EUA: 21 anos
		Paraguai: 20 anos
		Jamaica: 16 anos
		Irã: nunca
		Armênia: sem limite de idade
		Portugal: cerveja ou vinho 16 anos, demais bebidas alcoólicas 18 anos
		Egito: cerveja 18 anos, demais bebidas 21 anos

	Obs: Para quesitos de testes, considere as strings dos nomes dos países sendo 
	"brasil", "eua", "paraguai", "jamaica", "ira", "armenia", "portugal" e "egito".
*/


//solution ( bad solution )
function isLegal(age, country, drink) {

	if (country == 'egito') {
		if (drink == 'cerveja') {
			if (age >= 18 ) { return true }    
		}
		else {
			if (age >= 21) { return true }           
			else { return false} 	
		}
	}
	if (country == 'portugal') {
		if (drink == 'cerveja' || drink == 'vinho') {
			if(age >= 16) { return true }
		}
		else {	
			if(age >= 18) { return true }
			else { return false }			
		}
	}

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
		if (country == 'armenia') { return true 
	}
}