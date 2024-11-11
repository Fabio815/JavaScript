const pessoas  = [
    {
        nome: "Robson",
        idade: 26,
        cidade: "Goiania"
    }
];

pessoas.push({nome: "Fábio", idade: 24, cidade: "Gaspar"});
pessoas.push({nome: "Larissa", idade: 24, cidade: "Gaspar"});

//Criar uma função que devolve uma pessoa recevbendo nome, idade, cidade. Adicionar a pessoa na lista e imprimir a pessoas.
pessoas.push({nome: "Jean", idade: 30, cidade: "Blumenau"});
pessoas.push({nome: "Luz", idade: 21, cidade: "Belem"});
pessoas.push({nome: "Erico", idade: 30, cidade: "Gaspar"});

for(let i = 0; i < pessoas.length; i++){
    console.log(pessoas[i]);
}