//JOGABILIDADE
//Inicia um novo jogo
function novoJogo(modoDificil) {
    //Se nunca tiver sido iniciado antes, seta como iniciado
    if (gameData(modoDeJogo).iniciado === false) {
        let data = gameData(modoDeJogo);
        data.iniciado = true;
        setGameData(modoDeJogo, data);
    }

    //Limpa os campos
    limparTabuleiro();
    //Procura uma matriz do tamanho do modo de jogo com respostas
    let pokemonEscolhido;
    let cols = [];
    let rows = [];
    while (1) {
        cols.length = 0;
        rows.length = 0;

        //Sorteia indexes
        let keys = embaralhar(Object.keys(indexes)).map(Number);
        if (modoDeJogo === "pokedoku-single") {
            //No modo single, apenas um pokémon responde todas as respostas
            let pokemonsPossiveis = [];
            for (const poke of pokedex) {
                if (poke.matches.length >= 6) pokemonsPossiveis.push(poke);
            }
            //Sorteia um
            pokemonEscolhido = pokemonsPossiveis[escolher(pokemonsPossiveis)];
            keys = embaralhar(pokemonEscolhido.matches).map(nome => Number(Object.values(indexes).indexOf(nome)));
        }
        //Adiciona nas listas de linhas e colunas
        for (let i = 0; i < infosDoJogo[modoDeJogo].rows + infosDoJogo[modoDeJogo].cols; i++) {
            if (i < infosDoJogo[modoDeJogo].cols) cols.push(keys[i]);
            else rows.push(keys[i]);
        }
        //Verifica se a matriz é válida
        let contagem1ModoDificil = 0;
        let flag = 0;
        for (let r of rows) {
            for (let c of cols) {
                //No modo difícil, não pode haver células com mais de 3 respostas
                if (matriz[r][c].length === 0 || (modoDificil && matriz[r][c].length > infosDoJogo[modoDeJogo].permissividade_modo_dificil)) {
                    flag = 1;
                    break;
                } else if (matriz[r][c].length === 1) contagem1ModoDificil++;
            }
            if (flag === 1) break;
        }
        //No modo difícil, limite_modo_dificil células só têm uma resposta possível
        //Adicionalmente, todas as células possuem permissividade_modo_possível respostas no máximo
        if (flag === 1 || (modoDificil && contagem1ModoDificil < infosDoJogo[modoDeJogo].limite_modo_dificil))
            continue;
        break;
    }

    //Atribui o jogo atual no localStorage do navegador
    let data = gameData(modoDeJogo);
    data.linhas = copiar(rows);
    data.colunas = copiar(cols);
    //Atribui o pokemon escolhido
    if (pokemonEscolhido) {
        data.respostaCorreta = pokemonEscolhido.id;
    }
    setGameData(modoDeJogo, data);


    //Insere nos espaços das linhas e das colunas
    inserirHeadersNoTabuleiro(modoDeJogo);
    //Insere as dificuldades
    inserirDificuldadesNoTabuleiro(modoDeJogo);
}



//PESQUISA
//Mostra o popup de pesquisa
function mostrarPopupDePesquisa(idDoFoco) {
    //Se a célula estiver inativa, para
    if (elementoTemClasse(`#${modoDeJogo} .${idDoFoco}`, "inativo")) return;
    //Ativa o background e o popup
    delClasseDeElemento("#background", "invisivel");
    delClasseDeElemento("#popup_pesquisa", "invisivel");
    //Limpa o campo da pesquisa e coloca o elemento automaticamente focado
    setarAtributoEmHTML("#resultados", "innerHTML");
    setarAtributoEmHTML("#pesquisa_pokemon", "value");
    document.getElementById("pesquisa_pokemon").focus();
    focoAtual = idDoFoco;
}
//Fecha o popup de pesquisa
function fecharPopupDePesquisa() {
    //Desativa o background
    addClasseAElemento("#background", "invisivel");
    addClasseAElemento("#popup_pesquisa", "invisivel");
}
//Formata o resultado de pesquisa
function formatarResultadoDaPesquisa(pokemon) {
    let texto = `
<li class="item-resultado">
    <img class="imagem-poke-lista" src="${pokemon.imagem}">
    <p class="fonte-negrito fonte-negrito-resultado" >${pokemon.nome.toUpperCase()}<br>
        <span class="descricao">${camelCase(pokemon.desc)}</span>
    </p>
    <button class="fonte-negrito" onclick="chutarPokemon(${pokemon.id})">Selecionar</button>
</li>`;
    return texto;
}
//Mostra os resultados da pesquisa do popup
function mostrarResultadosDaPesquisa() {
    //Limpa os resultados anteriores
    setarAtributoEmHTML("#resultados", "innerHTML");
    //Obtém a pesquisa
    let pesquisa = obterAtributoDeHTML("#pesquisa_pokemon", "value").toLowerCase();
    //Se a pesquisa é muito curta, para
    if (pesquisa.length < 3) return;
    //Adiciona todos os pokémon que possuem a substring da pesquisa nos resultados
    for (const pokemon of pokedex) {
        if (pokemon.nome.indexOf(pesquisa) !== -1 || pokemon.desc.indexOf(pesquisa) !== -1) {
            let texto = formatarResultadoDaPesquisa(pokemon);
            document.getElementById("resultados").innerHTML += texto;
        }
    }
}



//TENTATIVAS
//Tenta adivinhar
function chutarPokemon(id, chuteEmulado) {

    let numeroLinha = Number(focoAtual[1]) - 1;
    let numeroColuna = Number(focoAtual[2]) - 1;

    //Aumenta o numero de tentativas;
    if (!chuteEmulado) {
        //Tentativas gerais
        atualizarNumeroDeTentativas(gameData(modoDeJogo).tentativas + 1);
        //Tentativas da célula, se não for modo single
        if (modoDeJogo !== "pokedoku-single") {
            let data = gameData(modoDeJogo);
            data.celulas[numeroLinha][numeroColuna].tentativas += 1;
            setGameData(modoDeJogo, data);
        }
    }
    //Obtém o pokémon
    let pokemon = obterPokemonPorId(id);
    //Obtém possíveis respostas
    let row = gameData(modoDeJogo).linhas[numeroLinha];
    let col = gameData(modoDeJogo).colunas[numeroColuna];
    let respostasValidas = matriz[row][col];
    //Se é modo single, só tem uma resposta
    let chuteValido = false;
    if (modoDeJogo === "pokedoku-single") {
        let respostaCorreta = gameData(modoDeJogo).respostaCorreta;
        if (respostaCorreta === id) chuteValido = true;
    } else {
        //Verifica se é resposta válida
        for (const resposta of respostasValidas) {
            if (resposta.id === id) {
                chuteValido = true;
                break;
            }
        }
    }

    //Fecha o popup
    fecharPopupDePesquisa();

    //Se o chute for inválido
    if (!chuteValido) {
        //Mostra o X no nome
        setarCoresDoNomeDoPokemon("erro", focoAtual);
        document.querySelector(`#${modoDeJogo} .${focoAtual} p`).innerHTML += "X";
        return;
    }
    //Insere pokémon e nome
    let data = gameData(modoDeJogo);
    //Coloca o pokemon na célula e a inativa
    //Se for modo single, insere em todos
    if (modoDeJogo === "pokedoku-single") {
        for (let i = 0; i < infosDoJogo[modoDeJogo].rows; i++) {
            for (let j = 0; j < infosDoJogo[modoDeJogo].cols; j++) {
                delClasseDeElemento(`#${modoDeJogo} .D${i + 1}${j + 1} p`, "erro");
                inserirPokemonNaCelula(`D${i + 1}${j + 1}`, pokemon);
            }
        }
        //Insere no localStorage
        data.resposta = pokemon.id;
    } else {
        delClasseDeElemento(`#${modoDeJogo} .${focoAtual} p`, "erro");
        inserirPokemonNaCelula(focoAtual, pokemon);
        //Insere no localStorage
        data.celulas[numeroLinha][numeroColuna].resposta = pokemon.id;
    }
    setGameData(modoDeJogo, data);
    focoAtual = "";

    //Se o usuário acertou todos
    let acertouTodas = true;
    for (let i = 0; i < infosDoJogo[modoDeJogo].rows; i++) {
        for (let j = 0; j < infosDoJogo[modoDeJogo].cols; j++) {
            if (!elementoTemClasse(`#${modoDeJogo} .D${i + 1}${j + 1}`, "inativo")) acertouTodas = false;
        }
    }
    if (acertouTodas && !chuteEmulado) tabuleiroCompletado();
}

//Mostra um possível tabuleiro
function revelarTabuleiro() {
    //Limpa o tabuleiro
    removerRespostas();
    //Itera sobre todas as células
    for (let i = 0; i < infosDoJogo[modoDeJogo].rows; i++) {
        for (let j = 0; j < infosDoJogo[modoDeJogo].cols; j++) {
            //Obtém as respostas válidas
            let row = gameData(modoDeJogo).linhas[i];
            let col = gameData(modoDeJogo).colunas[j];
            let respostasValidas = matriz[row][col];
            //Sorteia uma. Mas se for modo single, obtém da célula
            let idDaResposta;
            if (modoDeJogo === "pokedoku-single")
                idDaResposta = gameData(modoDeJogo).respostaCorreta;
            else
                idDaResposta = respostasValidas[escolher(respostasValidas)].id;
            //Insere o pokémon na célula
            inserirPokemonNaCelula(`D${i + 1}${j + 1}`, obterPokemonPorId(idDaResposta));
        }
    }
    //Reseta as cores
    setarCoresDoNomeDoPokemon();
}
//Vitória do tabuleiro - preencheu tudo
function tabuleiroCompletado() {
    //Muda no localStorage
    let data = gameData(modoDeJogo);
    data.vitoria = true;
    setGameData(modoDeJogo, data);
    //Muda todos os textos para arco-íris
    setarCoresDoNomeDoPokemon("rainbow");
    //Mostra os ribbons
    alternarRibbonsDeVitoria(true);
}