//script le numeros inteiros até que seja digitado 0 ao final exibe a soma deles

//import do readline-sync
const readLine = require("readline-sync");
//declaracao variavel utilizando readLine


//exibi para o usuario o que fazer
console.log(`
    Digite numeros para ver a soma de todos numeros positivos.
    Ao digitar 0 o programa encerra`);

let numeroEscolhido = readLine.questionInt(`Digite um numero: `);
//declaracao da variavel atribuindo valor 0 para ela ser tipo number
let soma = 0;

//loop enquanto numeroEscolhido nao for igual a 0 
do{
    //se numeroEscolhido for mais que zero (positivo) ele incrementa na variavel soma
    if(numeroEscolhido > 0){
     soma += numeroEscolhido;
    }
    //valida a condição do loop enquanto nao for 0 ele persiste
    numeroEscolhido = readLine.questionInt(`Digite um numero: `);
}while(numeroEscolhido !== 0);

//limpa o terminal
console.clear();
//exibi a soma dos numeros positivos no terminal
console.log(`A soma dos numeros positivos é: ${soma}`);