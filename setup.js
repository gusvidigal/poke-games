//Dados
var pokedex;
var matriz;
var pokenexo;
var modoDeJogoPokedoku;
var focoAtualPokedoku;

//Setup do pokenexo
function definirJogoDoPokenexo(idDoPokenexo) {
    idDoPokenexo = String(idDoPokenexo);
    let data = gameData("pokenexo");
    //Se não estiver nos dados
    if (!data.jogos[idDoPokenexo]) {
        data.jogos[idDoPokenexo] = {
            "acertados": [],
            "selecionados": [],
            "dicas": [],
            "tentativas": 0,
            "n-dicas": 0,
            "string-tentativas": "",
            "vitoria": false
        }
        definirNoLocalStorage("pokenexo", JSON.stringify(data));
    }
}
//Setup do localStorage
function setupLocalStorage() {

    //Define as estatísticas
    if (!gameData("stats")) {
        let statsData = {
            "jogos-gerados": {
                "totais": 0,
                "pokedoku": {
                    "pokedoku-2x2": 0,
                    "pokedoku-3x3": 0,
                    "pokedoku-4x4": 0,
                    "pokedoku-single": 0,
                },
            },
            "jogos-concluidos": {
                "totais": 0,
                "pokenexo": 0,
                "pokedoku": {
                    "pokedoku-2x2": 0,
                    "pokedoku-3x3": 0,
                    "pokedoku-4x4": 0,
                    "pokedoku-single": 0,
                },
            },
            "tentativas": {
                "totais": 0,
                "pokenexo": 0,
                "pokedoku": {
                    "pokedoku-2x2": 0,
                    "pokedoku-3x3": 0,
                    "pokedoku-4x4": 0,
                    "pokedoku-single": 0,
                },
            },
            "dicas": {
                "totais": 0,
                "pokenexo": 0,
            },
            "pokenexo": {
                "de-primeira": 0,
            }
        }
        setGameData("stats", statsData);
    }
    //Define os modos de jogo
    if (obterDoLocalStorage("pokedoku-2x2") === null) {
        let data = {
            "linhas": [],
            "colunas": [],
            "celulas": [
                [{ "tentativas": 0, "resposta": 0 }, { "tentativas": 0, "resposta": 0 }],
                [{ "tentativas": 0, "resposta": 0 }, { "tentativas": 0, "resposta": 0 }]
            ],
            "tentativas": 0,
            "iniciado": false,
            "vitoria": false
        }
        definirNoLocalStorage("pokedoku-2x2", JSON.stringify(data));
    }
    if (obterDoLocalStorage("pokedoku-3x3") === null) {
        let data = {
            "linhas": [],
            "colunas": [],
            "celulas": [
                [{ "tentativas": 0, "resposta": 0 }, { "tentativas": 0, "resposta": 0 }, { "tentativas": 0, "resposta": 0 }],
                [{ "tentativas": 0, "resposta": 0 }, { "tentativas": 0, "resposta": 0 }, { "tentativas": 0, "resposta": 0 }],
                [{ "tentativas": 0, "resposta": 0 }, { "tentativas": 0, "resposta": 0 }, { "tentativas": 0, "resposta": 0 }],
            ],
            "tentativas": 0,
            "iniciado": false,
            "vitoria": false
        }
        definirNoLocalStorage("pokedoku-3x3", JSON.stringify(data));
    }
    if (obterDoLocalStorage("pokedoku-4x4") === null) {
        let data = {
            "linhas": [],
            "colunas": [],
            "celulas": [
                [{ "tentativas": 0, "resposta": 0 }, { "tentativas": 0, "resposta": 0 }, { "tentativas": 0, "resposta": 0 }, { "tentativas": 0, "resposta": 0 }],
                [{ "tentativas": 0, "resposta": 0 }, { "tentativas": 0, "resposta": 0 }, { "tentativas": 0, "resposta": 0 }, { "tentativas": 0, "resposta": 0 }],
                [{ "tentativas": 0, "resposta": 0 }, { "tentativas": 0, "resposta": 0 }, { "tentativas": 0, "resposta": 0 }, { "tentativas": 0, "resposta": 0 }],
                [{ "tentativas": 0, "resposta": 0 }, { "tentativas": 0, "resposta": 0 }, { "tentativas": 0, "resposta": 0 }, { "tentativas": 0, "resposta": 0 }],
            ],
            "tentativas": 0,
            "iniciado": false,
            "vitoria": false
        }
        definirNoLocalStorage("pokedoku-4x4", JSON.stringify(data));
    }
    if (obterDoLocalStorage("pokedoku-single") === null) {
        let data = {
            "linhas": [],
            "colunas": [],
            "resposta": 0,
            "respostaCorreta": 0,
            "tentativas": 0,
            "iniciado": false,
            "vitoria": false
        };
        definirNoLocalStorage("pokedoku-single", JSON.stringify(data));
    }
    if (obterDoLocalStorage("pokenexo") === null || !gameData("pokenexo").jogos) {
        let data = { "jogos": {} };
        definirNoLocalStorage("pokenexo", JSON.stringify(data));
    }
}

//Função ao carregar a página do pokedoku
async function setupPokedoku(tabuleiro) {
    //Obtém de ./dados.js
    pokedex = await getJSON("pokedex.json");
    matriz = await getJSON("matriz.json")
    modoDeJogoPokedoku = tabuleiro;

    //Determinar vh e vw para dispositivos mobile
    onresize = () => {
        let vh = window.innerHeight * 0.01;
        let vw = window.innerWidth * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        document.documentElement.style.setProperty('--vw', `${vw}px`);
    }
    //Cria os dados, caso não tenham sido criadas
    setupLocalStorage()

    //Atualiza as tentativas
    atualizarTentativasPokedoku();
    //Inicia um jogo se não tiver sido iniciado antes
    if (gameData(modoDeJogoPokedoku).iniciado === false)
        novoJogo();
    else {
        //Mas se já tiver um jogo iniciado, carrega
        inserirHeadersNoTabuleiro(modoDeJogoPokedoku);
        inserirDificuldadesNoTabuleiro(modoDeJogoPokedoku);
        //Reseta todos
        setarCoresDoNomeDoPokemon();
        //Se estiver ganhado
        if (gameData(modoDeJogoPokedoku).vitoria) {
            //Seta nome dos pokémon
            setarCoresDoNomeDoPokemon("rainbow");
            //Alterna ribbons de vitória
            //alternarRibbonsDeVitoria(true);
        }
        //Insere os pokémon
        for (let i = 0; i < infosDoJogo[modoDeJogoPokedoku].rows; i++) {
            for (let j = 0; j < infosDoJogo[modoDeJogoPokedoku].cols; j++) {
                let pokeID;
                let numeroDeX;
                if (modoDeJogoPokedoku === "pokedoku-single") {
                    pokeID = gameData(modoDeJogoPokedoku).resposta;
                    numeroDeX = gameData(modoDeJogoPokedoku).tentativas;
                }
                else {
                    pokeID = gameData(modoDeJogoPokedoku).celulas[i][j].resposta;
                    numeroDeX = gameData(modoDeJogoPokedoku).celulas[i][j].tentativas;
                }
                if (pokeID !== 0) {
                    inserirPokemonNaCelula(`D${i + 1}${j + 1}`, obterPokemonPorId(pokeID));
                }
                else {
                    //Coloca numero de erros
                    let texto = "";
                    for (let k = 0; k < numeroDeX; k++) texto += "X";
                    setarAtributoEmHTML(`#${modoDeJogoPokedoku} .D${i + 1}${j + 1} p`, "innerHTML", texto);
                    setarCoresDoNomeDoPokemon("erro", `D${i + 1}${j + 1}`);
                }
            }
        }
    }
}

//Função ao carregar a página do pokenexo
async function setupPokenexo(idDoPokenexo) {
    //Obtém de ./dados.js
    pokedex = await getJSON("pokedex.json");
    //Se não tiver o id, quer dizer que é a versão diária
    if (!idDoPokenexo) {
        let listaDePokenexo = await getJSON("pokenexo/pokenexo.json");
        let maisRecente = listaDePokenexo[listaDePokenexo.length - 1];
        //Obtém o último
        idDoPokenexo = maisRecente.id;
    }
    //Obtém o pokenexo desejado
    pokenexo = await obterPokenexoPorId(idDoPokenexo);

    //Determinar vh e vw para dispositivos mobile
    onresize = () => {
        let vh = window.innerHeight * 0.01;
        let vw = window.innerWidth * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        document.documentElement.style.setProperty('--vw', `${vw}px`);
    }

    //Cria os dados, caso não tenham sido criadas
    setupLocalStorage()
    //Cria o pokenexo, caso não tenha sido criado
    definirJogoDoPokenexo(idDoPokenexo);
    //Atualiza as tentativas, as dicas e o resumo
    atualizarTentativasPokenexo();
    //atualizarDicasPokenexo();
    atualizarResumoPokenexo();

    //Insere no tabuleiro
    //Obtém todos os pokémon das respostas
    let listaDePokemon = [];
    for (let resposta of pokenexo.respostas) {
        listaDePokemon = listaDePokemon.concat(resposta.pokemon);
    }
    //Adiciona as células
    let celulas = document.querySelectorAll("#pokenexo .celula")
    let contador = 0;
    for (let celula of celulas) {
        //Obtém pokémon
        let pokemon = obterPokemonPorId(listaDePokemon[pokenexo["ordem-inicial"][contador]]);
        //Insere na célula
        celula.querySelector("img.imagem-poke-celula").src = pokemon.imagem;
        let nomePokemonFormatado = pokemon.nome.toUpperCase();
        if (pokemon.desc !== "") nomePokemonFormatado += " - " + camelCase(pokemon.desc);
        celula.querySelector("p").innerHTML = nomePokemonFormatado;
        celula.setAttribute("data-poke", pokemon.id);
        //Atualiza contador
        contador++;
    }
    //Adiciona as categorias já concluídas
    let categoriasConcluidas = pokenexoData(idDoPokenexo).acertados;
    for (let i of categoriasConcluidas) {
        //Insere a categoria no tabuleiro
        inserirCategoriaNoTabuleiro(i);
    }
    //Adiciona células selecionadas
    for (let poke of pokenexoData(idDoPokenexo).selecionados) {
        document.querySelectorAll(".celula").forEach(celula => {
            if (celula.dataset.poke === String(poke)) {
                celula.classList.add("pn--selected-cell");
            }
        })
    }
    //Adiciona dados no menu
    document.querySelector("#pokenexo-data p").innerHTML = `<span>#${pokenexo.id}</span> ${pokenexo.data}`;
    //Se for especial
    if (pokenexo.especial) {
        //Adiciona ícone
        let icone = `
<div id="info" onclick="alternarPopupPokenexo()">
    <span class="fa-stack fa-fw">
        <i class="fa fa-circle fa-stack-2x fa-fw"></i>
        <i class="fa fa-info fa-stack-1x fa-inverse fa-fw"></i>
    </span>
</div>`;
        document.getElementById("menu").innerHTML += icone;
        //Adiciona texto
        document.querySelector(".special-message-popup h1").innerHTML = `Pokénections ${pokenexo.data} #${pokenexo.id}`;
        document.querySelector(".special-message-popup p").innerHTML = pokenexo.mensagem.replaceAll(`\n`, "<br>");
        //Adiciona popup ao onload
        document.querySelector("body").onload = alternarPopupPokenexo();
    }

}
//Ao carregar a página de previous games
async function setupPreviousGames() {
    //Setup do localStorage
    setupLocalStorage();
    //Adiciona os links
    let listaDePokenexo = await getJSON("pokenexo/pokenexo.json");
    //Ordem decrescente
    for (let i = listaDePokenexo.length - 1; i >= 0; i--) {
        let pokenexo = listaDePokenexo[i];
        let pokenexoData = gameData("pokenexo").jogos[String(pokenexo.id)];

        let estado = "";
        let especial = "";
        let marcadores = "";
        //Se o jogo já tiver sido iniciado
        if (pokenexoData) {
            //Obtém classe
            if (pokenexoData.vitoria) {
                estado = "concluido";
                if (pokenexo.especial) especial = "rainbow";
            }
            else if (pokenexoData["string-tentativas"].length > 0) estado = "iniciado";
            //Obtém marcadores
            let acertadosCopia = copiar(pokenexoData.acertados);
            for (let categoriaAcertada of acertadosCopia.sort()) {
                let cor = obterCorDaCategoria(categoriaAcertada);
                marcadores += `<div class="marcador ${cor}"></div>`
            }
        }

        //Formata o texto
        let textoBotao = `
<div class="${estado} ${especial} previous-game-button">
    <a href="../previous#${pokenexo.id}">${pokenexo.data}<br>#${pokenexo.id}</a>
    <div class="markers">${marcadores}</div>
</div>`;
        document.querySelector("#previous-games").innerHTML += textoBotao;
    }
}

//Ao carregar a página de estatísticas
function setupStats() {
    //Cria os dados, caso não tenham sido criadas
    setupLocalStorage()
    //Obtém todos os elementos a serem substituídos
    document.querySelectorAll("#main-page .stats--value").forEach(elemento => {
        if (elemento.dataset.json) {
            let caminhos = elemento.dataset.json.split(".");
            //Obtém o valor do atributo
            let statsData = gameData("stats");
            for (let referencia of caminhos) {
                statsData = statsData[referencia];
            }
            //Substitui
            elemento.innerHTML = statsData;
        }
    })
}