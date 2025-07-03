//script tera um array do tipo number inicializada com 10 numeros inteiros, solicita qual numero ele deseja encontrar e exibi no terminal a posição dele dentro desse array,e caso ele nao seja encontrado exibir a mensagem que ele nao foi encontrado

//import do readLine-sync
import readLine = require('readline-sync');

//declaração do array tipo number
const colecaoNumeros: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);
//declaração da variavel para validar se o usuario quer continuar 
let continuar;

//exibi para o usuario a funcionalidade do script
console.log(`
                           Bem vindo
                temos uma lista com 10 numeros(1-10)
    escolha seu numero e diremos em qual posicao ele esta localizado
    `);

//enquanto variavel continuar for igual a "s" gera um loop perguntando se deseja buscar um novo numero
do {
    let numeroBusca = readLine.questionInt(`Digite o numero que voce deseja encontrar: `);

    //verifica se o numero existe dentro do array e retorna uma mensagem na tela
    if (colecaoNumeros.includes(numeroBusca)) {
        console.clear();
        console.log(`O numero ${numeroBusca} esta localizado na posicao: ${colecaoNumeros.indexOf(numeroBusca)}`);
    } else {
        console.clear();
        console.log(`O numero ${numeroBusca} nao foi encontrado!!`);
    }

    //verifica se o usuario deseja continuar
    continuar = readLine.question(`Deseja continuar ? (s)(n) `).toLowerCase();

    //loop para filtrar inputs do usuario que nao sao desejados
    while (continuar !== 's' && continuar !== 'n') {
        console.clear();
        console.log(`Comando invalido`);
        continuar = readLine.question(`Deseja continuar ? (s)(n) `).toLowerCase();
    }
} while (continuar === 's');

    //mensagem de conclusao do script
    console.clear();
    console.log(`Até mais tarde`);
