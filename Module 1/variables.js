// Create a function called calculateArea(r) that takes a numeric parameter and returns the area of a circle with that radius value.
// Create in your function a constant called pi that stores the value 3.1415 to use in the account.

// Crie uma função chamada calculaArea(r) que recebe um parâmetro numérico e retorna a área de um círculo com esse valor de raio.
// Crie na sua função uma constante chamada pi que armazene o valor 3.1415 para utilizar na conta.

// solution
const calculateArea = (r) => 3.1415 * (r*r)

/* 
Create a function called calculateVelocity(v0, a, t) that takes three parameters, representing the initial velocity, 
acceleration, and instant of time of the motion of a particle, respectively, and returns the velocity of that particle, 
at that instant t, from the formula for the time function of the movement:

     V = v0 + a*t

Create a variable called speed that receives the value of the expression above, and return this variable.



Crie uma função chamada calculaVelocidade(v0, a, t) que recebe três parâmetros, que representam respectivamente a velocidade inicial, 
a aceleração e o instante de tempo do movimento de uma partícula e retorna a velocidade dessa partícula, nesse instante t, 
a partir da fórmula da função horária do movimento:

    V = v0 + a*t

Crie uma variável chama velocidade que receba o valor da expressão acima, e retorne essa variável.
*/

// solution
const calculateVelocity = (v0, a, t) => v0 + a*t