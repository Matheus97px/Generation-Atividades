//script le 10 numeros inteiros e exibi na tela quantos deles são pares e quantos são impares


//import do readLine-sync
const readLine = require("readline-sync");

//declaração das variaveis, com 0 atribuidas a ela para serem do tipo number 
let par = 0, impar = 0;

//exibi na tela o que o codigo vai fazer dando um visual ao usuario
console.log(`Olá, seja bem-vindo!
Este é o verificador de pares e impares
Digite 10 numeros e contaremos quantos pares e impares tiveram.`);


//loop de 10 repetições e a cada repetição solicita um numero e verifica se ele é divisivel por 2 (par) ou nao (impar) aumenta em 1 a variavel par ou impar 
for (let i = 1; i <= 10; i++) {
    let numeroEscolhido = readLine.questionInt(`Digite o ${i} numero: `);
    if (numeroEscolhido % 2 === 0) {
        par++;
    } else {
        impar++;
    }
}

//Exibi na tela a quantidade de pares e impares
console.clear();
console.log(`
    Total de numeros pares: ${par}
    Total de numeros impares: ${impar}
    `);