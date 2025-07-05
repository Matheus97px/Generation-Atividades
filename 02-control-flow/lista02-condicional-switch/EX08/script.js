//Script ira simular as operacoes basicas de uma conta bancaria, ler a operação bancaria baseado na escolha do switch case (1-3), e o valor a ser depositado, e sacado (somente na 2 e 3) ao final de cada operacao ira mostar o novo saldo 

// import readline
const readLine = require('readline-sync');

//exibi as opcoes bancarias na tela 
console.log(`Banco Generations\nEscolha a operacao desejada`);
console.log(`\n\t Operacoes \n1.Saldo\n2.Saque\n3.Deposito`);

//declaracao das variaveis
const opcaoBancaria = readLine.questionInt("Digite a opcao bancaria (1-3): ");
let quantiaDigitada, novoSaldo;
const saldoBancario = 1000.00;


//baseado na escolha do switch case ira calcular e imprimir o novo saldo na tela 
switch (opcaoBancaria) {
    case 1:
        console.clear();
        console.log(`Operacao - Saldo \nSaldo: R$${saldoBancario.toFixed(2)}`);
        break;
    case 2:
        quantiaDigitada = readLine.questionFloat("Digite a quantia: ");
        novoSaldo = saldoBancario - quantiaDigitada;
        console.clear();
        switch (novoSaldo > 0) {
            case true:
                console.log(`Operacao - Saque \nQuantia Sacada: R$${quantiaDigitada.toFixed(2)}\nSaldo: R$${novoSaldo.toFixed(2)}`);
                break;
            default:
                console.log(`Saldo Insuficiente`);
                break;
        }
        break;
    case 3:
        quantiaDigitada = readLine.questionFloat("Digite a quantia: ");
        novoSaldo = saldoBancario + quantiaDigitada;
        console.clear();
        console.log(`Operacao - Deposito \nQuantia Depositada: R$${quantiaDigitada.toFixed(2)}\nSaldo: R$${novoSaldo.toFixed(2)}`);
        break;
    default:
        console.clear();
        console.log(`Operacao Invalida!!!`);
        break;
}


/* opcao utilizando operador ternario,esta comentado, porque nao sei se seria uma resposta valida
switch (opcaoBancaria) {
    case 1:
        console.clear();
        console.log(`Operacao - Saldo \nSaldo: R$${saldoBancario.toFixed(2)}`);
        break;
    case 2:
        quantiaDigitada = readLine.questionFloat("Digite a quantia: ");
        novoSaldo = saldoBancario - quantiaDigitada;
        console.clear();
        console.log(novoSaldo >= 0 ? `Operacao - Saque \nQuantia Sacada: R${quantiaDigitada.toFixed(2)}\nNovo Saldo: R$${novoSaldo.toFixed(2)}` : `Saldo Insuficiente!!`);
        break;
    case 3:
        quantiaDigitada = readLine.questionFloat("Digite a quantia: ");
        novoSaldo = saldoBancario + quantiaDigitada;
        console.clear();
        console.log(`Operacao - Deposito \nQuantia Depositada: R$${quantiaDigitada.toFixed(2)}\nSaldo: R$${novoSaldo.toFixed(2)}`);
        break;
    default:
        console.clear();
        console.log(`Operacao Invalida!!!`);
        break;
}
     */