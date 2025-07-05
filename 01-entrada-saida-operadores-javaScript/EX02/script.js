//script le 4 notas de um participante (4 numeros reais) digitado pelo usuario e exibe na tela a media final do participante


//import do readline
const readLine = require("readline-sync");

//Exibe para o usuario o que o script faz
console.log(`
    _______________________________________
    |   Bem Vindo ao Sistema de Notas     |
    |                                     |
    |        Digite Suas 4 Notas          |
    |                                     |
    |       Retornaremos Sua Media        |
    |_____________________________________|
`);


//declaração das variaveis utilizando readline
const nota1 = readLine.questionFloat("Digite a primeira nota: ");
const nota2 = readLine.questionFloat("Digite a segunda nota: ");
const nota3 = readLine.questionFloat("Digite a terceira nota: ");
const nota4 = readLine.questionFloat("Digite a quarta nota: ");

//variavel media que soma as 4 notas e divide por 4 
const media = (nota1 + nota2 + nota3 + nota4) / 4;

//limpa o terminal
console.clear();

//Saida no terminal dizendo a media para o usuario 
console.log(`A media final é ${media.toFixed(1)}`);



//extra
//diz se o usuario é aprovado ou nao, se a media é maior ou menor que 7
console.log(`O aluno foi:  \n ${media.toFixed(1) > 7 ? "Aprovado" : "Reprovado"}`);