//script le o 4 numeros reais (salario bruto, adicional noturno, horas extras, e descontos) de um colaborador e exibe na tela o salario liquido


//import do readline
const readLine = require("readline-sync");

//Exibe para o usuario o que o script faz
console.log(`
    _____________________________________________
    |   Bem Vindo ao Calculo Salarial Liquido   |
    |                                           |
    |               Digite Seu:                 |
    |                                           |
    |              Salario Bruto                |
    |            Adicional Noturno              |
    |              Horas  Extras                |
    |                Descontos                  |
    |                                           |
    |     Retornaremos Seu Salario Liquido      |
    |___________________________________________|
`);


//declaração das variaveis utilizando readline 
const salarioBruto = readLine.questionFloat("Digite o Salario Bruto: ");
const adicionalNoturno = readLine.questionFloat("Digite o adicional Noturno: ");
const horasExtras = readLine.questionFloat("Digite as horas extras: ");
const descontos = readLine.questionFloat("Digite os descontos: ");


//variavel salarioLiquido recebe o calculo das entradas do usuario, para obter o salario liquido
const salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

//limpa o terminal
console.clear();

//saida no terminal exibindo o salario liquido para o usuario
console.log(`O salário liquido é R$${salarioLiquido.toFixed(2)}`);