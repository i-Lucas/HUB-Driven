/*
	Create a function called Words remover(str), which will receive a string. This function should remove the
	words with 3 characters or less and return a new string containing only the unremoved words.
	Ex:
		str1 = "Lorem Ipsum is simply dummy text of the printing" => "Lorem Ipsum simply dummy text printing"
		str2 = "It was a very funny house" => "very funny house"
		str3 = "" => ""

	Crie uma função chamada removedorDePalavras(str), que irá receber uma string. Essa função deve remover as 
	palavras com 3 caracteres ou menos e retornar uma nova string contendo apenas as palavras não removidas.
*/


// solution 
function wordsRemover (str) {
    return str.split(' ').filter(x => x.length > 3).join(' ')
}


// solution 2
const wordsRemover2 = (str) => str.split(' ').filter(x => x.length > 3).join(' ')


/*
	Create the joinArray(lst) function, which takes a list of strings and should return
	a new string with the elements of the received list separated by a space between them.
	Ex:
		lst = ['a', 'b', 'c'] => Should return "a b c"
		lst = ['Marco', 'Polo'] => Should return "Marco Polo"
		lst = [ ] => Should return ""

	Crie a função juntaArray(lst), que recebe uma lista de strings e deve retornar 
	uma nova string com os elementos da lista recebida separados por um espaço entre eles.
*/


// solution 1
function joinArray(lst) {

    let result = '';
    for (let i in lst) { result += lst[i] + ' ' }     
    return result.trim();
}


// solution 2
const joinArray2 = (lst) => lst.join(" ")


/*
	Create a function createList(str), which takes a string, and separates that string into elements
	using the space character as an element divider. Finally return this list.
	Ex:
		str = "For those who are drowning, an alligator is trunk" => Should return ['To', 'who', 'ta', 'if', 'drowning', 'alligator', 'is', 'trunk']
		str = "Child of fish, little fish is" => Should return ['Child', 'of', 'fish,', 'little fish', 'is']

	Crie uma função criaLista(str), que recebe uma string, e separa essa string em elementos 
	usando o caractere de espaço como divisor de elementos. Por fim retorne essa lista.
*/


// solution
function createList(str) {
  
    if (str.length === 0) return ''
    return str.split(' ');
}


// solution 2
const createList = (str) => str.length !== 0 ? str.split(' ') : ''


/*
	Create a function called removeAt(x, str), which takes a number x that represents an index of a string, and
	removes the element that in this position. Finally return the string with the element removed.
	If the value of x is beyond the length of this string, no changes should be made to the
	string and it must be returned unchanged.
	Ex:
		x = 0, str= 'abc' => Must return 'bc'
		x = 4, lstr= 'airplane' => Must return 'airplane'
		x = 4, str = 'moto'=> Should return 'moto'
		x = 1, str = ' ' => Must return ' '

	Crie uma função chamada removeAt(x, str), que recebe um número x que representa um índice de uma string, e 
	remove o elemento que nesta posição. Por fim retorne a string com o elemento removido.
	Caso o valor de x esteja além do tamanho dessa string, não devem ser feitas alterações na 
	string e ela deve ser retornada sem sofrer alterações.
*/


// solution
function removeAt(x, str) {

	if(x > str.length)return str
	return str.slice(0, x) + str.slice(x+1) 
}


// solution 2
function removeAt(x, str) {
  return x > str.length ? str : str.substr(0, x) + str.substr(x + 1)
}


// solution 3
const removeAt3 = (x, str) => x > str.length ? str : str.substr(0, x) + str.substr(x + 1)


/*
	Create a function called insertComma(str), which takes a string and adds a comma
	after every word in that string except the last one.
	Ex:
		str = 'Rock Paper Scissors' => Should return 'Rock Paper Scissors'
		str = 'house car motorcycle' => Should return 'house, car, motorcycle'
		str = ' ' => Must return ' '

	Crie uma função chamada insereVirgula(str), que recebe uma string e adiciona uma vírgula 
	depois de cada palavra dessa string, menos na última.
*/


// solution 1
function insertComma(str) {

    return str.length === 0 ? '' : str.split(' ').join(', ')
}


// solution 2
const insertComma = (str) => str.length === 0 ? '' : str.split(' ').join(', ')


/*
	Create a function called checkWord(str, keyword), which takes a string and a keyword.
	This function must return true if this word is found within the string, and false otherwise.
	Ex:
		str = 'Reading over unbalanced tree', keyword = 'tree' => Must return true
		str = 'Living spring and summer', keyword = 'spring' => Should return true
		str = 'Living spring and summer', keyword = 'winter' => Should return false
		str = ' ', keyword = 'house' => Must return false

	Crie uma função chamada verificaPalavra(str, keyword), que recebe uma string e uma palavra chave. 
	Essa função deve retornar true caso essa palavra seja encontrada dentro da string, e false em caso contrário.
*/


// solution 1
function verificaPalavra(str, keyword) {
    return str.indexOf(keyword) > -1
}


// solution 2
const verificaPalavra2 = (str, keyword) => str.indexOf(keyword) > -1


/*
	Create a function called removeMajor(str), which takes a string of words separated by commas and removes the largest
	word of that string. If there is more than one longer word, all of the longest words must be dropped.
	This function returns the list without the longest words.
	Ex:
		str = 'house, motorcycle, car' => Should return 'house, motorcycle'
		str = 'saw, motorcycle, car, house' => Should return 'motorcycle, house'
		str = 'rock, paper, car. saw' => Should return ' '

	Crie a função chamada removeMaior(str), que recebe uma string de palavras separadas por vírgulas e remove a maior 
	palavra dessa string. Se existirem mais de uma maior palavra, todas com o maior comprimento deverão ser retiradas. 
	Essa função retorna a lista sem as maiores palavras.
*/


// solution
function removeMajor(str){

  let auxList = str.split(',').map(item => item.trim())
  let idxList = []
  let maiorTam = 0;
  
  for (let i = 0; i < auxList.length ; i++ ){
    if(auxList[i].length > maiorTam ){
      idxList = []
      idxList.push(i)
      maiorTam = auxList[i].length
    } else if (auxList[i].length == maiorTam){
      idxList.push(i)
    }
  }

  let count = 0
  for(let i = 0; i < idxList.length; i++){
    auxList.splice(idxList[i] - count, 1)
    count++
  }
  return auxList.join(', ')
}


/*
	Create a function called compareNumWords(str1, str2), which takes two strings,
	with words separated by dashes and checks which of the strings has a greater number of words.
	Finally, it must return one of the cases below according to the input conditions.
	Ex:
		str1 = "house - car - license plate" and str2 = "pumpkin - fish" => Should return 'str1 > str2'
		str1 = ''pumpkin - fish'' and str2 = "house - car - license plate" => Should return 'str2 > str1'
		str1 = "house - foot" and str2 = "floor - ceiling" => Should return 'str1 = str2'

	Crie uma função chamada comparaNumPalavras(str1, str2), que recebe duas strings, 
	com palavras separadas por traços e verifica qual das strings tem um maior número de palavras. 
	Por fim deve retornar um dos casos abaixo conforme as condições de entrada.
*/


// solution
function compareNumWords(str1, str2) {
    var str1 = str1.split("-");
    var str2 = str2.split("-");
    if(str1.length > str2.length) {
        return "str1 > str2";
    } else if(str1.length < str2.length) {
        return "str2 > str1";
    } else {
        return "str1 = str2";
    }
}