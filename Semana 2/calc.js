const objPessoas = [{
    nome: "Rodrigo",
    //idade: 27,
    cidade: "Goiania"
}];

function adicionarPessoas(nomePessoa, idadePessoa, cidadePessoa){
    objPessoas.push({nome: nomePessoa, idade: idadePessoa, cidade: cidadePessoa});
}


/*adicionarPessoas("Jose", 14, "Gaspar");
adicionarPessoas("Maria", 16, "Gaspar");
adicionarPessoas("Mario", 17, "Gaspar");
adicionarPessoas("Fábio", 24, "Curitiba");
adicionarPessoas("Larissa", 24, "Gaspar");
adicionarPessoas("Jean", 30, "Blumenau");
adicionarPessoas("Luz", 21, "Belem");
adicionarPessoas("Erico", 30, "Gaspar");*/

function mediaIdade(pessoas){
    let mediaMaiores = 0, contMaiores = 0;;
    pessoas.forEach(function(elemento, i){
        //console.log(i);
        if(elemento.idade >= 18){
            mediaMaiores += elemento.idade;
            contMaiores++;
        }
    });
    return contMaiores > 0 ? mediaMaiores / contMaiores : "Nada";
    /*if(contMaiores > 0){
        return mediaMaiores / contMaiores;
    }
    return 0;*/
}


console.log(mediaIdade(objPessoas));