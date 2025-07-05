//Script que le um numero inteiro de 1-6 e a quantidade comprada e exibe na tela o valor total da conta com o nome do produto comprado

// import readline
const readLine = require('readline-sync');

//exibi o cardapio 
console.log(`Bem Vindo ao Nosso Restaurante\n`);
console.log(`\t Cardapio \n1.Cachorro Quente -- R$10.00\n2.X-Salada -- R$15.00\n3.X-Bacon -- R$18.00\n4.Bauru -- R$12.00\n5.Refrigerante -- R$8.00\n6.Suco de Laranja -- R$13.00\n`);

//declaracao de variaveis utilizando readline-sync
const opcaoCardapio = readLine.questionInt("Digite sua escolha (1-6):  ");
const quantidade = readLine.questionInt("Digite a quantida desejada:  ");
//declaracao das variaveis precos e valorTotal undefined para receberem valores apos a escolha do cardapio
let preco;
let valorTotal;


//apos a escolha da opcao do cardapio o switch atribui os valores a preco e valorTotal baseado na escolha e exibi na tela  nome do produto, preco e valor total da compra 
switch (opcaoCardapio) {
    case 1:
        preco = 10.00;
        valorTotal = quantidade * preco;
        console.clear();
        console.log(`\nProduto: Cachorro Quente\nQuantidade: ${quantidade}\nValor Total: R$${valorTotal.toFixed(2)}`);
        break;
    case 2:
        preco = 15.00;
        valorTotal = quantidade * preco;
        console.clear();
        console.log(`\nProduto: X-Salada\nQuantidade: ${quantidade}\n Valor Total: R$${valorTotal.toFixed(2)}`);
        break;
    case 3:
        preco = 18.00;
        valorTotal = quantidade * preco;
        console.clear();
        console.log(`\nProduto: X-Bacon\nQuantidade: ${quantidade}\nValor Total: R$${valorTotal.toFixed(2)}`);
        break;
    case 4:
        preco = 12.00;
        valorTotal = quantidade * preco;
        console.clear();
        console.log(`\nProduto: Bauru\nQuantidade: ${quantidade}\nValor Total: R$${valorTotal.toFixed(2)}`);
        break;
    case 5:
        preco = 8.00;
        valorTotal = quantidade * preco;
        console.clear();
        console.log(`\nProduto: Refrigerante\nQuantidade: ${quantidade}\nValor Total: R$${valorTotal.toFixed(2)}`);
        break;
    case 6:
        preco = 13.00;
        valorTotal = quantidade * preco;
        console.clear();
        console.log(`\nProduto: Suco de Laranja\nQuantidade: ${quantidade}\nValor Total: R$${valorTotal.toFixed(2)}`);
        break;
    default:
        console.clear();
        console.log(`Insira uma opção valida do cardapio`);
        break;
}