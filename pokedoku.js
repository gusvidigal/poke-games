//Obtém de ./matriz.js
const matriz = JSON.parse(matrizDados);
const indexes = {
    0: "NORMAL",
    1: "FIRE",
    2: "WATER",
    3: "ELECTRIC",
    4: "GRASS",
    5: "ICE",
    6: "FIGHTING",
    7: "POISON",
    8: "GROUND",
    9: "FLYING",
    10: "PSYCHIC",
    11: "BUG",
    12: "ROCK",
    13: "GHOST",
    14: "DRAGON",
    15: "DARK",
    16: "STEEL",
    17: "FAIRY",
    18: "KANTO",
    19: "JOHTO",
    20: "HOENN",
    21: "SINNOH",
    22: "UNOVA",
    23: "KALOS",
    24: "ALOLA",
    25: "GALAR",
    26: "PALDEA",
    27: "HISUI",
    28: "LEGENDARY",
    29: "MYTHIC",
    30: "ULTRABEAST",
    31: "BABY",
    32: "FOSSIL",
    33: "PARADOX",
    34: "STARTER",
    35: "MEGA",
    36: "MONOTYPE",
    37: "DUALTYPE",
};

const imagensDosTipos = {
    NORMAL: `https://archives.bulbagarden.net/media/upload/0/08/NormalIC_SV.png`,
    FIRE: `https://archives.bulbagarden.net/media/upload/a/a2/FireIC_SV.png`,
    WATER: `https://archives.bulbagarden.net/media/upload/d/de/WaterIC_SV.png`,
    ELECTRIC: `https://archives.bulbagarden.net/media/upload/7/77/ElectricIC_SV.png`,
    GRASS: `https://archives.bulbagarden.net/media/upload/7/7b/GrassIC_SV.png`,
    ICE: `https://archives.bulbagarden.net/media/upload/1/13/IceIC_SV.png`,
    FIGHTING: `https://archives.bulbagarden.net/media/upload/0/0f/FightingIC_SV.png`,
    POISON: `https://archives.bulbagarden.net/media/upload/9/9d/PoisonIC_SV.png`,
    GROUND: `https://archives.bulbagarden.net/media/upload/f/f8/GroundIC_SV.png`,
    FLYING: `https://archives.bulbagarden.net/media/upload/d/d7/FlyingIC_SV.png`,
    PSYCHIC: `https://archives.bulbagarden.net/media/upload/9/96/PsychicIC_SV.png`,
    BUG: `https://archives.bulbagarden.net/media/upload/d/d1/BugIC_SV.png`,
    ROCK: `https://archives.bulbagarden.net/media/upload/3/32/RockIC_SV.png`,
    GHOST: `https://archives.bulbagarden.net/media/upload/2/2c/GhostIC_SV.png`,
    DRAGON: `https://archives.bulbagarden.net/media/upload/7/7f/DragonIC_SV.png`,
    DARK: `https://archives.bulbagarden.net/media/upload/3/30/DarkIC_SV.png`,
    STEEL: `https://archives.bulbagarden.net/media/upload/b/b8/SteelIC_SV.png`,
    FAIRY: `https://archives.bulbagarden.net/media/upload/c/c6/FairyIC_SV.png`
};


//Dados
var focoAtual;
var tentativas = 0;

function novoJogo(modoDificil) {
    //Reseta os campos
    atualizarTentativas(0);
    alternarDificuldade(false);
    document.getElementById("pesquisa_pokemon").value = "";
    document.querySelectorAll("#pokedoku .celula-header").forEach(e => e.innerHTML = "");
    document.querySelectorAll("#pokedoku p.nome-pokemon").forEach(e => { e.innerHTML = ""; e.style.color = "white" });
    document.querySelectorAll("#pokedoku img.imagem-poke-celula").forEach(e => { e.src = ""; e.style.visibility = "hidden" });
    //Ativa todas as células novamente
    document.querySelectorAll("#pokedoku div.celula-tentativa").forEach(e => e.classList.remove("inativo"));
    //Procura uma matriz 3x3 com respostas
    while (1) {
        //Sorteia indexes
        let keys = embaralhar(Object.keys(indexes)).map(Number);
        let cols = [keys[0], keys[1], keys[2]];
        let rows = [keys[3], keys[4], keys[5]];
        //Verifica se a matriz é válida
        let contagem1ModoDificil = 0;
        let flag = 0;
        for (let r of rows) {
            for (let c of cols) {
                if (matriz[r][c].length === 0 || (modoDificil && matriz[r][c].length > 3)) {
                    flag = 1;
                    break;
                } else if (matriz[r][c].length === 1) contagem1ModoDificil++;
            }
            if (flag === 1) break;
        }
        //No modo difícil, é garantido que, no mínimo, 5 categorias tenham apenas uma resposta
        //Adicionalmente, todas as categorias possuem 3 ou menos respostas
        if (flag === 1 || (modoDificil && contagem1ModoDificil < 5)) continue;
        //Insere nos espaços
        let nomesCols = cols.map(i => indexes[i]);
        for (let i = 0; i < 3; i++) {
            //Se for um tipo, põe a imagem
            let nome = nomesCols[i];
            if (Object.keys(imagensDosTipos).includes(nome)) {
                let imagem = imagensDosTipos[nome];
                document.querySelector(`#C${i + 1}`).innerHTML = `<img src=${imagem}>`;
            } else document.querySelector(`#C${i + 1}`).innerHTML = `<p>${nome}</p>`;
        }
        let nomesRows = rows.map(i => indexes[i]);
        for (let i = 0; i < 3; i++) {
            //Se for um tipo, põe a imagem
            let nome = nomesRows[i];
            if (Object.keys(imagensDosTipos).includes(nome)) {
                let imagem = imagensDosTipos[nome];
                document.querySelector(`#R${i + 1}`).innerHTML = `<img src=${imagem}>`;
            } else document.querySelector(`#R${i + 1}`).innerHTML = `<p>${nome}</p>`;
        }
        //Atribui o id da matriz em cada célula e insere a dificuldade
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                document.querySelector(`#D${i + 1}${j + 1}`).setAttribute("data-matriz", `${rows[i]}.${cols[j]}`);
                document.querySelector(`#D${i + 1}${j + 1} div.dificuldade`).innerHTML = matriz[rows[i]][cols[j]].length;
            }
        }
        break;
    }
}
//Reinicia o jogo atual
function reiniciarJogo() {
    //Reseta os campos
    atualizarTentativas(0);
    document.getElementById("pesquisa_pokemon").value = "";
    document.querySelectorAll("#pokedoku p.nome-pokemon").forEach(e => { e.innerHTML = ""; e.style.color = "white" });
    document.querySelectorAll("#pokedoku img.imagem-poke-celula").forEach(e => { e.src = ""; e.style.visibility = "hidden" });
    //Ativa todas as células novamente
    document.querySelectorAll("#pokedoku div.celula-tentativa").forEach(e => e.classList.remove("inativo"));
}


//Mostra o popup de pesquisa
function mostrarPesquisa(idDoFoco) {
    //Se a célula estiver inativa, para
    if (document.getElementById(idDoFoco).classList.contains("inativo")) return;
    //Limpa o campo da pesquisa e ativa o background e o popup
    document.getElementById("resultados").innerHTML = "";
    document.getElementById("pesquisa_pokemon").value = "";
    document.getElementById("background").style.visibility = "visible";
    document.getElementById("popup_pesquisa").style.visibility = "visible";
    focoAtual = idDoFoco;
}
//Fecha o popup de pesquisa
function fecharPesquisa() {
    //Desativa o background
    document.getElementById("background").style.visibility = "hidden";
    document.getElementById("popup_pesquisa").style.visibility = "hidden";
}
//Formata o resultado de pesquisa
function formatarResultado(pokemon) {
    let texto = `
<li onclick="chutarPokemon(${pokemon.id})" class="item-resultado">
    <img class="imagem-poke-lista" src="${pokemon.imagem}">
    <p class="texto texto-resultado" >${pokemon.nome.toUpperCase()}<br>
        <span class="descricao">${camelCase(pokemon.desc)}</span>
    </p>
</li>`;
    return texto;
}
//Mostra os resultados da pesquisa do popup
function mostrarResultadosDaPesquisa() {
    //Limpa os resultados anteriores
    document.getElementById("resultados").innerHTML = "";
    let pesquisa = document.getElementById("pesquisa_pokemon").value.toLowerCase();
    //Se a pesquisa é muito curta
    if (pesquisa.length < 3) return;
    //Adiciona todos os pokémon que possuem a substring da pesquisa nos resultados
    for (const pokemon of pokedex) {
        if (pokemon.nome.indexOf(pesquisa) !== -1 || pokemon.desc.indexOf(pesquisa) !== -1) {
            let texto = formatarResultado(pokemon);
            document.getElementById("resultados").innerHTML += texto;
        }
    }
}


//Tenta adivinhar
function chutarPokemon(id, atualizarTentativa) {
    //Aumenta o numero de tentativas;
    if (atualizarTentativa !== false) atualizarTentativas(tentativas + 1);
    //Obtém o pokémon
    let pokemon = obterPokemonPorId(id);
    //Obtém possíveis respostas
    let [row, col] = document.getElementById(focoAtual).dataset.matriz.split(".");
    let respostasValidas = matriz[row][col];
    //Verifica se é resposta válida
    let flag = 0;
    for (const resposta of respostasValidas) {
        if (resposta.id === id) {
            flag = 1;
            break;
        }
    }
    //Se o chute for inválido
    if (flag === 0) {
        //Fecha o popup
        fecharPesquisa();
        //Mostra o X no nome
        document.getElementById(focoAtual).querySelector("p").style.color = "red";
        document.getElementById(focoAtual).querySelector("p").innerHTML += "X";
        return;
    }
    //Fecha popup, coloca o pokemon na célula e a inativa
    fecharPesquisa();
    //Insere pokémon e nome
    document.getElementById(focoAtual).querySelector("img.imagem-poke-celula").style.visibility = "visible";
    document.getElementById(focoAtual).querySelector("img.imagem-poke-celula").src = pokemon.imagem;
    let nomePokemonFormatado = pokemon.nome.toUpperCase();
    if (pokemon.desc !== "") nomePokemonFormatado += " - " + camelCase(pokemon.desc);
    document.getElementById(focoAtual).querySelector("p").innerHTML = nomePokemonFormatado;
    document.getElementById(focoAtual).querySelector("p").style.color = "white";
    //Ativa a célula
    document.getElementById(focoAtual).classList.add("inativo");
    focoAtual = "";
}
//Mostra a quantidade de respostas possíveis para cada célula
function alternarDificuldade(acao) {
    let valor;
    let textoBotao;
    if (acao) { valor = "visible"; textoBotao = "Esconder" }
    else { valor = "hidden"; textoBotao = "Mostrar" }
    document.querySelectorAll("div.dificuldade").forEach(e => e.style.visibility = valor);
    //Muda a função do botão
    document.getElementById("botao_dificuldade").setAttribute("onclick", `alternarDificuldade(${!acao})`);
    document.getElementById("botao_dificuldade").innerHTML = `${textoBotao} Dificuldade`;
}
//Mostra um possível tabuleiro
function revelarJogo() {
    //Itera sobre todas as células
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            //Obtém as respostas válidas
            focoAtual = `D${i + 1}${j + 1}`;
            let [row, col] = document.getElementById(focoAtual).dataset.matriz.split(".");
            let respostasValidas = matriz[row][col];
            //Sorteia uma
            let idDaResposta = respostasValidas[escolher(respostasValidas)].id;
            //Emula um chute, mas não considera tentativas
            chutarPokemon(idDaResposta, false);
        }
    }
}
//Atualiza o número de tentativas
function atualizarTentativas(numero) {
    tentativas = numero;
    document.querySelector("#tentativas span").innerHTML = tentativas;
}