//script tem uma collection array do tipo string, solicita ao usuario que digite 5 cores e adiciona-las dentro do array e mostar se quer ver as cores adicionadas ou em ordem crescente 

//import do readLine-sync
import readLine = require('readline-sync');

//declaração do array tipo string
const colecaoCores: Array<string> = new Array<string>();

console.log(`Digite 5 cores`)
//loop para adicionar 5 cores dentro do array
for (let i = 0; i < 5; i++) {
    colecaoCores.push(readLine.question(`Digite uma cor :`));    
}

//limpa o terminal
console.clear();

//exibi na tela a lista de cores com a primeria letra maiuscula de cada letra
//usando o loop for e alterando cada indice do array com "i" e a primeira letra das string usando [0]utilizando um upperCase nessa letra e concatenando com o resto da string usando slice
console.log(`Lista de cores`);
for (let i = 0; i < colecaoCores.length; i++) {
    console.log(colecaoCores[i][0].toUpperCase() + ((colecaoCores[i].slice(1))));        
}

//ordena a lista de cores em ordem crescente
colecaoCores.sort();

//exibi na tela a lista de cores com a primeria letra maiuscula de cada letra em ordem crescente
console.log(`\nLista de cores ordenada crescentemente`);
for (let i = 0; i < colecaoCores.length; i++) {
    console.log(colecaoCores[i][0].toUpperCase() + ((colecaoCores[i].slice(1))));        
}


//extra
//reverte a lista que estava em ordem crescente assim ordenando decrescentemente
colecaoCores.reverse();

//exibi na tela a lista de cores com a primeria letra maiuscula de cada letra em ordem decrescente
console.log(`\nLista de cores ordenada decrescentemnte`);
for (let i = 0; i < colecaoCores.length; i++) {
    console.log(colecaoCores[i][0].toUpperCase() + ((colecaoCores[i].slice(1))));        
}