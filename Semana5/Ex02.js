const time = [
    {time: "1", pontos: 30}, 
    {time: "2", pontos: 25}, 
    {time: "3", pontos: 65}, 
    {time: "4", pontos: 4}, 
    {time: "5", pontos: 65}, 
]
const soma = time.reduce((vAnt, vAtual) => vAnt + vAtual.pontos, 2);
console.log(soma);