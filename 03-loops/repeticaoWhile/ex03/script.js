//script le a idade de varias pessoas (numero inteiro) e exibe o total de pessoas menor de 21 anos e maior de 50 anos


//import do readLine-sync
const readLine = require("readline-sync");

//exibi na tela o que o codigo vai fazer dando um visual ao usuario
console.log(`Olá, seja bem-vindo!
Este é o verificador de idade
Iremos verificar quem é maior de 50 anos e quem é menor de 21
Ao digitar uma idade invalida(abaixo ou igual a 0) o programa encerra.`);

//declaração das variaveis, com 0 atribuidas a ela para serem do tipo number 
let menores = 0, maiores = 0;

let idade = readLine.questionInt("Digite uma idade: ");


//verifica se idade é maior ou igual a zero e da inicio ao loop chama a variavel idade novamante e pede que digite uma idade novamnte se for abaixo ou igual a zero encerra o loop
while (idade > 0) {
    //se idade for maior que 0 e menor que 21 aumenta em 1 a variavel menores 
    //se for maior de 50 aumenta em 1 a variavel maiores
    if (idade < 21) {
        menores++;
    } else if (idade > 50) {
        maiores++;
    }
    idade = readLine.questionInt("Digite uma idade (0 ou negativo encerra): ");

}

//limpa o terminal
console.clear();
//exibi na tela o numero de pessoas menores de 21 e maiores de 50
console.log(`
    Total de pessoas menores de 21 anos: ${menores}
    Total de pessoas maiores de 50 anos: ${maiores}`);