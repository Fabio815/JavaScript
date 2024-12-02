const numeros = [1, 4, 7, 3, 5, 7, 8, 10];

// numeros.map((elemento, indece) =>{
//     console.log(`elemento: ${elemento} indece: ${indece}`);
// });
// function im(ele){
//     console.log(ele);
// }

// numeros.map(im);

// const convert = num => parseInt(num);
// let num = ['1', '8', '9', '5', '4'].map(convert);
// console.log(num);

// num.map((elemento)=>{
//     console.log(elemento);
// });

// const pessoas = [
//     { nome: "Pedro", idade: 28 },
//     { nome: "Roberto", idade: 25 },
//     { nome: "José", idade: 30 },
//     { nome: "Maria", idade: 32 }
// ];

// const imprimi = nome => (console.log(nome));
// const result = pessoas.filter(elemento => elemento.idade >= 30).map(imprimi);

// const array = [10, 3, 5, 6, 7, 4];


// let achado = array.findIndex(elemento => elemento == 5);
// console.log(achado);

// const array = [5, 7, 8, 5, 10, 3, 4, 67, 2];

// function verifica(a, b){
//     if(a < b){
//         return -1;
//     }
// }

// array.sort(verifica);
// console.log(array);

const pessoas = [
    { nome: "Pedro", idade: 28 },
    { nome: "Roberto", idade: 25 },
    { nome: "José", idade: 30 },
    { nome: "Maria", idade: 32 }
];
pessoas.sort((a, b) => b.idade - a.idade);
pessoas.forEach(element => {
    console.log(element);
});

// pessoas.reverse();
// pessoas.forEach(element => {
//     console.log(element);
// });