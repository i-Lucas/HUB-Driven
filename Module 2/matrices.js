/*
    Implement the sumMatrix(mat) function that takes an array of numbers as a parameter and returns the sum of all numbers.
    Implemente a função somaMatriz(mat) que recebe uma matriz de números como parâmetro e retorna a soma de todos os números.
*/


// solution
function sumMatrix(mat) {

    let sum = 0;
    for (let i in mat) {
        for (let j in mat[i]) {
            sum += mat[i][j];
        }
    }
    return sum;
}


/*
    Create the function sumDiagonals(mat), which takes a matrix and sums the values of the main diagonal and the secondary diagonal.
    To ensure that the matrix has a diagonal, this function must check if the matrix is square and only accept square matrices,
    in other cases it must return 0 and the sum must not count twice the central element of the array.

    Crie a função somaDiagonais(mat), que recebe uma matriz e soma os valores da diagonal principal e da diagonal secundária. 
    Para garantir que a matriz tem diagonal essa função deve verificar se a matriz é quadrada e só aceitar matrizes quadradas, 
    em outros casos deve retornar 0 e a soma não deve contar duas vezes o elemento central da matriz.

    Ex: mat = [ [2,2], [3,3] ] => Deve retornar 10
*/


// solution 
function sumDiagonals(mat) {

    let sum = 0;
    for (let i in mat) {
        if (mat[i].length != mat.length)
            return 0
    }

    for (let i in mat) {
        let aux = [...mat[i]]
        aux = aux.reverse()
        for (let j in mat[i]) {
            if (i == j) {
                sum += mat[i][j] + aux[i]
            }
        }
    }

    if (mat.length % 2 != 0) {
        let middle = Math.floor(mat.length / 2)
        sum -= mat[middle][middle]
    }
    return sum;
}


/*
    Write a function called columnProducer(x, mat), which takes a number x representing
    an index and an array MxN of any size and returns the product of the elements that occupy the
    x-index column of the array. If x is greater than the number of columns in the array, your function should return null

    Escreva uma função chamada produtorioColuna(x, mat), que recebe um número x representando 
    um índice e uma matriz MxN de tamanho qualquer e retorna o produto dos elementos que ocupam a 
    coluna de índice x da matriz. Se x for maior que o número de colunas na matriz, sua função deve retornar null

    Ex: mat = [ [2, 3], [2, 3] ], x = 1 => Deve retornar 9
*/


// solution
function columnProducer(x, mat) {

    let prod = 1
    for (let i in mat) {
        if (x > mat[i].length - 1) {
            return null
        }
    }

    for (let i in mat) {
        for (let j in mat[i]) {
            if (j == x) {
                prod *= mat[i][j]
            }
        }
    }
    return prod;
}


/* 
    Implement the prodMatrix(mat) function that takes a matrix as a parameter and 
    returns the sum of the prod of each row of the matrix.

    Implemente a função prodMatriz(mat) que recebe uma matriz como parâmetro 
    e retorna a soma do prod de cada line da matriz.
*/


// solution
function prodMatrix(mat) {

    let prod = 0;
    for (let i in mat) {

        const line = mat[i];
        let aux = 1;

        for (let j = 0; j < line.length; j++) {
            const value = line[j];
            aux *= value;
        }

        prod += aux;
    }

    return prod;
}


/*
    Creates a function called determinant(mat) that calculates the determinant of 2x2 matrices and 3x3 matrices and
    returns that value. This function must check if the matrix is square and that it is within the dimensions
    accepted by the function, if any condition is false, it must return 0.

    Cria uma função chamada determinante(mat) que faz o cálculo do determinante de matrizes 2x2 e matrizes 3x3 e 
    retorna esse valor. Essa função deve conferir se a matriz é quadrada e que está dentro das dimensões 
    aceitas pela função, caso alguma condição seja falsa deve retornar 0.
*/


// solution
function determinant(mat) {

    for (let i in mat) {
        if (mat[i].length != mat.length)
            return 0
    }

    if (mat.length == 2) {
        return (mat[0][0] * mat[1][1]) - (mat[0][1] * mat[1][0])
    }

    let l0 = mat[0][0] * (mat[1][1] * mat[2][2] - mat[1][2] * mat[2][1]);
    let l1 = mat[0][1] * (mat[1][0] * mat[2][2] - mat[2][0] * mat[1][2]);
    let l2 = mat[0][2] * (mat[1][0] * mat[2][1] - mat[2][0] * mat[1][1]);

    return l0 - l1 + l2
}


/*
    If we have a mauxiz A with dimension MxN, we say that the auxansponse maauxiz of A is the maauxiz with dimension NxM that presents
    the same elements, but with the rows in the column positions, that is, the rows of maauxiz A turn into the columns of
    auxansposta of A. Create a function called auxansposta(mat), which takes a auxax and returns the auxansponse.

    Se temos uma maauxiz A com dimensão MxN, dizemos que a maauxiz auxansposta de A é a maauxiz com dimensão NxM que apresenta 
    os mesmos elementos, mas com as linhas nas posições das colunas, ou seja, as linhas da maauxiz A viram as colunas da 
    auxansposta de A. Crie uma função chamada auxansposta(mat), que recebe uma maauxiz e retorna a maauxiz auxansposta.
*/


// solution
function omGhelp(mat) {

    let aux = new Array(mat[0].length);

    for (let i = 0; i < mat[0].length; i++) {
        aux[i] = new Array(mat.length);
    }
    for (let i = 0; i < mat[0].length; i++)

        for (let j in mat)
            aux[i][j] = mat[j][i];

    return aux;
}


/*
    Symmetric matrices are square matrices, which have their numbers mirrored symmetrically in relation to the main diagonal.
    Create a function called, checkSymmetry(mat), to find out if a square matrix is symmetric.
    It must return true if positive and false otherwise.

    As matrizes simétricas são matrizes quadradas, que tem seus números espelhados simétricamente em relação a diagonal principal.
    Crie uma função chamada, verificaSimetria(mat), para descobrir se uma matriz quadrada é simétrica. 
    Deve retornar true em caso positivo e false em caso contrário.
*/


// solution
function checkSymmetry(mat) {

    let isSymmetric = true;
    for (let i in mat) {

        for (let j in mat) {

            if (mat[i][j] !== mat[j][i]) {
                isSymmetric = false;
            }
        }
    }
    return isSymmetric;
}