//script le tres numeros inteiros e cada um deles corresponde a um menu de uma pesquisa (idade, identidade de genero e pessoa desenvolvedora) apos isso perguntar se quer continuar caso nao exibi na tela o numero de pessoas backend, de Mulheres Cis e Trans desenvolvedoras Frontend (e tbm maiores de 40), de Não Binários desenvolvedores FullStack menores de 30 anos, total de pessoas que responderam à pesquisa, e media de idade das pessoas que responderam à pesquisa

//import do readLine-sync
const readLine = require("readline-sync");

//declaraçao  das variaveis
let pessoasBackend = 0, frontMulher = 0, frontHomem = 0, naoBinarioFull = 0, totalPesquisa = 0, media = 0, contador = 0;

let continuar = 's'


while (continuar === 's') {
    console.log(`*Pesquisa Interna*`);
    //solicita novamente idade enquanto loop for valido
    let idade = readLine.questionInt(`Digite sua idade: `);
    //limpa o terminal
    console.clear();

    console.log(`
Identidade de Gênero (1-6)
    1 - Mulher Cis
    2 - Homem Cis
    3 - Não Binário
    4 - Mulher Trans
    5 - Homem Trans
    6 - Outros
        `);
    //solicita novamente identidade de genero enquanto loop for valido
    let identidadeGenero = readLine.questionInt(`Escolha sua identidade de genero: `);
    //limpa o terminal
    console.clear();

    console.log(`
Pessoa Desenvolvedora (1-4)
    1 - Backend
    2 - Frontend
    3 - Mobile
    4 - FullStack
        `);
    //solicita novamente pessoa desenvolvedora enquanto loop for valido
    let pessoaDev = readLine.questionInt(`Escolha sua identidade de genero: `);
    //limpa o terminal
    console.clear();

    //verifica se quer manter o loop ou nao
    continuar = readLine.question(`deseja continuar a leitura dos dados de um novo colaborador ou nao (S/N)`).toLowerCase();
    //verifica se a opcao é valida se nao ele solicita novamente
    while (continuar != 's' && continuar != 'n') {
        //limpa o terminal
        console.clear();
        //verifica se quer manter o loop ou nao
        continuar = readLine.question(`deseja continuar a leitura dos dados de um novo colaborador ou nao (S/N)`).toLowerCase();
    }
    //verifica as condiçoes e incrementa em 1 as variaveis relacionada as suas condições 
    if (pessoaDev === 1) {
        pessoasBackend++;
    } else if (pessoaDev === 2 && (identidadeGenero === 1 || identidadeGenero === 4)) {
        frontMulher++;
    } else if (pessoaDev === 2 && idade > 40 && (identidadeGenero === 2 || identidadeGenero === 5)) {
        frontHomem++;
    } else if (identidadeGenero === 3 && pessoaDev === 4 && idade < 30) {
        naoBinarioFull++;
    }
    //conta uma pesquisa finalizada 
    totalPesquisa++;
    //armazena o total da idade
    contador += idade;
}
//calcula a media de todas as idades 
media = contador / totalPesquisa;

//limpa o terminal
console.clear()

//exibi na tela o  resultado da pesquisa
console.log(`
    Total de pessoas desenvolvedoras Backend: ${pessoasBackend}
    Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${frontMulher}
    Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${frontHomem}
    Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${naoBinarioFull}
    O número total de pessoas que responderam à pesquisa: ${totalPesquisa}
    A média de idade das pessoas que responderam à pesquisa: ${media.toFixed(2)}
    `);
