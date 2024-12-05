#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *num;
    int tamanho = 5;
    num = (int *) calloc (tamanho, sizeof(int));
    for(int i = 0; i < tamanho; i++){
        scanf("%d", &num[i]);
    }
    for(int i = 0; i < tamanho; i++){
        printf("\n%d", num[i]);
    }
    return 0;
}
