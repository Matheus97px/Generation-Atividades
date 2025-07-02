//script que le 3 strings que definem as caracteristicas de um tipo de animal e exibe o animal que essas caracteristicas definem

// import readline
const readLine = require('readline-sync');

//declaração de variaveis para poder usar dentro dos escopos 
let opcao1, opcao2, opcao3;


console.log(`\tEscolha uma  opção: \n\t Invertebrado \t Vertebrado `);
opcao1 = readLine.question("Escolha uma caracteristica:  ");

//apos a primeira caracteristica escolhida, usado if em encadeamento para exibir na tela o animal que as caracteristicas definem. usando tratamento de erro para escolhas de opcoes invalidas
if (opcao1 === "Invertebrado") {
    console.log(`\tEscolha uma  opção: \n\t Inseto \t Anelideo `);
    opcao2 = readLine.question("Digite outra caracteristica:  ");

    if (opcao2 === "Inseto") {
        console.log(`\tEscolha uma  opção: \n\t Hematofago \t Herbivoro `);
        opcao3 = readLine.question("Digite a ultima caracteristica:  ");

        if (opcao3 === "Hematofago") {
            console.log(`\n as opções escolhidos foram:\n 1.${opcao1}\n 2.${opcao2}\n 3.${opcao3}\n o animal escolhido baseado nas 3 caracteristicas foi: Pulga`);
        }
        else if (opcao3 === "Herbivoro") {
            console.log(`\n as opções escolhidos foram:\n 1.${opcao1}\n 2.${opcao2}\n 3.${opcao3}\n o animal escolhido baseado nas 3 caracteristicas foi: Lagarta`);
        }
        else {
            console.log(`Opção invalida!!`);
        }
    }
    else if (opcao2 === "Anelideo") {
        console.log(`\tEscolha uma  opção: \n\t Hematofago \t Onivoro `);
        opcao3 = readLine.question("Digite a ultima caracteristica:  ");
        if (opcao3 === "Hematofago") {
            console.log(`\n as opções escolhidos foram:\n 1.${opcao1}\n 2.${opcao2}\n 3.${opcao3}\n o animal escolhido baseado nas 3 caracteristicas foi: Sanguessuga`);
        } else if (opcao3 === "Onivoro") {
            console.log(`\n as opções escolhidos foram:\n 1.${opcao1}\n 2.${opcao2}\n 3.${opcao3}\n o animal escolhido baseado nas 3 caracteristicas foi: Minhoca`);
        }
    }
    else {
        console.log(`Opção invalida!!`);
    }

} else if (opcao1 === "Vertebrado") {
    console.log(`\tEscolha uma  opção: \n\t Ave \t Mamifero `);
    opcao2 = readLine.question("Digite outra caracteristica:  ");
    if (opcao2 === "Ave") {
        console.log(`\tEscolha uma  opção: \n\t Carnivoro \t Onivoro `);
        opcao3 = readLine.question("Digite a ultima caracteristica:  ");
        if (opcao3 === "Carnivoro") {
            console.log(`\n as opções escolhidos foram:\n 1.${opcao1}\n 2.${opcao2}\n 3.${opcao3}\n o animal escolhido baseado nas 3 caracteristicas foi: Aguia`);
        } else if (opcao3 === "Onivoro") {
            console.log(`\n as opções escolhidos foram:\n 1.${opcao1}\n 2.${opcao2}\n 3.${opcao3}\n o animal escolhido baseado nas 3 caracteristicas foi: Pomba`);
        } else {
            console.log(`Opção invalida!!`);
        }
    } else if (opcao2 === "Mamifero") {
        console.log(`\tEscolha uma  opção: \n\t Onivoro \t Herbivoro `);
        opcao3 = readLine.question("Digite a ultima caracteristica:  ");
        if (opcao3 === "Herbivoro") {
            console.log(`\n as opções escolhidos foram:\n 1.${opcao1}\n 2.${opcao2}\n 3.${opcao3}\n o animal escolhido baseado nas 3 caracteristicas foi: Vaca`);
        } else if (opcao3 === "Onivoro") {
            console.log(`\n as opções escolhidos foram:\n 1.${opcao1}\n 2.${opcao2}\n 3.${opcao3}\n o animal escolhido baseado nas 3 caracteristicas foi: Homem`);
        } else {
            console.log(`Opção invalida!!`);
        }
    } else {
        console.log(`Opção invalida!!`);
    }
} else {
    console.log(`Opção invalida!!`);
}




