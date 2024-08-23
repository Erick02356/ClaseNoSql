//import PromptSync from 'prompt-sync';




const prompt = require('prompt-sync')();

const catalogo = ['Audi','Toyota','Mercedes']
console.log('Nuestro Catalogo')
for (let index = 0; index < catalogo.length; index++) {
    const element = catalogo[index];

    let msg = index + ' ' + catalogo[index]
    console.log(msg)


   
}
let atributo = parseInt(prompt('Escoje un numero para un catalogo: '));

switch (atributo) {
    case 0:
        console.log(carro)
        break;
    case 1:
        console.log(carro2)
        break;
    case 2:
        console.log(carro3)
        break;
    default:
        break;
}
// let objeto = carro.atributo