//Obtém de ./pokedex.js
const pokedex = JSON.parse(pokedexEmString);
//Obtém de ./matriz.js
const matriz = JSON.parse(matrizEmString);

//Determinar vh e vw para dispositivos mobile
onresize = () => {
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
}

//FUNÇÕES DE USO DO HTML
//Obtém um atributo de um elemento em html
function obterAtributoDeHTML(seletor, atributo) {
    return document.querySelector(seletor)[atributo];
}
//Obtém um atributo de metadados de um elemento em html
function obterMetaDadosDeHTML(seletor, atributo) {
    return document.querySelector(seletor).dataset[atributo];
}
//Seta um atributo em html
function setarAtributoEmHTML(seletor, atributo, valor, selecionarTodos) {
    if (!valor) valor = "";
    if (selecionarTodos)
        document.querySelectorAll(seletor).forEach(e => e[atributo] = valor);
    else
        document.querySelector(seletor)[atributo] = valor;
}
//Seta um atributo em css
function setarAtributoEmCSS(seletor, atributo, valor, selecionarTodos) {
    if (!valor) valor = "";
    if (selecionarTodos)
        document.querySelectorAll(seletor).forEach(e => e.style[atributo] = valor);
    else
        document.querySelector(seletor).style[atributo] = valor;
}
//Seta um metadado de um elemento
function setarDadoEmHTML(seletor, dado, valor, selecionarTodos) {
    if (!valor) valor = "";
    if (selecionarTodos)
        document.querySelectorAll(seletor).forEach(e => e.dataset[dado] = valor);
    else
        document.querySelector(seletor).dataset[dado] = valor;
}
//Adiciona uma classe a um elemento
function addClasseAElemento(seletor, classe, selecionarTodos) {
    if (selecionarTodos)
        document.querySelectorAll(seletor).forEach(e => e.classList.add(classe));
    else
        document.querySelector(seletor).classList.add(classe);
}
//Remove uma classe de um elemento
function delClasseDeElemento(seletor, classe, selecionarTodos) {
    if (selecionarTodos)
        document.querySelectorAll(seletor).forEach(e => e.classList.remove(classe));
    else
        document.querySelector(seletor).classList.remove(classe);
}
//Retorna true se um elemento tem uma classe
function elementoTemClasse(seletor, classe) {
    return document.querySelector(seletor).classList.contains(classe);
}
//Obter variável do CSS
function variavelDoCSS(variavel) {
    return getComputedStyle(document.querySelector(':root')).getPropertyValue(variavel);
}
//Cria cookies no navegador
function criarCookie(nome, valor) {
    document.cookie = nome + "=" + String(valor) + ";;path=/";
}
//Retorna cookies criados
function obterCookie(nome, tipo) {
    let cookies = decodeURIComponent(document.cookie);
    let listaDeCookies = cookies.split(';');
    for (let i = 0; i < listaDeCookies.length; i++) {
        let cookie = listaDeCookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(`${nome}=`) == 0) {
            return tipo(cookie.substring(`${nome}=`.length, cookie.length));
        }
    }
    return tipo("");
}



//FUNÇÕES DE USO GERAL
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
//Converte uma string em booleano
function bool(string) {
    return string === "true";
}



//FUNÇÕES DE POKÉMON
//Pega um pokémon por ID
function obterPokemonPorId(id) {
    for (const pokemon of pokedex) {
        if (pokemon.id === id) return pokemon;
    }
    return null;
}
