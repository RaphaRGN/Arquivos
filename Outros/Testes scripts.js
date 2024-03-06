
/*alerta no console

alert("Bem vindo a Página!")
console.log("Teste console")

var nome="Raphael"
var idade= 17
var letra_da_namorada="a"
console.log(nome, idade, letra_da_namorada)

var Nomes_família= ["Raphael", "Ariane", "Amélia", "Théo","Nathalia"]
 console.log(Nomes_família)




const Nascimento = prompt("Digite sua data de nascimento")

if (Nascimento === "25112006"){
console.log("Certo")  
}
else{
console.log("Errado")

}

const Beber = prompt("Digite sua idade")
if (Beber >= 18){
    alert("Tá podendo ein")
}


else{

alert("Tá não mano")

}

var i = 0;
while (i<10){
    console.log(i);
i++
}
*/
/*
var o = 0
var somatoria = ' '
do{

o += 1;
somatoria += o + ' ';

}
while 
(o < 10);
console.log(o);
console.log(somatoria);
*/
/*
var idade = prompt("Digite sua idade");
var Escolaridade = false;
var sexo = true;

if (idade < 18){

alert("Você não está apto a escola")
window.close
}
else if (Escolaridade = true && idade < 18){

alert("Você está apto a escola(Alert2)")

}
else{

alert("você não está apto a escola (else)");

}

*/
/*
var desejo = prompt("Deseja mudar o CSS ?")


if(desejo == "Sim"){

    
$("p").removeClass("#p");
$("p").addClass("#button");

}

*/
/*
var nota1= prompt("Digite aqui a primeira nota:");
var nota2= prompt("Digite aqui a segunda nota:");
nota1=parseFloat(nota1);
nota2=parseFloat(nota2);
var Soma= nota1 + nota2;
var Média= Soma / 2;

if (Média >= 6){

alert("Você passou!");

}
else{
    alert("Você não passou");
}
*/
/*
var nota1= prompt("Digite aqui a nota do primeiro trimestre");
var nota2= prompt("Digite aqui a nota do segundo trimestre");
var nota3= prompt ("Digite aqui a nota do terceiro trimestre");
nota1=parseFloat(nota1);
nota2=parseFloat(nota2);
nota3=parseFloat(nota3);
var soma= nota1 + nota2 + nota3;
var Média= soma / 3;

if (Média>=6){

alert("Você passou")

}

else{

alert("você reprovou")

}

*/

var Idade= prompt("Digite o ano de seu nascimento");
parseFloat(Idade);
var Ano_Atual= "2024";
var Idade= Ano_Atual - Idade;
console.log(Idade)

if (Idade >= 18){

alert("Você é maior de idade, Você tem: "+Idade+" anos.")

}

else{

alert("Você é menor de idade, você tem: "+Idade+" anos.")

}