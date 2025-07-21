//Obtém de ./pokedex.js
const pokedex = JSON.parse(pokedexDados);

//Redimensionamento
onresize = (event) => {
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
}


//Embaralha uma lista
function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
    return lista;
}
//Escolhe um item de uma lista
function escolher(lista) {
    return Math.floor(Math.random() * (lista.length));
}
//Pega um pokémon por ID
function obterPokemonPorId(id) {
    for (const pokemon of pokedex) {
        if (pokemon.id === id) return pokemon;
    }
    return null;
}
//Transforma uma string em CamelCase
function camelCase(string) {
    let novaString = "";
    let caractereAnterior = '';
    for (let i = 0; i < string.length; i++) {
        let caractere = string[i];
        //Se o caractere anterior for um espaço ou hífen, torna maiúsculo
        if (['', ' ', '-'].includes(caractereAnterior)) {
            novaString += caractere.toUpperCase();
        } else {
            novaString += caractere;
        }
        caractereAnterior = caractere;
    }
    return novaString;
}
