#include <stdio.h>
#include <stdlib.h>
#include <time.h>

struct Numero{
    int valor;
};

struct Principal{
    int valorInicial;
    struct Numero *listaDeNumeros;
};

int main()
{

    srand(time(NULL));

    struct Principal vetorNum;
    int tamanho = 0;

    printf("Tamanho do vetor: ");
    scanf("%d", &tamanho);
    printf("Valor inicial: ");
    scanf("%d", &vetorNum.valorInicial);

    vetorNum.listaDeNumeros = (struct Numero*) malloc (tamanho * sizeof(struct Numero));
    for(int i = 0; i < tamanho; i++){
        int num = rand() % 100;
        if(vetorNum.valorInicial % 2 == 0){
            while(num % 2 != 0){
                num = rand() % 100;
            }
        }
        else {
            while(num % 2 == 0){
                num = rand() % 100;
            }
        }
        vetorNum.listaDeNumeros[i].valor = num;
    }

    for(int i = 0; i < tamanho; i++){
        printf("%i\n", vetorNum.listaDeNumeros[i].valor);
    }

    free(vetorNum.listaDeNumeros);
    return 0;
}
