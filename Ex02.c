#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *num;
    int tamanho = 5;
    printf("Digite o tamanho do vetor: ");
    scanf("%d", &tamanho);

    num = (int *) calloc (tamanho, sizeof(int));
    for(int i = 0; i < tamanho; i++){
        scanf("%d", &num[i]);
    }
    for(int i = 0; i < tamanho; i++){
        printf("\n%i", num[i]);
    }
    return 0;
}
