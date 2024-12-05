#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    char *vetorS;
    int tamanho;
    printf("tamanho da string: ");
    scanf("%d", &tamanho);
    vetorS = (char*) malloc (tamanho * sizeof(char));
    strcpy(vetorS, "Cachorro");

    for(int i = 0; i < tamanho; i++){
        if(vetorS[i] != 'a' && vetorS[i] != 'e' && vetorS[i] != 'i' && vetorS[i] != 'o' && vetorS[i] != 'u'){
            printf("%c", vetorS[i]);
        }
    }

    free(vetorS);
    return 0;
}
