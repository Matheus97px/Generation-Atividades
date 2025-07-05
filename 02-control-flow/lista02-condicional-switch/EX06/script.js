//Script Le o nome do colaborador, o codigo de seu cargo (numero inteiro), e o salario(float - numero real),e exibe na tela o nome dele, seu cargo, e o novo salario reajustado

// import readline
const readLine = require('readline-sync');


//Exibi as opcoes de cargos 
console.log(`Veja Seu Reajuste Salarial`);
console.log(`\n\t Cargo \n1.Gerente\n2.Vendedor\n3.Supervisor\n4.Motorista\n5.Estoquista\n6.Tecnico de TI`);

//declaracao das variaveis utilizando o readline-sync
const opcaoCargo = readLine.questionInt("\nDigite sua escolha (1-6):  ");
const nomeColaborador = readLine.question("Digite seu nome: ");
const salario = readLine.questionFloat("Digite seu salario: ");

//declaracao do novoSalario undefined, para receber um valor dentro do switch case
let novoSalario;


//apos a escolha e entrada das variaveis, baseado na escolha do cargo é atribuido a novoSalario o valor do salario reajustado referente ao porcentual do cargo
switch (opcaoCargo) {
    case 1:
        novoSalario = salario + (salario * 0.10);
        console.clear();
        console.log(`\nNome do colaborador: ${nomeColaborador}\nCargo: Gerente\nNovo Salario: R$${novoSalario.toFixed(2)}`);
        break;
    case 2:
        novoSalario = salario + (salario * 0.07);
        console.clear();
        console.log(`\nNome do colaborador: ${nomeColaborador}\nCargo: Vendedor\nNovo Salario: R$${novoSalario.toFixed(2)}`);
        break;
    case 3:
        novoSalario = salario + (salario * 0.09);
        console.clear();
        console.log(`\nNome do colaborador: ${nomeColaborador}\nCargo: Supervisor\nNovo Salario: R$${novoSalario.toFixed(2)}`);
        break;
    case 4:
        novoSalario = salario + (salario * 0.06);
        console.clear();
        console.log(`\nNome do colaborador: ${nomeColaborador}\nCargo: Motorista\nNovo Salario: R$${novoSalario.toFixed(2)}`);
        break;
    case 5:
        novoSalario = salario + (salario * 0.05);
        console.clear();
        console.log(`\nNome do colaborador: ${nomeColaborador}\nCargo: Estoquista\nNovo Salario: R$${novoSalario.toFixed(2)}`);
        break;
    case 6:
        novoSalario = salario + (salario * 0.08);
        console.clear();
        console.log(`\nNome do colaborador: ${nomeColaborador}\nCargo: Tecnico de TI\nNovo Salario: R$${novoSalario.toFixed(2)}`);
        break;
    default:
        console.clear();
        console.log(`\nInsira uma opção valida`);
        break;
}