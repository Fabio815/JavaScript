//READ
//Usamos o require para acessar um arquivo JSON em JS
//const user = require('./Dados.json');
// console.log(user.Livros[0]);

//READ
//Porém é melhor usarmos a fs que é uma biblioteca nativa do node.js para pegar o JSON, porque ela tem função assincrona.
const fs = require('fs');
const caminhoArquivo = 'C:/Users/fabio/Desktop/JavaScript/CRUD/Livros.json'
/*fs.readFile(caminhoArquivo, 'utf-8', (error, dados) => {
    //Tratando o erro
    if(error){
        console.log(error);
        return;
    }

    try{
        //Convertendo o JSON em objeto.
        const user = JSON.parse(dados);
        console.log(user[0]);
    }catch(erro){
        console.log(erro);
    }
});*/

let novoDado = {
    id: 6,
    Nome: "pao",
    Autor: "Fábio",
    Ano: 2024
}


//INSERT
//Primeiro tenho que ler o arquivo e depois adicionar um novo item nele.
fs.readFile(caminhoArquivo, 'utf-8', (erro, dados) => {
    if(erro){
        console.log(erro);
    }
    try{
        const livros = JSON.parse(dados);
        livros.push(novoDado);

        fs.writeFile(caminhoArquivo, JSON.stringify(livros, null, 2), 'utf-8', (erro) =>{
            if(erro){
                console.log("Deu erro: ", erro);
                return;
            }
            console.log("Dado cadastrado com sucesso!");
        })
    }catch(e){
        console.log(e);
    }
})

//UPDATE
