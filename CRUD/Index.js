const { rejects } = require('assert');
const { error } = require('console');
const { json } = require('stream/consumers');

const fs = require('fs');
const caminhoArquivo = 'C:/Users/fabio/Desktop/JavaScript/CRUD/Livros.json';
let novoItem = 
    {
        id: 7,
        Nome: "pao 2",
        Autor: "Fábio",
        Ano: 2026
    }

let novo = {
    id: 7,
    Nome: "Vinte Mil Léguas Submarinas",
    Autor: "Júlio Verne",
    Ano: 2006
}

//CREATE
const Adicionar = (caminho, livroParaAdidiconar) =>{
    const promiseCall = (resultado, reject) =>{
        fs.readFile(caminho, 'utf-8', (erro, dados) => {
            if(erro){
                reject(`Algo deu errado: ${erro}`);
                return;
            }
            try{
                const jsonLivro = JSON.parse(dados);
                jsonLivro.push(livroParaAdidiconar);
                fs.writeFile(caminho, JSON.stringify(jsonLivro, null, 2), 'utf-8', (erro) => {
                    if(erro){
                        reject("Algo deu errado: ", erro);
                    }
                    resultado(true);
                });
            } catch(exception) {
                reject(`Erro ${exception}`);
            }

        });
    }
    return new Promise(promiseCall);
}

//READ
const Listar = (caminho) =>{
    const promiseCall = (resultado, reject) => {
        fs.readFile(caminho, 'utf-8', (erro, dados) => {
            if(erro){
                reject("Deu erro: ", erro);
            }
            const livrosJson = JSON.parse(dados);
            livrosJson.forEach(elemento => {
                console.log(`Id ${elemento.id}:`);
                console.log(`Nome: ${elemento.Nome}`);
                console.log(`Autor: ${elemento.Autor}`);
                console.log(`Ano: ${elemento.Ano}`);
                console.log('------------------------');
            });
            resultado(true);
        });
    }
    return new Promise(promiseCall);
}

//Remover
const Remover = (caminho, nome, autor) => {
    const promiseCall = (resultado, reject) =>{
        fs.readFile(caminho, 'utf-8', (erro, dados) => {
            if(erro){
                return reject("Erro: ", erro);
            }
            try{
                let livros = JSON.parse(dados);
                const livroAchado = livros.filter(elemento => !(elemento.Nome == nome && elemento.Autor == autor));
                fs.writeFile(caminho, JSON.stringify(livroAchado, null, 2), (erro) => {
                    if(erro){
                        reject("Algo deu errdo... ", erro);
                    }
                    resultado("Item excluído com sucesso!");
                });
            } catch (error){
                reject(error);
            }
        })
    }
    return new Promise(promiseCall);
}

const Procurar = (caminho, nome, autor) =>{
    const promiseCall = (resultado, reject) =>{
        fs.readFile(caminho, 'utf8', (erro, dados) => {
            if(erro){
               return reject("Algo deu errado: ", erro);
            }

            try{
                const livros = JSON.parse(dados);
                const achado = livros.find(elemento => elemento.Nome == nome && elemento.Autor == autor);
                if(achado){
                    resultado(achado);
                    Mostrar(achado);
                } else {
                    resultado(null);
                }

            } catch(err){
                reject("Erro: ", err);
            }
        })
    }
    return new Promise(promiseCall);
}

const Modificar = (caminho, livroAtualizado, id) => {
    const promiseCall = (resultado, rejects) => {
        fs.readFile(caminho, 'utf-8', (erro, dados) =>{
            if(erro){
                return rejects("Erro: ", dados);
            }
            try{
                const livros = JSON.parse(dados);
                const livroAchado = livros.findIndex(elemento => elemento.id == id);
                if(livroAchado == -1){
                    rejects("Livro não encontrado");
                }
                    livros[livroAchado] = {...livros[livroAchado], ...livroAtualizado}
                    fs.writeFile(caminho, JSON.stringify(livros, null, 2), 'utf-8');
                    resultado("Livro modificado com sucesso!");
            } catch (e){
                rejects(e);
            }
        })
    }
    return new Promise(promiseCall);
}

const Mostrar = (livro) =>{
    console.log(`Id: ${livro.id}`);
    console.log(`Nome: ${livro.Nome}`);
    console.log(`Autor: ${livro.Autor}`);
    console.log(`Ano: ${livro.Ano}`);
    console.log('------------------------');
}

/*Procurar(caminhoArquivo, "As Crônicas de Gelo e Fogo", "George R.R Martin")
.then(resultado => {
    if(resultado){
        console.log("Livro encontrado!");
    } else {
        console.log("Livro não encontrado!");
    }
})
.catch(erro => {
    console.log("Erro: ", erro);
})*/

/*Adicionar(caminhoArquivo, novoItem)
.then(resultado => {
    if(resultado){
        console.log("Livro Adicionado com sucesso!");
    } else {
        console.log("Livro não adicionado... Tente novamente");
    }
})
.catch(erro => {
    console.log("Erro: ", erro);
});*/

/*Listar(caminhoArquivo)
.then(resultado => {
    if(resultado){
        console.log("Todos os livros");
    } else {
        console.log("Algo deu errado.");
    }
})
.catch(erro => {
    console.log(erro);
});*/

/*Remover(caminhoArquivo, "pao 2", "Fábio")
.then(resultado => {
    if(resultado){
        console.log(resultado);
    }
})
.catch(erro => console.log(erro));*/

/*Modificar(caminhoArquivo, novo, 7)
.then(resultado => {
    if(resultado){
        console.log(resultado)
    }
})
.catch(erro => {
    console.log(erro);
})*/