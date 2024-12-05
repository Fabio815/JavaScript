#include <stdlib.h>


void fazerVetor(int **vetor, int tamanho) {
    *vetor = (int*) malloc(tamanho * sizeof(int));
    for (int i = 0; i < tamanho; i++) {
        printf("Digite o valor para a posi��o %d: ", i);
        scanf("%d", &(*vetor)[i]);
    }
}


void multiplos(int valor, int *vetor, int tamanho) {
    int cont = 0;
    printf("M�ltiplos de %d no vetor: ", valor);
    for (int i = 0; i < tamanho; i++) {
        if (vetor[i] % valor == 0) {
            printf("%d ", vetor[i]);
            cont++;
        }
    }
    printf("\nTotal de m�ltiplos de %d: %d\n", valor, cont);
}

int main() {
    int *vetorN, tamanho, valor;

    printf("Digite o tamanho do vetor: ");
    scanf("%d", &tamanho);

    fazerVetor(&vetorN, tamanho);

    printf("Vetor: ");
    for (int i = 0; i < tamanho; i++) {
        printf("%d ", vetorN[i]);
    }
    printf("\n");


    printf("Digite um valor para encontrar os m�ltiplos: ");
    scanf("%d", &valor);
    multiplos(valor, vetorN, tamanho);


    free(vetorN);

    return 0;
}
