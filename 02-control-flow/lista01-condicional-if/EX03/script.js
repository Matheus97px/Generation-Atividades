//Script recebe 3 entradas(informações sobre alguem),um string(nome), numero inteiro(idade), e um boolean(se é a primeira vez doando). e retorna se a pessoa esta apta para doar sangue

// import readline
const readLine = require('readline-sync');

//Exibe para o usuario o que o script faz
console.log(`
    _____________________________________________
    |        Sistema de Doacao de Sangue        |
    |                                           |
    |          Digite Seu Nome, Idade,          |
    |          Primeira Vez: (s) ou (n)         |
    |        Veremos Se Esta Apto ou Nao        |
    |___________________________________________|
`);

//declaração de variaveis utilizando readline-sync
const nomeDoador = readLine.question("Digite o nome do doador:  ");
const idadeDoador = readLine.questionInt("Digite a idade do doador:  ");
const primeiraVez = readLine.question("Primeira doacao de sangue? (s)(n): ").toLowerCase();


//verificação se o doador é apto para doar 
if (idadeDoador >= 18 && idadeDoador <= 69 && primeiraVez === "s") {
    if (idadeDoador >= 60 && idadeDoador <= 69) {
        console.clear();
        console.log(`${nomeDoador}, não está apto para doar sangue!!`);
    } else {
        console.clear();
        console.log(`${nomeDoador}, está apto para doar sangue!!`);
    }
}

//tratamento caso idade seja invalida
else if (idadeDoador < 0 || idadeDoador > 150) {
    console.clear();
    console.log(`Insira uma idade valida`);
}
//tratamento caso usuario digite outra coisa alem do desejado na primeira vez
else if (primeiraVez != 's' && primeiraVez != 'n') {
    console.clear();
    console.log(`Opcao invalida! Insira (s) ou (n)`);
}

else {
    if (idadeDoador >= 18 && idadeDoador <= 69) {
        console.clear();
        console.log(`${nomeDoador}, está apto para doar sangue!!`);
    } else {
        console.clear();
        console.log(`${nomeDoador}, não está apto para doar sangue!!`);
    }
}
0