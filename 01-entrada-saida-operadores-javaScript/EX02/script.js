//import do readline
const readLine = require("readline-sync");

//declaração das variaveis utilizando readline
let nota1 = readLine.questionFloat("Digite a primeira nota: ");
let nota2 = readLine.questionFloat("Digite a segunda nota: ");
let nota3 = readLine.questionFloat("Digite a terceira nota: ");
let nota4 = readLine.questionFloat("Digite a quarta nota: ");

//calculo 
const media = (nota1 + nota2 + nota3 + nota4) / 4;

//Saida no terminal
console.log(`A media final é ${media.toFixed(1)}`);



//extra
console.log(`O aluno foi:  \n ${media.toFixed(1) > 7 ? "Aprovado" : "Reprovado"}`);