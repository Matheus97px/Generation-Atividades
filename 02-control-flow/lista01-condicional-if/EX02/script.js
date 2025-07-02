// Script que recebe um numero inteiro e exibe na tela se ele é par ou impar e se ele é positivo ou negativo.


// import readline
const readLine = require('readline-sync');


//declaração de variaveis utilizando readline-sync
let numeroEscolhido = readLine.questionInt("Digite um numero:  ");


//verificação se é par, impar, negativo, positivo e retorna a saida no terminal
if (numeroEscolhido % 2 === 0 && numeroEscolhido > 0) {
    console.log(`O numero escolhido: ${numeroEscolhido} é par e positivo!!`);
} else if (numeroEscolhido % 2 === 0 && numeroEscolhido < 0) {
    console.log(`O numero escolhido: ${numeroEscolhido} é par e negativo!!`);
} else if (numeroEscolhido % 2 !== 0 && numeroEscolhido > 0) {
    console.log(`O numero escolhido: ${numeroEscolhido} é ímpar e positivo!!`);
} else {
    console.log(`O numero escolhido: ${numeroEscolhido} é ímpar e negativo!!`);
}







/*
Opção mais enxuta, porem utilizando operador térnarios
    por isso esta comentado, nao sei se seria uma resposta valida 
 if(numeroEscolhido % 2 === 0){
    console.log(numeroEscolhido > 0 ? `numero: ${numeroEscolhido} é par e positivo` : `numero: ${numeroEscolhido} é par e negativo`);
 }else {
    console.log(numeroEscolhido > 0 ? `numero: ${numeroEscolhido} é impar e positivo` : `numero: ${numeroEscolhido} é impar e negativo`);
 }
    */