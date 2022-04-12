/*
    Modify the function below so that it is able to validate a password.
    A password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.
    The password must also contain at least 8 characters.
    As long as the function does not validate the password, it must print "Invalid Password" and ask the user for a new password.
    When the password is correctly entered by the user, the function must be terminated and must return 1.

    function validPassword(hub){
        const uppercase letters = /[A-Z]/
        const lowercase letters = /[a-z]/
        const numbers = /[0-9]/
        const charSpecials = /[!|@|#|$|%|^|&|*|(|)|-|_]/
        let password = hub.QuestionPassword()
    
        return 1;
    }

    Note: The hub parameter contains the helper function for this question.
    Ex:
        If the password is 'Aa0!' => It should return "Invalid Password" and ask the user for a new password
        If the password is 'Aaaaaa0!' => Must end execution and return 1


    Modifique a função abaixo para que ela seja capaz de validar uma senha. 
    Uma senha precisa conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial. 
    A senha também deve conter no mínimo 8 caracteres. 
    Enquanto a função não validar a senha ela deve imprimir "Senha Inválida" e perguntar uma nova senha ao usuário. 
    Quando a senha for inserida corretamente pelo usuário a função deve ser finalizada e deve retornar 1.

    function validaSenha(hub){
        const letrasMaiusculas = /[A-Z]/
        const letrasMinusculas = /[a-z]/
        const numeros = /[0-9]/
        const charEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/
        let senha = hub.perguntaSenha()
    
        return 1;
    }

    Obs.: O parâmetro hub contém a função auxiliar para essa questão.
    Ex:
        Se a senha é 'Aa0!' => Deve retornar "Senha Inválida" e perguntar uma nova senha ao usuário
        Se a senha é 'Aaaaaa0!' => Deve finalizar a execução e retornar 1
*/


// solution
function validPassword(hub){

     const uppercase letters = /[A-Z]/
     const lowercase letters = /[a-z]/
     const numbers = /[0-9]/
     const charSpecials = /[!|@|#|$|%|^|&|*|(|)|-|_]/
     let password = hub.QuestionPassword()

     if(password.length < 8){
         console.log("Invalid Password")
         return validPassword(hub)
     }

     if(!password.match(uppercase letters)){
         console.log("Invalid Password")
         return validPassword(hub)
     }

     if(!password.match(lowercase letters)){
         console.log("Invalid Password")
         return validPassword(hub)
     }

     if(!password.match(numbers)){
         console.log("Invalid Password")
         return validPassword(hub)
     }

     if(!password.match(charSpecials)){
         console.log("Invalid Password")
         return validPassword(hub)
     }

     return 1
}


/*
    Create a function called stopEmZero(lst) that takes a list of integers and while traversing the list adds the elements.
     The loop must be stopped if the function finds an element with value 0 in the list.
     Ex:
         lst = [1, 2, 3, 4, 0, 5, 3] => Should return 10
         lst = [0, 1, 3, 2] => Should return 0
         lst = [3, 4, 2, 1, 5] => Should return 15

    Crie uma função chamada pareEmZero(lst) que recebe uma lista de números inteiros e enquanto atravessa a lista soma os elementos. 
    O loop deve ser interrompido caso a função encontre um elemento com valor 0 na lista.
    Ex:
        lst = [1, 2, 3, 4, 0, 5, 3] => Deve retornar 10
        lst = [0, 1, 3, 2] => Deve retornar 0
        lst = [3, 4, 2, 1, 5] => Deve retornar 15
*/


// solution 1
function stopEmZero(lst) {
    let soma = 0;
    for (let i = 0; i < lst.length; i++) {
        if (lst[i] === 0) {
            return soma;
        }
        soma += lst[i];
    }
    return soma;
}


// solution 2
function stopEmZero(lst) {

    let soma = 0;
    for (let i in lst) { if (lst[i] === 0) { return soma }
        soma += lst[i];
    }
    return soma;
}


/*
    Create a function discard(x, y, lst), which takes two numbers x and y and a list.
     The function must return a new list discarding the elements present in the x and y indices of the received list.

     Ex:
         x = 2, y = 5, lst = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] => Should return [0, 1, 3, 4, 6, 7, 8, 9]
         x = 2, y = 0, lst = ['rice', 'beans', 'corn', 'olive', 'kale'] => Should return ['beans', 'olive', 'kale']
         x = 1, y = 1, lst = [ ] => Should return [ ]

    Crie uma função descarta(x, y, lst), que recebe dois números x e y e uma lista. 
    A função deve retornar uma nova lista descartando os elementos presentes nos índices x e y da lista recebida.

    Ex:
        x = 2, y = 5, lst = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] => Deve retornar [0, 1, 3, 4, 6, 7, 8, 9]
        x = 2, y = 0, lst = ['arroz', 'feijão', 'milho', 'azeitona', 'couve'] => Deve retornar ['feijão', 'azeitona', 'couve']
        x = 1, y = 1, lst = [ ] => Deve retornar [ ]
*/


// solution
function discard(x, y, lst) {
    let newList = [];
    for (let i = 0; i < lst.length; i++) {
        if (i !== x && i !== y) {
            newList.push(lst[i]);
        }
    }
    return newList;
}


// solution 2
function discard(x, y, lst) {
    return lst.filter((item, index) => index !== x && index !== y);
}


/* 
    Create a function called stopInDouble(lst), which takes a list and iterates through that list while
     sum the elements until reaching the end, or until finding an element that has a value that is the
     twice the index that this element occupies. Return the cumulative sum including the stop value.
     Ex:
         lst = [0, 5, 6, 7] => Should return 0
         lst = [ ] => Should return 0
         lst = [1, 2, 3, 5] => Should return 3
         lst = [9, 0, 1, 3, 7,10, 9, 8] => Should return 30
         lst = [8, 3, 3, 6, 31, 100, 67] = Should return 20

    Crie uma função chamada paraNoDobro(lst), que recebe uma lista e itera por essa lista enquanto
    soma os elementos até chegar ao final, ou até encontrar um elemento que possuí um valor que é o
    dobro do índice que esse elemento ocupa. Retorne a soma acumulada incluindo o valor de parada.
    Ex:
        lst = [0, 5, 6, 7] => Deve retornar 0
        lst = [ ] => Deve retornar 0
        lst = [1, 2, 3, 5] => Deve retornar 3
        lst = [9, 0, 1, 3, 7,10, 9, 8] => Deve retornar 30
        lst = [8, 3, 3, 6, 31, 100, 67] = Deve retornar 20

*/


// solution 1
function stopInDouble(lst) {

    let soma = 0
    for (let i = 0; i < lst.length; i++) {
        soma += lst[i]
        if(lst[i] === i*2) return soma
    } n
    return soma
}


// solution 2
function paraNoDobro(lst) {

    let soma = 0
    for (let i in lst) {
        
        soma += lst[i]
        if(lst[i] === i*2) return soma
    }
    return soma
}