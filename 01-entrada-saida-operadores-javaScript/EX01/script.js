//import do readline
const readLine = require("readline-sync");

//declaração das variaveis utilizando readline
let salario = readLine.questionFloat("Digite o Salario: ");
let abono = readLine.questionFloat("Digite o Abono: ");

//calculo 
const novoSalario = salario + abono;


//Saida no terminal
console.log(`novo salario é : R$${novoSalario.toFixed(2)}`);