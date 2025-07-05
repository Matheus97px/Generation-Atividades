// Script que calcula a soma de numero A e numero B, e compara com numero C, e exibe se ela é maior, menor ou igual a C.


// import readline
const readLine = require('readline-sync');

//Exibe para o usuario o que o script faz
console.log(`
    _____________________________________________
    |           Ola! Bem Vindo(a)!!             |
    |                                           |
    |       Digite 3 numeros (A - B - C)        |
    |                                           |
    |           Vai Ser Retornado Se            |
    |     A + B e Maior Menor ou Igual C        |
    |___________________________________________|
`);


//declaração de variaveis utilizando readline-sync
const numeroA = readLine.questionInt("Digite o numero A:  ");
const numeroB = readLine.questionInt("Digite o numero B:  ");
const numeroC = readLine.questionInt("Digite o numero C:  ");

//soma as variaveis numeroA e numeroB e armazena na constante somaAB
const somaAB = numeroA + numeroB;

//limpa o terminal
console.clear();

//validação das condições e saida no terminal exibindo para o usuario se A + B é menor,igual ou maior a C
if (somaAB > numeroC) {
    console.log(`A soma do número A: ${numeroA}, e a do número B: ${numeroB}, é igual a: ${somaAB}.\n A soma deles é maior que número C: ${numeroC}`);
} else if (somaAB < numeroC) {
    console.log(`A soma do número A: ${numeroA}, e a do número B: ${numeroB}, é igual a: ${somaAB}.\n A soma deles é menor que número C: ${numeroC}`);
} else {
    console.log(`A soma do número A: ${numeroA}, e a do número B: ${numeroB}, é igual a: ${somaAB}.\n A soma deles é igual a o número C: ${numeroC}`);
}