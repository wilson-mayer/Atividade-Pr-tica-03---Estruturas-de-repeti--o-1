// 3. Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6

let n = Number(prompt('Insira o número para a tabuada:'));
let i = Number(prompt('Insira a quantidade de interações:'));

for (let x = 1; x <= i; x++) {
    let resultado = x * n;
    console.log(x + '*' + n + '=' + resultado);
}