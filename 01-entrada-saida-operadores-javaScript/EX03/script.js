//import do readline
const readLine = require("readline-sync");


//declaração das variaveis utilizando readline
let salarioBruto = readLine.questionFloat("Digite o Salário Bruto: ");
let adicionalNoturno = readLine.questionFloat("Digite o adicional Noturno: ");
let horasExtras = readLine.questionFloat("Digite as horas extras: ");
let descontos = readLine.questionFloat("Digite os descontos: ");


//calculo
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

//saida no terminal
console.log(`O salário liquido é ${salarioLiquido}`)