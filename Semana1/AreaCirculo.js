const pi = 3.14159;


function calculaArea(raio){
    const area = (raio * raio) * pi;
    return area;
}

const area = calculaArea(10);

console.log(area);