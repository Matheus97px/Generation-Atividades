//script tem uma pilha stack do tipo string para organizar a retirada de livros de uma pilha, tem um menu que aceita 4 opcoes(0-3),sendo elas adicionar um novo livro a pilha(solicitar nome), lsitar todos os livros da pilhas, retirar um livro da pilha e encerrar o programa caso a pilha esteja vazia ao tentar retirar informar que nao tem livros

//import do readLine e do queue 
import readLine = require('readline-sync');
import { Stack } from './stack';
import { read } from 'fs';

//criação da fila FIFO
const pilha = new Stack<string>();

//delcaracao da variavel continuar atribuido uma string 's' para validar o loop
let continuar: string = 's';

//executa o codigo e gera um loop enquanto a variavel continuar nao for igual a 'n'
do {
    //exibe para o usuario o menu de escolhas possiveis 
    console.log(`
**************************************************    
*      Bem Vindo ao Sistema Bibliotecario        *
*              Escolha Sua Opcao                 *
*                                                *
*        1 - Adicionar Livro na Pilha            *
*        2 - Listar Todos os Livros da Pilha     *
*        3 - Retirar Livro da Pilha              *
*        0 - Sair                                *
*                                                *
**************************************************
    `);
    //declaracao de variavel para o usuario digitar qual opcao deseja
    let opcao = readLine.questionInt(`Entre Com a Opcao Desejada: `);



    //switch case para filtrar as escolhas caso 1 ele solicita um nome e adiciona na pilha 
    //caso 2 ele imprimi a pilha e quem esta nela e se estiver vazia dira que esta vazia
    //caso 3 ele retira o ultimo a entra da pilha e caso esteja vazia, dira que esta vazia
    //caso 0 atribui o valor 'n' a variavel continuar  assim encerrado o loop
    switch (opcao) {
        case 1:
        //se o nome do livro ja existir na pilha ira perguntar para o usuario se ele deseja adicionar mesmo assim o livro caso nao queira o livro nao ira ser adicionado a lista 
            let nome = readLine.question(`Digite o nome do livro: `);
            if (pilha.contains(nome)) {
                console.log(`Livro ${nome} ja esta na pilha \nDeseja adiciona-lo mesmo assim?`);
                let verificador = readLine.question(`Digite (s) ou (n): `).toLowerCase();
                while (verificador !== 's' && verificador !== 'n') {
                    console.clear();
                    verificador = readLine.question(`Digite Uma Opcao Valida: (s)(n): `).toLowerCase();
                }
                if (verificador === 's') {
                    pilha.push(nome);
                    console.log(`\nPilha de Livros`);
                    pilha.printStack();
                    console.log(`\nLivro ${nome} Adicionado a Pilha!`);
                    console.log(`\n Pilha Tem ${pilha.count()} Livro(s)`);
                } else {
                    console.log(`Livro ${nome} Nao Foi Adicionado a Pilha`);
                }

            } else {
                pilha.push(nome);
                console.log(`\nPilha de Livros`);
                pilha.printStack();
                console.log(`\nLivro ${nome} Adicionado a Pilha!`);
                console.log(`\n Pilha Tem ${pilha.count()} Livro(s)`);
            }
            break;
        case 2:
            if (pilha.isEmpty() == false) {
                console.log(`\nPilha de Livros`);
                pilha.printStack();
                console.log(`\n Pilha Tem ${pilha.count()} Livro(s)`);
            } else {
                console.log(`Pilha de Livros Esta Vazia`);
            }
            break;
        case 3:
            if (pilha.isEmpty() == false) {
                console.log(`\nO Livro ${pilha.pop()} Foi Retirado da Pilha!`);
                console.log(`\nPilha de Livros`);
                pilha.printStack();
                console.log(`\nRestam ${pilha.count()} Livro(s) na Pilha`);
            } else {
                console.log(`\nPilha de Livros Esta Vazia`);
            }
            break;
        case 0:
            continuar = 'n';
            break;
        default:
            console.log(`\nOpcao Invalida`);
            break;
    }

    //caso a variavel nao seja igual a 'n' ira perguntar para o usuario se deseja continuar 
    //filtra escolhas erradas fora do padrao 's' ou 'n'
    if (continuar != 'n') {
        continuar = readLine.question(`\nPara Continuar Digite: (s)(n)`).toLowerCase();
        console.clear();
        while (continuar !== 's' && continuar !== 'n') {
            console.clear();
            continuar = readLine.question(`Digite Uma Opcao Valida: (s)(n)`).toLowerCase();
        }
    }



} while (continuar !== 'n');


//imprimi para o usuario o fim do script 
console.log(`
    Programa Finalizado!
       Até mais tarde
    `);