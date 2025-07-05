//script que le 3 strings que definem as caracteristicas de um tipo de animal e exibe o animal que essas caracteristicas definem

// import readline
const readLine = require('readline-sync');


//Exibe para o usuario o que o script faz
console.log(`
    _____________________________________________
    |        Caracteristicas de Animais         |
    |                                           |
    |         Escolha 3 Caracteristicas         |
    |     Veja a Qual Animal Elas Pertencem     |
    |___________________________________________|
`);


console.log(`\tEscolha uma  opção: \n\t Invertebrado \t Vertebrado `);
const opcao1 = readLine.question("Escolha uma caracteristica:  ").toLowerCase();

//apos a primeira caracteristica escolhida, usado if em encadeamento para exibir na tela o animal que as caracteristicas definem. usando tratamento de erro para escolhas de opcoes invalidas
if (opcao1 === "invertebrado") {
    console.log(`\tEscolha uma  opção: \n\t Inseto \t Anelideo `);
    const opcao2 = readLine.question("Digite outra caracteristica:  ").toLowerCase();

    if (opcao2 === "inseto") {
        console.log(`\tEscolha uma  opção: \n\t Hematofago \t Herbivoro `);
        const opcao3 = readLine.question("Digite a ultima caracteristica:  ").toLowerCase();

        if (opcao3 === "hematofago") {
            console.log(`\n as opções escolhidos foram:\n 1.${opcao1}\n 2.${opcao2}\n 3.${opcao3}\n o animal escolhido baseado nas 3 caracteristicas foi: Pulga`);
        }
        else if (opcao3 === "herbivoro") {
            console.log(`\n as opções escolhidos foram:\n 1.${opcao1}\n 2.${opcao2}\n 3.${opcao3}\n o animal escolhido baseado nas 3 caracteristicas foi: Lagarta`);
        }
        else {
            console.log(`Opção invalida!!`);
        }
    }
    else if (opcao2 === "anelideo") {
        console.log(`\tEscolha uma  opção: \n\t Hematofago \t Onivoro `);
       const opcao3 = readLine.question("Digite a ultima caracteristica:  ").toLowerCase();
        if (opcao3 === "hematofago") {
            console.log(`\n as opções escolhidos foram:\n 1.${opcao1}\n 2.${opcao2}\n 3.${opcao3}\n o animal escolhido baseado nas 3 caracteristicas foi: Sanguessuga`);
        } else if (opcao3 === "onivoro") {
            console.log(`\n as opções escolhidos foram:\n 1.${opcao1}\n 2.${opcao2}\n 3.${opcao3}\n o animal escolhido baseado nas 3 caracteristicas foi: Minhoca`);
        }
    }
    else {
        console.log(`Opção invalida!!`);
    }

} else if (opcao1 === "vertebrado") {
    console.log(`\tEscolha uma  opção: \n\t Ave \t Mamifero `);
   const opcao2 = readLine.question("Digite outra caracteristica:  ").toLowerCase();
    if (opcao2 === "ave") {
        console.log(`\tEscolha uma  opção: \n\t Carnivoro \t Onivoro `);
       const opcao3 = readLine.question("Digite a ultima caracteristica:  ");
        if (opcao3 === "carnivoro") {
            console.log(`\n as opções escolhidos foram:\n 1.${opcao1}\n 2.${opcao2}\n 3.${opcao3}\n o animal escolhido baseado nas 3 caracteristicas foi: Aguia`);
        } else if (opcao3 === "onivoro") {
            console.log(`\n as opções escolhidos foram:\n 1.${opcao1}\n 2.${opcao2}\n 3.${opcao3}\n o animal escolhido baseado nas 3 caracteristicas foi: Pomba`);
        } else {
            console.log(`Opção invalida!!`);
        }
    } else if (opcao2 === "mamifero") {
        console.log(`\tEscolha uma  opção: \n\t Onivoro \t Herbivoro `);
       const opcao3 = readLine.question("Digite a ultima caracteristica:  ").toLowerCase();
        if (opcao3 === "herbivoro") {
            console.log(`\n as opções escolhidos foram:\n 1.${opcao1}\n 2.${opcao2}\n 3.${opcao3}\n o animal escolhido baseado nas 3 caracteristicas foi: Vaca`);
        } else if (opcao3 === "onivoro") {
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




