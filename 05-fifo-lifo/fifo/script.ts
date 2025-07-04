//script tem uma collection Queue do tipo string para organizar uma fila por ondem de chegada dos clientes de um banco tem um menu 4 opcoes(0-3) sendo elas de adicionar cliente na fila (solicitar nome), listar todos os cliente na fila, chamar(retirar) uma pessoa da fila e finalizar o programa e caso a fila esteja vazia avisar o usuario ao tentar retirar

//import do readLine e do queue 
import readLine = require('readline-sync');
import { Queue } from './queue';

//criação da fila FIFO
const fila = new Queue<string>();

//delcaracao da variavel continuar atribuido uma string 's' para validar o loop
let continuar: string = 's';

//executa o codigo e gera um loop enquanto a variavel continuar nao for igual a 'n'
do {
    //exibe para o usuario o menu de escolhas possiveis 
    console.log(`
**************************************************    
*      Bem Vindo ao Sistema de Fila Bancario     *
*              Escolha Sua Opcao                 *
*                                                *
*        1 - Adicionar Cliente na Fila           *
*        2 - Listar Todos Os Cliente             *
*        3 - Retirar Cliente da Fila             *
*        0 - Sair                                *
*                                                *
**************************************************
    `);
    //declaracao de variavel para o usuario digitar qual opcao deseja
    let opcao = readLine.questionInt(`Entre Com a Opcao Desejada: `);

    //switch case para filtrar as escolhas caso 1 ele solicita um nome e adiciona na fila 
    //caso 2 ele imprimi a fila e quem esta nela e se estiver vazia dira que esta vazia
    //caso 3 ele retira o primeiro a entra da fila e caso esteja vazia dira que esta vazia
    //caso 0 atribui o valor 'n' a variavel continuar  assim encerrado o loop
    switch (opcao) {
        case 1:
            fila.enqueue(readLine.question(`Nome: `));
            console.log(`\nFila de atendimento`);
            fila.printQueue();
            console.log(`\nCliente Adicionado!`);
            console.log(`\nFila Tem ${fila.count()} Cliente(s)`);
            break;
        case 2:
            if (fila.isEmpty() == false) {
                console.log(`\nFila de atendimento`);
                fila.printQueue();
                console.log(`\nFila Tem ${fila.count()} Cliente(s)`);
            } else {
                console.log(`Fila de Atendimento Esta Vazia`);
            }
            break;
        case 3:
            if (fila.isEmpty() == false) {
                console.log(`\nO Cliente ${fila.dequeue()} Foi Chamado!`);
                console.log(`\nFila de atendimento`);
                fila.printQueue();
                console.log(`\nRestam ${fila.count()} Cliente(s) na Fila`);
            } else {
                console.log(`Fila de Atendimento Esta Vazia`);
            }
            break;
        case 0:
            continuar = 'n';
            break;
        default:
            console.log(`Opcao Invalida`);
            break;
    }

    //caso a variavel nao seja igual a 'n' ira perguntar para o usuario se deseja continuar 
    //filtra escolhas erradas fora do padrao 's' ou 'n'
    if (continuar != 'n') {
        continuar = readLine.question(`\nPara continuar digite: (s)(n)`).toLowerCase();
        console.clear();
        while (continuar !== 's' && continuar !== 'n') {
            console.clear();
            continuar = readLine.question(`Digite uma opcao valida: (s)(n)`).toLowerCase();
        }
    }

} while (continuar !== 'n');

//imprimi para o usuario o fim do script 
console.log(`
    Programa Finalizado!
       Até mais tarde
    `);