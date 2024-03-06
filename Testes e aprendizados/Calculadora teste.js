const readline = require('readline-sync');

console.log("Bem vindo a calculadora BNU ! ");
console.log("Escolha uma das opções: \n 1. Adição \n 2. Subtração \n 3. Divisão \n 4. Multiplicação \n 5. Sair");

const operacao = parseInt(readline.question("Escolha uma operação: "));

switch (operacao) {

    case 1:
        console.log("Digite aqui o primeiro número: ");
        const numero1 = parseInt(readline.question());
        console.log("Digite aqui o segundo número: ");
        const numero2 = parseInt(readline.question());
        const soma = numero1 + numero2;
        console.log("Seu resultado é: " + soma);
        break;

    case 2:
        console.log("Digite aqui o primeiro número: ");
        const numerosub = parseInt(readline.question());
        console.log("Digite aqui seu segundo número: ");
        const numero2sub = parseInt(readline.question());
        const sub = numerosub - numero2sub;
        console.log("Seu resultado é: " + sub);
        break;

    case 3:
        console.log("Digite aqui o primeiro número: ");
        const numerodiv = parseInt(readline.question());
        console.log("Digite aqui seu segundo número: ");
        const numero2div = parseInt(readline.question());
        if (numerodiv === 0 || numero2div === 0) {
            console.log("Impossível dividir por zero");
        } else {
            const div = numerodiv / numero2div;
            console.log("Seu resultado é: " + div);
        }
        break;

    case 4:
        console.log("Digite aqui o primeiro número: ");
        const numeromulti = parseInt(readline.question());
        console.log("Digite aqui seu segundo número: ");
        const numero2multi = parseInt(readline.question());
        const multi = numeromulti * numero2multi;
        console.log("Seu resultado é: " + multi);
        break;

    default:
        console.log("Obrigado por usar nossa calculadora !");
        break;
}













