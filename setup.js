//Dados
var pokedex;
var matriz;
var pokenexo;
var modoDeJogoPokedoku;
var focoAtualPokedoku;
var celulasSelecionadasPokenexo = [];

//Função ao carregar a página do pokedoku
function setupPokedoku(tabuleiro) {
    //Obtém de ./dados.js
    pokedex = JSON.parse(pokedexEmString);
    matriz = JSON.parse(matrizEmString);
    pokenexo = respostasPokenexo[0];
    modoDeJogoPokedoku = tabuleiro;

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
    atualizarTentativasPokenexo();
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
            alternarRibbonsDeVitoria(true);
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
function setupPokenexo() {
    //Obtém de ./dados.js
    pokedex = JSON.parse(pokedexEmString);
    pokenexo = respostasPokenexo[0];

    //Determinar vh e vw para dispositivos mobile
    onresize = () => {
        let vh = window.innerHeight * 0.01;
        let vw = window.innerWidth * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        document.documentElement.style.setProperty('--vw', `${vw}px`);
    }

    //Cria os dados no localStorage, caso não tenham sido criados
    if (obterDoLocalStorage("pokenexo") === null || gameData("pokenexo").id !== 1) {
        let gamedata = {
            "id": 1,
            "acertados": [],
            "tentativas": 0,
            "dicas": 0,
            "string-tentativas": "",
            "vitoria": false
        }
        definirNoLocalStorage("pokenexo", JSON.stringify(gamedata));
    }
    //Atualiza as tentativas e as dicas
    atualizarTentativasPokenexo();
    atualizarDicasPokenexo();

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
    let categoriasConcluidas = gameData("pokenexo").acertados;
    for (let i of categoriasConcluidas) {
        //Insere a categoria no tabuleiro
        inserirCategoriaNoTabuleiro(i);
    }

    //Redimensiona todos os nomes de Pokémon

}