//Script recebe 3 entradas(informações sobre alguem),um string(nome), numero inteiro(idade), e um boolean(se é a primeira vez doando). e retorna se a pessoa esta apta para doar sangue

// import readline
const readLine = require('readline-sync');


//declaração de variaveis utilizando readline-sync
let nomeDoador = readLine.question("Digite o nome do doador:  ");
let idadeDoador = readLine.questionInt("Digite a idade do doador:  ");
let primeiraVez = readLine.question("Primeira doacao de sangue?   ");


//verificação se o doador é apto para doar 
if (idadeDoador >= 18 && idadeDoador <= 69 && primeiraVez === "sim") {
    if (idadeDoador >= 60 && idadeDoador <= 69) {
        console.log(`${nomeDoador}, não está apto para doar sangue!!`);
    } else {
        console.log(`${nomeDoador}, está apto para doar sangue!!`);
    }
}

//tratamento caso idade seja invalida
else if (idadeDoador < 0 || idadeDoador > 150) {
    console.log(`Insira uma idade valida`);
}
//

else {
    if (idadeDoador >= 18 && idadeDoador <= 69) {
        console.log(`${nomeDoador}, está apto para doar sangue!!`);
    } else {
        console.log(`${nomeDoador}, não está apto para doar sangue!!`);
    }
}
