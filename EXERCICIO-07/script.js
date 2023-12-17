// 7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.


let soma = 0;
let numerosPositivos = 0;
let numerosNegativos = 0;

for (let i = 1; i <= 10; i++) {
    let numero = Number(prompt(`Digite o ${i}º número:`));
    soma += numero;

      if (numero > 0) {
        numerosPositivos++;
    } else if (numero < 0) {
        numerosNegativos++;
    }
}

let media = soma / 10;
let percentualPositivos = (numerosPositivos / 10) * 100;
let percentualNegativos = (numerosNegativos / 10) * 100;

console.log(`Média aritmética: ${media.toFixed(2)}`);
console.log(`Quantidade de valores positivos: ${numerosPositivos}`);
console.log(`Quantidade de valores negativos: ${numerosNegativos}`);
console.log(`Percentual de valores positivos: ${percentualPositivos.toFixed(2)}%`);
console.log(`Percentual de valores negativos: ${percentualNegativos.toFixed(2)}%`);
