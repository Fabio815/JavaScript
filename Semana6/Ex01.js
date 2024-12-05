const carro = {
    modelo: "Astra",
    ano: 2012,
    cor: "Preto",
    marca: "chevrolet",
    acelerar: function(distancia, tempo){
        return distancia / tempo;
    }
}

console.log(`Distância ${carro.acelerar(100, 2)}Km`);

const json = JSON.stringify(carro);
console.log(json);