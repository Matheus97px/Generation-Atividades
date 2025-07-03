//script tera um set collection do tipo number, solicta ao usuario 10 numeros inteiros nao repetidos e adicione-os ao set *individualmente* e mostre na tela todos os elementos da collection set

//import do readLine-sync
import readLine = require('readline-sync');

//declaração do set tipo number
const colecaoNumeros: Set<number> = new Set<number>();

//exibi o inicio do script para o usuario.
console.log(`
                         Bem vindo
        Digite 10 numeros para serem adicionado dento do set
    `)

//exibi para o usuario digitar 10x numeros para serem inseridos no set
colecaoNumeros.add(readLine.questionInt(`Digite um numero:`));
colecaoNumeros.add(readLine.questionInt(`Digite um numero:`));
colecaoNumeros.add(readLine.questionInt(`Digite um numero:`));
colecaoNumeros.add(readLine.questionInt(`Digite um numero:`));
colecaoNumeros.add(readLine.questionInt(`Digite um numero:`));
colecaoNumeros.add(readLine.questionInt(`Digite um numero:`));
colecaoNumeros.add(readLine.questionInt(`Digite um numero:`));
colecaoNumeros.add(readLine.questionInt(`Digite um numero:`));
colecaoNumeros.add(readLine.questionInt(`Digite um numero:`));
colecaoNumeros.add(readLine.questionInt(`Digite um numero:`));

//exibi na tela os numeros do set conforme digitados
console.clear();
console.log(`numeros dentro do set`);
console.table(colecaoNumeros);


