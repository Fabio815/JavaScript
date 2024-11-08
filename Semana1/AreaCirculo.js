const pi = 3.14159;


function calculaArea(raio){
    const area = (raio ** 2) * pi;
    return area;
}

const area = calculaArea(4);

console.log(area);