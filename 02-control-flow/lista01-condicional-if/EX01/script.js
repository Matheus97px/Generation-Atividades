// Script que calcula a soma de numero A e numero B, e compara com numero C, e exibe se ela é maior, menor ou igual a C.


// import readline
const readLine = require('readline-sync');


//declaração de variaveis utilizando readline-sync
let numeroA = readLine.questionInt("Digite o numero A:  ");
let numeroB = readLine.questionInt("Digite o numero B:  ");
let numeroC = readLine.questionInt("Digite o numero C:  ");

//soma as variaveis numeroA e numeroB e armazena na variavel somaAB
const somaAB = numeroA + numeroB;

//validação das condições e saida no terminal
if (somaAB > numeroC) {
    console.log(`A soma do número A: ${numeroA}, e a do número B: ${numeroB}, é igual a: ${somaAB}.\n A soma deles é maior que número C: ${numeroC}`);
} else if (somaAB < numeroC) {
    console.log(`A soma do número A: ${numeroA}, e a do número B: ${numeroB}, é igual a: ${somaAB}.\n A soma deles é menor que número C: ${numeroC}`);
} else {
    console.log(`A soma do número A: ${numeroA}, e a do número B: ${numeroB}, é igual a: ${somaAB}.\n A soma deles é igual a o número C: ${numeroC}`);
}