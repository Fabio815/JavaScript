/*function mostrarValor(){


    var num1 = 20;
    console.log(num1);
}
mostrarValor();
*/

/*ancora();

function ancora(){
    console.log("Hoisting");
}*/

/*function exibirMensagem(idade){
    console.log("a sua idade é de: " + idade);
}

function calculaIdade(nascimento, callback){
    const anoAtual = new Date();
    let idade = anoAtual.getFullYear() - nascimento;
    callback(idade);
}

calculaIdade(2005, exibirMensagem);*/

//função
/*function soma(a, b){
    return a + b;
}*/
//Arrow function
/*soma = (a, b) =>{
    return a + b;
}
console.log(soma(3, 5));*/

//Quando temos apenas um parametro de entrada.
//Não precisamos usar o return.
/*const soma = num => num + 10;
console.log(soma(20));*/

//Caso tenha apenas um parametro.
/*const soma = num => {return num + 5}
console.log(soma(5));*/
let num = 10;
function verificar(num, callback) {
    let resultado = num % 2 == 0 ? "Par" : "Impar";
    callback(resultado);
}

verificar(num, function(resultado) {
    console.log(`O número é ${resultado}`);
});