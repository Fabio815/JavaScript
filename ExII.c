#include <stdio.h>
#include <stdlib.h>
#include <time.h>

struct Nome{
    int nomeUm;
};

struct Controlador{
    int quantidade;
    struct Nome *listaDeNomes;
};

preencherVetor(struct Controlador vetor){
    for (int i = 0; i < vetor.quantidade; i++)
    {
        printf("Nome %d:", i+1);
        scanf("%s", vetor.listaDeNomes[i].nomeUm);
    }
}

imprimirNomes(struct Controlador vetor){
    for (int i = 0; i < vetor.quantidade; i++){
        printf("Nome %d: %s", i+1, vetor.listaDeNomes[i].nomeUm);
    }
}

int main()
{
    struct Controlador vetorNomes;
    printf("Digite a quantidade de nomes: ");
    scanf("%d", &vetorNomes.quantidade);
    vetorNomes.listaDeNomes = (struct Nome*) calloc (vetorNomes.quantidade, sizeof(struct Nome));
    preencherVetor(vetorNomes);
    imprimirNomes(vetorNomes);
    return 0;
}
