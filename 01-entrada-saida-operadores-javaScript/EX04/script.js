//script le 4 entradas (numeros reais) e exibe ao usuario a diferenca (n1 * n2) entre (n3 * n4) 

//import do readline
const readLine = require("readline-sync");

//Exibe para o usuario o que o script faz
console.log(`
    _____________________________________________
    |            Ola! Bem Vindo(a)!!            |
    |                                           |
    |             Digite 4 numeros              |
    |                                           |
    |             Vai Ser Calculado             |
    |           (n1 * n2)   (n3 * n4)           |
    |                                           |
    |   Retornaremos a Diferenca entre Eles     |
    |___________________________________________|
`);


//declaração das variaveis utilizando readline
const numero1 = readLine.questionFloat("Digite o primeiro numero: ");
const numero2 = readLine.questionFloat("Digite o segundo numero: ");
const numero3 = readLine.questionFloat("Digite o terceiro numero: ");
const numero4 = readLine.questionFloat("Digite o quarto numero: ");

//variavel "diferenca" que recebe e calcula (n1 * n2) (n3 * n4) e faz uma subtracao para obter a diferenca
const diferenca = (numero1 * numero2) - (numero3 * numero4);

//limpa o terminal
console.clear();

//saida no terminal exibindo para o usuario a diferenca entre eles
console.log(`A diferença entre eles e :${diferenca.toFixed(1)}`);