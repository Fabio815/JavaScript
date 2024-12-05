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

/* #include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr;
    int n1 = 5, n2 = 10;

    // Alocando memória inicial para 5 inteiros
    ptr = (int*) malloc(n1 * sizeof(int));

    // Verificando se a memória foi alocada com sucesso
    if (ptr == NULL) {
        printf("Erro na alocação de memória.\n");
        return 1;
    }

    // Inicializando a memória alocada
    for (int i = 0; i < n1; i++) {
        ptr[i] = i + 1;
    }

    // Realocando memória para 10 inteiros
    ptr = (int*) realloc(ptr, n2 * sizeof(int));

    // Verificando se a realocação foi bem-sucedida
    if (ptr == NULL) {
        printf("Erro na realocação de memória.\n");
        return 1;
    }

    // Inicializando a nova memória alocada
    for (int i = n1; i < n2; i++) {
        ptr[i] = i + 1;
    }

    // Imprimindo os valores armazenados
    for (int i = 0; i < n2; i++) {
        printf("%d ", ptr[i]);
    }

    // Liberando a memória alocada
    free(ptr);

    return 0;
}*/