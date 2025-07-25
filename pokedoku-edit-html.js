//Atualiza o número de tentativas
function atualizarNumeroDeTentativas(numero) {
    if (numero !== undefined) {
        //Muda as tentativas
        let data = gameData(modoDeJogo);
        data.tentativas = numero;
        setGameData(modoDeJogo, data);
    }
    setarAtributoEmHTML(`#tentativas span`, "innerHTML", String(gameData(modoDeJogo).tentativas));
}
//Seta as cores
function setarCoresDoNomeDoPokemon(cor, idCelula) {
    if (!idCelula) {
        for (let i = 0; i < infosDoJogo[modoDeJogo].rows; i++) {
            for (let j = 0; j < infosDoJogo[modoDeJogo].cols; j++) {
                switch (cor) {
                    case "rainbow":
                        addClasseAElemento(`#${modoDeJogo} .D${i + 1}${j + 1} p`, "rainbow");
                        delClasseDeElemento(`#${modoDeJogo} .D${i + 1}${j + 1} p`, "erro");
                        break;
                    case "erro":
                        addClasseAElemento(`#${modoDeJogo} .D${i + 1}${j + 1} p`, "erro");
                        delClasseDeElemento(`#${modoDeJogo} .D${i + 1}${j + 1} p`, "rainbow");
                        break;
                    default:
                        delClasseDeElemento(`#${modoDeJogo} .D${i + 1}${j + 1} p`, "rainbow");
                        delClasseDeElemento(`#${modoDeJogo} .D${i + 1}${j + 1} p`, "erro");
                }
            }
        }
    } else {
        switch (cor) {
            case "rainbow":
                addClasseAElemento(`#${modoDeJogo} .${idCelula} p`, "rainbow");
                delClasseDeElemento(`#${modoDeJogo} .${idCelula} p`, "erro");
                break;
            case "erro":
                addClasseAElemento(`#${modoDeJogo} .${idCelula} p`, "erro");
                delClasseDeElemento(`#${modoDeJogo} .${idCelula} p`, "rainbow");
                break;
            default:
                delClasseDeElemento(`#${modoDeJogo} .${idCelula} p`, "rainbow");
                delClasseDeElemento(`#${modoDeJogo} .${idCelula} p`, "erro");
        }
    }
}

//Insere pokémon na célula
function inserirPokemonNaCelula(celula, pokemon) {
    //Insere pokémon e nome
    delClasseDeElemento(`#${modoDeJogo} .${celula} img.imagem-poke-celula`, "invisivel");
    setarAtributoEmHTML(`#${modoDeJogo} .${celula} img.imagem-poke-celula`, "src", pokemon.imagem);
    let nomePokemonFormatado = pokemon.nome.toUpperCase();
    if (pokemon.desc !== "") nomePokemonFormatado += " - " + camelCase(pokemon.desc);
    setarAtributoEmHTML(`#${modoDeJogo} .${celula} p`, "innerHTML", nomePokemonFormatado);

    //Inativa a célula
    addClasseAElemento(`#${modoDeJogo} .${celula}`, "inativo");
}

//Adiciona nomes nas linhas e colunas
function inserirHeadersNoTabuleiro(idDoTabuleiro) {
    let nomesCols = gameData(idDoTabuleiro).colunas.map(i => indexes[i]);
    for (let i = 0; i < infosDoJogo[idDoTabuleiro].cols; i++) {
        //Se for um tipo, põe a imagem
        let nome = nomesCols[i];
        if (Object.keys(imagensDosTipos).includes(nome)) {
            let imagem = imagensDosTipos[nome];
            setarAtributoEmHTML(`#${idDoTabuleiro} .C${i + 1}`, "innerHTML", `<img alt="${nome}" src=${imagem}>`);
        } else
            setarAtributoEmHTML(`#${idDoTabuleiro} .C${i + 1}`, "innerHTML", `<p>${nome}</p>`);
    }
    //Insere nos espaços das linhas
    let nomesRows = gameData(idDoTabuleiro).linhas.map(i => indexes[i]);
    for (let i = 0; i < infosDoJogo[idDoTabuleiro].rows; i++) {
        //Se for um tipo, põe a imagem
        let nome = nomesRows[i];
        if (Object.keys(imagensDosTipos).includes(nome)) {
            let imagem = imagensDosTipos[nome];
            setarAtributoEmHTML(`#${idDoTabuleiro} .R${i + 1}`, "innerHTML", `<img alt="${nome}" src=${imagem}>`);
        } else
            setarAtributoEmHTML(`#${idDoTabuleiro} .R${i + 1}`, "innerHTML", `<p>${nome}</p>`);
    }
}

//Mostra a quantidade de respostas possíveis para cada célula
function alternarDificuldade(acao) {
    //Se for pokedoku-single, para
    if (modoDeJogo === "pokedoku-single") return;
    let textoBotao;
    if (acao) {
        delClasseDeElemento(`#${modoDeJogo} div.dificuldade`, "invisivel", true);
        textoBotao = "Hide";
    }
    else {
        addClasseAElemento(`#${modoDeJogo} div.dificuldade`, "invisivel", true);
        textoBotao = "Show";
    }
    //Muda a função do botão
    setarAtributoEmHTML("#botao_dificuldade", "innerHTML", `${textoBotao} Total Answers`);
    //Não funciona se trocar por setarAtributoEmHTML()
    document.getElementById("botao_dificuldade").setAttribute("onclick", `alternarDificuldade(${!acao})`);
}

//Adiciona as dificuldades no tabuleiro
function inserirDificuldadesNoTabuleiro(idDoTabuleiro) {
    let linhas = gameData(idDoTabuleiro).linhas;
    let colunas = gameData(idDoTabuleiro).colunas;
    for (let i = 0; i < infosDoJogo[modoDeJogo].rows; i++) {
        for (let j = 0; j < infosDoJogo[modoDeJogo].cols; j++) {
            setarAtributoEmHTML(`#${modoDeJogo} .D${i + 1}${j + 1} div.dificuldade`, "innerHTML", matriz[linhas[i]][colunas[j]].length);
        }
    }
}
//Mostra os ribbons
function alternarRibbonsDeVitoria(acao) {
    //Se for pokedoku-single, para
    if (modoDeJogo === "pokedoku-single") return;
    if (acao) {
        delClasseDeElemento(`#${modoDeJogo} span.ribbon-tentativas`, "invisivel", true);
        for (let i = 0; i < infosDoJogo[modoDeJogo].rows; i++) {
            for (let j = 0; j < infosDoJogo[modoDeJogo].cols; j++) {
                let tentativas = gameData(modoDeJogo).celulas[i][j].tentativas;
                //Acertou em mais de uma tentativa
                if (tentativas > 1) {
                    addClasseAElemento(`#${modoDeJogo} .D${i + 1}${j + 1} .ribbon-tentativas`, "ribbon-amarelo");
                    delClasseDeElemento(`#${modoDeJogo} .D${i + 1}${j + 1} .ribbon-tentativas`, "ribbon-verde");
                }
                else {
                    //Acertou em uma tentativa
                    addClasseAElemento(`#${modoDeJogo} .D${i + 1}${j + 1} .ribbon-tentativas`, "ribbon-verde");
                    delClasseDeElemento(`#${modoDeJogo} .D${i + 1}${j + 1} .ribbon-tentativas`, "ribbon-amarelo");
                }
                setarAtributoEmHTML(`#${modoDeJogo} .D${i + 1}${j + 1} .ribbon-tentativas`, "innerHTML", tentativas);
            }
        }
    }
    else {
        addClasseAElemento(`#${modoDeJogo} span.ribbon-tentativas`, "invisivel", true);
    }
}


//Reseta o tabuleiro, sem limpar o jogo
function removerRespostas() {
    //Remove campo da pesquisa
    setarAtributoEmHTML("#pesquisa_pokemon", "value");
    //Remove nomes de pokémon
    setarAtributoEmHTML(`#${modoDeJogo} p.nome-pokemon`, "innerHTML", "", true);
    //Volta as cores dos nomes
    setarCoresDoNomeDoPokemon();
    //Remove imagens de pokémon
    setarAtributoEmHTML(`#${modoDeJogo} img.imagem-poke-celula`, "src", "", true);
    addClasseAElemento(`#${modoDeJogo} img.imagem-poke-celula`, "invisivel", true);
    //Ativa todas as células novamente
    delClasseDeElemento(`#${modoDeJogo} div.celula-tentativa`, "inativo", true);
    //Remove ribbons de vitória
    alternarRibbonsDeVitoria(false);

    //Reseta localStorage
    let data = gameData(modoDeJogo);
    if (modoDeJogo !== "pokedoku-single") {
        for (let i = 0; i < data.celulas.length; i++) {
            for (let j = 0; j < data.celulas[i].length; j++) {
                data.celulas[i][j].resposta = 0;
                data.celulas[i][j].tentativas = 0;
            }
        }
    }
    else {
        data.resposta = 0;
    }
    data.tentativas = 0;
    data.vitoria = false;
    setGameData(modoDeJogo, data);
    //Atualiza número de tentativas
    atualizarNumeroDeTentativas();
}
//Reseta o tabuleiro, limpando o jogo
function limparTabuleiro() {
    //Remove campo da pesquisa
    setarAtributoEmHTML("#pesquisa_pokemon", "value");
    //Remove nomes de pokémon
    setarAtributoEmHTML(`#${modoDeJogo} p.nome-pokemon`, "innerHTML", "", true);
    //Volta as cores dos nomes
    setarCoresDoNomeDoPokemon();
    //Remove imagens de pokémon
    setarAtributoEmHTML(`#${modoDeJogo} img.imagem-poke-celula`, "src", "", true);
    addClasseAElemento(`#${modoDeJogo} img.imagem-poke-celula`, "invisivel", true);
    //Ativa todas as células novamente
    delClasseDeElemento(`#${modoDeJogo} div.celula-tentativa`, "inativo", true);
    //Limpa os headers
    setarAtributoEmHTML(`#${modoDeJogo} .celula-header`, "innerHTML", "", true);
    //Remove as dificuldades
    alternarDificuldade(false);
    //Remove ribbons de vitória
    alternarRibbonsDeVitoria(false);

    //Reseta localStorage
    let data = gameData(modoDeJogo);
    if (modoDeJogo !== "pokedoku-single") {
        for (let i = 0; i < data.celulas.length; i++) {
            for (let j = 0; j < data.celulas[i].length; j++) {
                data.celulas[i][j].resposta = 0;
                data.celulas[i][j].tentativas = 0;
            }
        }
    }
    else {
        data.resposta = 0;
        data.respostaCorreta = 0;
    }
    data.tentativas = 0;
    data.linhas.length = 0;
    data.colunas.length = 0;
    data.vitoria = false;
    setGameData(modoDeJogo, data);
    //Atualiza número de tentativas
    atualizarNumeroDeTentativas();
}