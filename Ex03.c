#include <stdio.h>
#include <stdlib.h>

void preencheVetor(int *vetor, int tamanho){
    printf("Preencha\n");
    for(int i = 0; i < tamanho; i++){
        scanf("%d", &vetor[i]);
    }
}
void contador(int *vetor, int tamanho){
    int contP = 0, conI = 0;
    for(int i = 0; i < tamanho; i++){
        if(vetor[i] % 2 == 0){
            contP++;
        }
        else{
            conI++;
        }
    }
    printf("Pares: %i Impares: %i", contP, conI);
}


int main()
{
    int *vetorArray = 0;
    int tamanho = 0;
    printf("Tamanho do vetor: ");
    scanf("%d", &tamanho);
    vetorArray = (int *) calloc (tamanho, sizeof(int));

    preencheVetor(vetorArray, tamanho);
    contador(vetorArray, tamanho);

    free(vetorArray);

    return 0;
}
