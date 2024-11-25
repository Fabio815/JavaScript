const arrayNum = [2, 5, 6, 7, 8, 10, 11, 13, 14, 18, 17];
const arrayPar = [];
const arrayImpar = [];

let contPar = 0;
let contImpar = 0;
arrayNum.forEach(function (elemento) {
    if(elemento % 2 == 0){
        /*arrayPar[contPar] = elemento;
        contPar++;*/
        arrayPar.push(elemento);
    }
    else{
        arrayImpar[contImpar] = elemento;
        contImpar++;
    }
});

console.log("Pares: ");
arrayPar.forEach(function(elemento){
    console.log(elemento);
});

console.log("Ìmpares: ");
arrayImpar.forEach(function(elemento){
    console.log(elemento);
});