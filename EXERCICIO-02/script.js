// 2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

alturaPedro = 150;
alturaLucas = 110;
contagemAnos = 0;



do {
    alturaPedro = alturaPedro + 2;
    alturaLucas = alturaLucas + 3;
    contagemAnos++
} while (alturaPedro > alturaLucas) {
    console.log(`Serão necessarios ${contagemAnos} anos para que Lucas e Pedro tenham o mesmo tamanho`);
}


do {
    alturaPedro = alturaPedro + 2;
    alturaLucas = alturaLucas + 3;
    contagemAnos++
} while (alturaPedro >= alturaLucas) {
    console.log(`Serão necessarios ${contagemAnos} anos para que Lucas seja maior que Pedro`);
}