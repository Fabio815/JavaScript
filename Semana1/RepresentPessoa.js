const pessoa = {
    nome: "Joelson",
    idade: 18,
    cidade: "Curitiba",

    aniversario(){
        this.idade += 1;
    },
    imprimirDados(){
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nCidade ${this.cidade}`);
    }
}

pessoa.aniversario();
pessoa.imprimirDados();