//Dados
var pokedex;
var matriz;
var modoDeJogo;
var focoAtual;


//Função ao carregar a página do jogo
function setup(tabuleiro) {
    //Obtém de ./pokedex.js
    pokedex = JSON.parse(pokedexEmString);
    //Obtém de ./matriz.js
    matriz = JSON.parse(matrizEmString);
    modoDeJogo = tabuleiro;

    //Determinar vh e vw para dispositivos mobile
    onresize = () => {
        let vh = window.innerHeight * 0.01;
        let vw = window.innerWidth * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        document.documentElement.style.setProperty('--vw', `${vw}px`);
    }

    //Cria os dados no localStorage, caso não tenham sido criados
    switch (tabuleiro) {
        case "pokedoku-2x2":
            if (obterDoLocalStorage("pokedoku-2x2") === null) {
                let gamedata = {
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
                definirNoLocalStorage("pokedoku-2x2", JSON.stringify(gamedata));
            }
            break;
        case "pokedoku-3x3":
            if (obterDoLocalStorage("pokedoku-3x3") === null) {
                let gamedata = {
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
                definirNoLocalStorage("pokedoku-3x3", JSON.stringify(gamedata));
            }
            break;
        case "pokedoku-4x4":
            if (obterDoLocalStorage("pokedoku-4x4") === null) {
                let gamedata = {
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
                definirNoLocalStorage("pokedoku-4x4", JSON.stringify(gamedata));
            }
            break;
        case "pokedoku-single":
            if (obterDoLocalStorage("pokedoku-single") === null) {
                let gamedata = {
                    "linhas": [],
                    "colunas": [],
                    "resposta": 0,
                    "respostaCorreta": 0,
                    "tentativas": 0,
                    "iniciado": false,
                    "vitoria": false
                };
                definirNoLocalStorage("pokedoku-single", JSON.stringify(gamedata));
            }
            break;
    }


    //Atualiza as tentativas
    atualizarNumeroDeTentativas();
    //Inicia um jogo se não tiver sido iniciado antes
    if (gameData(modoDeJogo).iniciado === false)
        novoJogo();
    else {
        //Mas se já tiver um jogo iniciado, carrega
        inserirHeadersNoTabuleiro(modoDeJogo);
        inserirDificuldadesNoTabuleiro(modoDeJogo);
        //Reseta todos
        setarCoresDoNomeDoPokemon();
        //Se estiver ganhado
        if (gameData(modoDeJogo).vitoria) {
            //Seta nome dos pokémon
            setarCoresDoNomeDoPokemon("rainbow");
            //Alterna ribbons de vitória
            alternarRibbonsDeVitoria(true);
        }
        //Insere os pokémon
        for (let i = 0; i < infosDoJogo[modoDeJogo].rows; i++) {
            for (let j = 0; j < infosDoJogo[modoDeJogo].cols; j++) {
                let pokeID;
                let numeroDeX;
                if (modoDeJogo === "pokedoku-single") {
                    pokeID = gameData(modoDeJogo).resposta;
                    numeroDeX = gameData(modoDeJogo).tentativas;
                }
                else {
                    pokeID = gameData(modoDeJogo).celulas[i][j].resposta;
                    numeroDeX = gameData(modoDeJogo).celulas[i][j].tentativas;
                }
                if (pokeID !== 0) {
                    inserirPokemonNaCelula(`D${i + 1}${j + 1}`, obterPokemonPorId(pokeID));
                }
                else {
                    //Coloca numero de erros
                    let texto = "";
                    for (let k = 0; k < numeroDeX; k++) texto += "X";
                    setarAtributoEmHTML(`#${modoDeJogo} .D${i + 1}${j + 1} p`, "innerHTML", texto);
                    setarCoresDoNomeDoPokemon("erro", `D${i + 1}${j + 1}`);
                }
            }
        }
    }
}