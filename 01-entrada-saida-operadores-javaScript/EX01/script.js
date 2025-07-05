//script le o salario e o abono do usuario e retorna o novo salario para o usuario

//import do readline
const readLine = require("readline-sync");


//Exibe para o usuario o que o script faz
console.log(`
    ***************************************
    *   Bem Vindo ao Calculo Salarial     *
    *                                     *
    *   Digite o Seu Salario e o Abono    *
    *                                     *
    *    Retornaremos o Novo Salario      *
    ***************************************
`);

//declaração das variaveis utilizando readline solicitando que o usuario digite o salario e o abono
const salario = readLine.questionFloat("\nDigite o Salario: ");
const abono = readLine.questionFloat("\nDigite o Abono: ");

//declaracao da variavel novoSalario que recebe o salario + abono 
const novoSalario = salario + abono;

//limpa o terminal
console.clear();

//Saida no terminal mostrando o novo salario
console.log(`novo salario é : R$${novoSalario.toFixed(2)}`);