const numero1= parseFloat(document.getElementById("Número 1").value);
const numero2= parseFloat(document.getElementById("Número 2").value);

const Adição= numero1 + numero2;
const menos= numero1 - numero2;
const dividir= numero1/numero2;
const multiplicar= numero1*numero2;


function soma(){

 realizarOperação('+');

 }


 function subtração(){

    realizarOperação('-');
   
    }



    function divisao(){
        
        realizarOperação('/');


}

function multiplicacao(){

    realizarOperação('*');
   
    }
        
if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, insira números válidos.");
    return;
}

let resultado;

switch (operador) {
    case '+':
        resultado = numero1 + numero2;
        break;
    case '-':
        resultado = numero1 - numero2;
        break;
    case '*':
        resultado = numero1 * numero2;
        break;
    case '/':
        if (numero2 === 0) {
            alert("Não é possível dividir por zero.");
            return;
        }
        resultado = numero1 / numero2;
        break;
    default:
        alert("Operação inválida.");
        return;
}

document.getElementById("resultado").value = resultado;
       




















