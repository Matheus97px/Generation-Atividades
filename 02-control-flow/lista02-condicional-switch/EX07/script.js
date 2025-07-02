//Script simula uma calculadora, le 2 numeros reais(float) e na sequencia ler a operação matematica baseado na escolha do switch case (1-4) e exebi na tela o resultado da operação

// import readline
const readLine = require('readline-sync');

//exibi na tela as operações da calculadora
console.log(`Calculadora\nEscolha a operacao desejada`);
console.log(`\n\t Operacoes \n1.Soma\n2.Subtracao\n3.Multiplicacao\n4.Divisao`);
let operacao = readLine.questionInt("Escolha a opcao (1-4): ");
let numero1 = readLine.questionFloat("Digite o primeiro numero: ");
let numero2 = readLine.questionFloat("Digite o segundo numero: ");
let resultado;

//atribui valor na variavel resultado baseando na escolha do swith case e exibi na tela o resultado do calculo da calculadora
switch (operacao) {
    case 1:
        resultado = numero1 + numero2;
        console.clear();
        console.log(`${numero1.toFixed(1)} + ${numero2.toFixed(1)} = ${resultado.toFixed(1)}`);
        break;
    case 2:
        resultado = numero1 - numero2;
        console.clear();
        console.log(`${numero1.toFixed(1)} - ${numero2.toFixed(1)} = ${resultado.toFixed(1)}`);
        break;
    case 3:
        resultado = numero1 * numero2;
        console.clear();
        console.log(`${numero1.toFixed(1)} * ${numero2.toFixed(1)} = ${resultado.toFixed(1)}`);
        break;
    case 4:
        resultado = numero1 / numero2;
        console.clear();
        console.log(`${numero1.toFixed(1)} / ${numero2.toFixed(1)} = ${resultado.toFixed(1)}`);
        break;
    default:
        console.clear();
        console.log("Operação Inválida!");
        break;
}