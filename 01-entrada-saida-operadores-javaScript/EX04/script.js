//import do readline
const readLine = require("readline-sync");


//declaração das variaveis utilizando readline
let numero1 = readLine.questionFloat("Digite o primeiro numero: ");
let numero2 = readLine.questionFloat("Digite o segundo numero: ");
let numero3 = readLine.questionFloat("Digite o terceiro numero: ");
let numero4 = readLine.questionFloat("Digite o quarto numero: ");

//calculo
let diferença = (numero1 * numero2) - (numero3 * numero4);

//saida no terminal
console.log(`A diferença entre eles é ${diferença}`);