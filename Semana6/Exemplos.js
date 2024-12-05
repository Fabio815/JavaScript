// const pokemon = {
//     nome: "Blastoise",
//     tipo: "Água",
//     regiao: "Kanto",
//     ataques: {
//         ataque1: "Surf",
//         ataque2: "Hidro Canhão",
//         ataque3: "Revólver d'Água",
//         ataque4: "Cut"
//     }
// }

/*Desestruturação*/

// var x = [1, 2, 3, 4, 5, 6];
// var [z, y] = x;
// console.log(z);
// console.log(y);

// let a = 40, b = 10;
// [a, b] = [b, a]
// console.log(`Valor de A: ${a} B: ${b}`);

// let obj = {fruta: "manga", bebida: "agua"};
// let {fruta, bebida} = obj;
// console.log(fruta);
// console.log(bebida);

// let ar = [1, 2, 3, 4, 5, 6, 7, 8];
// [a, b,, c, d] = ar;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//Manipulação de objetos

// const meses = ["Jan", "Mar", "Abril", "Jun"];
// meses.splice(1, 0, "Fev");
// console.log(meses);

const pokemons = [{
    nome: "Bulbasaur",
    tipo: "Grama/Venenoso",
    status: {
        HP: 45,
        Ataque: 49,
        Defesa: 49,
        SpAtaque: 65,
        SpDefesa: 65,
        Velocidade: 45
    }
}, {
    nome: "Charmander",
    tipo: "Fogo",
    status: {
        HP: 39,
        Ataque: 52,
        Defesa: 43,
        SpAtaque: 60,
        SpDefesa: 50,
        Velocidade: 65
    },
}, {
    nome: "Squirtle",
    tipo: "Água",
    status: {
        HP: 44,
        Ataque: 48,
        Defesa: 65,
        SpAtaque: 50,
        SpDefesa: 64,
        Velocidade: 43
    }
}, {
    nome: "Caterpie",
    tipo: "Inseto",
    status: {
        HP: 45,
        Ataque: 49,
        Defesa: 49,
        SpAtaque: 65,
        SpDefesa: 65,
        Velocidade: 45
    }
}, {
    nome: "Nidoking",
    tipo: "Terra/Venenoso",
    status: {
        HP: 81,
        Ataque: 102,
        Defesa: 77,
        SpAtaque: 85,
        SpDefesa: 75,
        Velocidade: 85
    }
}, {
    nome: "Weedle",
    tipo: "Inseto",
    status: {
        HP: 40,
        Ataque: 35,
        Defesa: 30,
        SpAtaque: 30,
        SpDefesa: 20,
        Velocidade: 20
    }
}];


function imprimir(){
    pokemons.map((pokemon) => {
        console.log(`Pokémon: ${pokemon.nome}, Tipo: ${pokemon.tipo}`);
        console.log(`Status: \nAtaque: ${pokemon.status.Ataque}\nDefesa: ${pokemon.status.Defesa}\nSpAtaque: ${pokemon.status.SpAtaque}\nSpDefesa: ${pokemon.status.SpDefesa}\nVelocidade: ${pokemon.status.Velocidade}\n`);
    });
}

function adicionarPok(){
    const obj = {
        nome: "Pidgeot",
        tipo: "Voador",
        status: {
            HP: 83,
            Ataque: 80,
            Defesa: 75,
            SpAtaque: 70,
            SpDefesa: 70,
            Velocidade: 101
        }
    };
    pokemons.push(obj);
}

function deletar(poke){
    pokemons.splice(acharPoke(poke), 1);
}

function modificar(poke){
    let pokeAchado = acharPoke(poke);

    pokemons[pokeAchado].nome = "Ivysaur";
    pokemons[pokeAchado].status.Ataque = 62;
    pokemons[pokeAchado].status.Defesa = 63;
    pokemons[pokeAchado].status.SpAtaque = 80;
    pokemons[pokeAchado].status.SpDefesa = 80;
    pokemons[pokeAchado].status.Velocidade = 60;

}

function imprimirUnico(poke){
    let pokeAchado = pokemons.find(elemento => elemento.nome === poke);
    if(pokeAchado != null){
        console.log(`Pokémon: ${pokeAchado.nome}, Tipo: ${pokeAchado.tipo}`);
        console.log(`Status: \nAtaque: ${pokeAchado.status.Ataque}\nDefesa: ${pokeAchado.status.Defesa}\nSpAtaque: ${pokeAchado.status.SpAtaque}\nSpDefesa: ${pokeAchado.status.SpDefesa}\nVelocidade: ${pokeAchado.status.Velocidade}\n`);
    } else {
        console.log("Pokémon não encontrado");
    }
}
function acharPoke(poke){
    return pokemons.findIndex(pokem => pokem.nome === poke);
}

//adicionarPok();
//deletar("Weedle");
//modificar("Bulbasaur");
//imprimirUnico("Nidoking");
//imprimir();



// const json = '{"nome": "José", "Pais": "Brasil", "Idade": 30}';
// const ob = JSON.parse(json);
// console.log(ob.nome);