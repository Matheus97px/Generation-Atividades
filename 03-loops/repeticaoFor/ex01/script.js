//Script le dois numeros inteiros, validando se é menor que o segundo, o programa imprime todos os numeros entre eles que é multiplos de 3 e 5

//import do readLine-sync
const readLine = require("readline-sync");

//exibição de introdução ao codigo
console.log(`Olá, seja bem-vindo!
Digite dois números inteiros.
O primeiro deve ser menor que o segundo.
O programa mostrará todos os múltiplos de 3 e 5 entre eles.`);

//declaração das variaveis utilizando readLine-sync
const numero1 = readLine.questionInt("Digite o primeiro numero do intervalo: ");
const numero2 = readLine.questionInt("Digite o ultimo numero do intervalo: ");
console.clear();

//verifica se o numero1 é maior que numero2 e se for encerra o console dizendo que o intervalo é invalido, o contrario exibe no console o numero dizendo que ele é multiplo de 3 e 5
if (numero1 < numero2) {
    let encontrouMultiplo = false
    console.log(`No intervalo entre ${numero1} e ${numero2}:`);
    for (let i = numero1; i <= numero2; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} é múltiplo de 3 e 5`);
            encontrouMultiplo = true
        }
    }
      if (!encontrouMultiplo) {
            console.log(`Nenhum número múltiplo de 3 e 5 foi encontrado nesse intervalo.`);
        }
} else {
    console.log(`Intervalo Invalido!! O primeiro número deve ser menor que o segundo.`);
}