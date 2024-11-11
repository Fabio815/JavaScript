const pessoas  = [
    {
        nome: "Robson",
        idade: 26,
        cidade: "Goiania"
    }
];

//pessoas.push({nome: "Fábio", idade: 24, cidade: "Gaspar"});
//pessoas.push({nome: "Larissa", idade: 24, cidade: "Gaspar"});

//Criar uma função que devolve uma pessoa recevbendo nome, idade, cidade. Adicionar a pessoa na lista e imprimir a pessoas.
//pessoas.push({nome: "Jean", idade: 30, cidade: "Blumenau"});
//pessoas.push({nome: "Luz", idade: 21, cidade: "Belem"});
//pessoas.push({nome: "Erico", idade: 30, cidade: "Gaspar"});

function adicionarPessoas(nomePessoa, idadePessoa, cidadePessoa){
    pessoas.push({nome: nomePessoa, idade: idadePessoa, cidade: cidadePessoa});
}

function imprimirPessoas(nomeProcurado){
    for(let i = 0; i < pessoas.length; i++){
        if(pessoas[i].nome === nomeProcurado){
            console.log(pessoas[i]);
        }
    }
}

adicionarPessoas("Fábio", 24, "Curitiba");
adicionarPessoas("Larissa", 24, "Gaspar");
adicionarPessoas("Jean", 30, "Blumenau");
adicionarPessoas("Luz", 21, "Belem");
adicionarPessoas("Erico", 30, "Gaspar");

imprimirPessoas("jean");