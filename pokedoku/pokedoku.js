//JOGABILIDADE
//Inicia um novo jogo
function novoJogo(modoDificil) {
    //Adiciona nas estatísticas
    let statsData = gameData("stats");
    statsData["jogos-gerados"].totais += 1;
    statsData["jogos-gerados"].pokedoku[modoDeJogoPokedoku] += 1;
    setGameData("stats", statsData);
    //Se nunca tiver sido iniciado antes, seta como iniciado
    if (gameData(modoDeJogoPokedoku).iniciado === false) {
        let data = gameData(modoDeJogoPokedoku);
        data.iniciado = true;
        setGameData(modoDeJogoPokedoku, data);
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
        if (modoDeJogoPokedoku === "pokedoku-single") {
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
        for (let i = 0; i < infosDoJogo[modoDeJogoPokedoku].rows + infosDoJogo[modoDeJogoPokedoku].cols; i++) {
            if (i < infosDoJogo[modoDeJogoPokedoku].cols) cols.push(keys[i]);
            else rows.push(keys[i]);
        }
        //Verifica se a matriz é válida
        let contagem1ModoDificil = 0;
        let flag = 0;
        for (let r of rows) {
            for (let c of cols) {
                //No modo difícil, não pode haver células com mais de 3 respostas
                if (matriz[r][c].length === 0 || (modoDificil &matriz[r][c].length > infosDoJogo[modoDeJogoPokedoku].permissividade_modo_dificil)) {
                    flag = 1;
                    break;
                } else if (matriz[r][c].length === 1) contagem1ModoDificil++;
            }
            if (flag === 1) break;
        }
        //No modo difícil, limite_modo_dificil células só têm uma resposta possível
        //Adicionalmente, todas as células possuem permissividade_modo_possível respostas no máximo
        if (flag === 1 || (modoDificil &contagem1ModoDificil < infosDoJogo[modoDeJogoPokedoku].limite_modo_dificil))
            continue;
        break;
    }

    //Atribui o jogo atual no localStorage do navegador
    let data = gameData(modoDeJogoPokedoku);
    data.linhas = copiar(rows);
    data.colunas = copiar(cols);
    //Atribui o pokemon escolhido
    if (pokemonEscolhido) {
        data.respostaCorreta = pokemonEscolhido.id;
    }
    setGameData(modoDeJogoPokedoku, data);


    //Insere nos espaços das linhas e das colunas
    inserirHeadersNoTabuleiro(modoDeJogoPokedoku);
    //Insere as dificuldades
    inserirDificuldadesNoTabuleiro(modoDeJogoPokedoku);
}



//PESQUISA
//Mostra o popup de pesquisa
function mostrarPopupDePesquisa(idDoFoco) {
    //Se a célula estiver inativa, para
    if (elementoTemClasse(`#${modoDeJogoPokedoku} .${idDoFoco}`, "inativo")) return;
    //Ativa o background e o popup
    delClasseDeElemento(".background", "invisivel");
    delClasseDeElemento(".search-popup", "invisivel");
    //Limpa o campo da pesquisa e coloca o elemento automaticamente focado
    setarAtributoEmHTML("#resultados", "innerHTML");
    setarAtributoEmHTML("#pesquisa_pokemon", "value");
    document.getElementById("pesquisa_pokemon").focus();
    focoAtualPokedoku = idDoFoco;
}
//Fecha o popup de pesquisa
function fecharPopupDePesquisa() {
    //Desativa o background
    addClasseAElemento(".background", "invisivel");
    addClasseAElemento(".search-popup", "invisivel");
}
//Formata o resultado de pesquisa
function formatarResultadoDaPesquisa(pokemon) {
    let texto = `
<li class="item-resultado">
    <img src="${pokemon.imagem}">
    <p class="bold bold-resultado">${pokemon.nome.toUpperCase()}<br>
        <span class="descricao">${camelCase(pokemon.desc)}</span>
    </p>
    <button class="bold" onclick="chutarPokemon(${pokemon.id})">Selecionar</button>
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

    let numeroLinha = Number(focoAtualPokedoku[1]) - 1;
    let numeroColuna = Number(focoAtualPokedoku[2]) - 1;

    //Aumenta o numero de tentativas;
    if (!chuteEmulado) {
        //Tentativas gerais
        atualizarTentativasPokedoku(gameData(modoDeJogoPokedoku).tentativas + 1);
        //Tentativas da célula, se não for modo single
        if (modoDeJogoPokedoku !== "pokedoku-single") {
            let data = gameData(modoDeJogoPokedoku);
            data.celulas[numeroLinha][numeroColuna].tentativas += 1;
            setGameData(modoDeJogoPokedoku, data);
        }
    }
    //Obtém o pokémon
    let pokemon = obterPokemonPorId(id);
    //Obtém possíveis respostas
    let row = gameData(modoDeJogoPokedoku).linhas[numeroLinha];
    let col = gameData(modoDeJogoPokedoku).colunas[numeroColuna];
    let respostasValidas = matriz[row][col];
    //Se é modo single, só tem uma resposta
    let chuteValido = false;
    if (modoDeJogoPokedoku === "pokedoku-single") {
        let respostaCorreta = gameData(modoDeJogoPokedoku).respostaCorreta;
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
        setarCoresDoNomeDoPokemon("erro", focoAtualPokedoku);
        document.querySelector(`#${modoDeJogoPokedoku} .${focoAtualPokedoku} p`).innerHTML += "X";
        return;
    }
    //Insere pokémon e nome
    let data = gameData(modoDeJogoPokedoku);
    //Coloca o pokemon na célula e a inativa
    //Se for modo single, insere em todos
    if (modoDeJogoPokedoku === "pokedoku-single") {
        for (let i = 0; i < infosDoJogo[modoDeJogoPokedoku].rows; i++) {
            for (let j = 0; j < infosDoJogo[modoDeJogoPokedoku].cols; j++) {
                delClasseDeElemento(`#${modoDeJogoPokedoku} .D${i + 1}${j + 1} p`, "erro");
                inserirPokemonNaCelula(`D${i + 1}${j + 1}`, pokemon);
            }
        }
        //Insere no localStorage
        data.resposta = pokemon.id;
    } else {
        delClasseDeElemento(`#${modoDeJogoPokedoku} .${focoAtualPokedoku} p`, "erro");
        inserirPokemonNaCelula(focoAtualPokedoku, pokemon);
        //Insere no localStorage
        data.celulas[numeroLinha][numeroColuna].resposta = pokemon.id;
    }
    setGameData(modoDeJogoPokedoku, data);
    focoAtualPokedoku = "";

    //Se o usuário acertou todos
    let acertouTodas = true;
    for (let i = 0; i < infosDoJogo[modoDeJogoPokedoku].rows; i++) {
        for (let j = 0; j < infosDoJogo[modoDeJogoPokedoku].cols; j++) {
            if (!elementoTemClasse(`#${modoDeJogoPokedoku} .D${i + 1}${j + 1}`, "inativo")) acertouTodas = false;
        }
    }
    if (acertouTodas &!chuteEmulado) tabuleiroCompletado();
}

//Mostra um possível tabuleiro
function revelarTabuleiro() {
    //Limpa o tabuleiro
    removerRespostas();
    //Itera sobre todas as células
    for (let i = 0; i < infosDoJogo[modoDeJogoPokedoku].rows; i++) {
        for (let j = 0; j < infosDoJogo[modoDeJogoPokedoku].cols; j++) {
            //Obtém as respostas válidas
            let row = gameData(modoDeJogoPokedoku).linhas[i];
            let col = gameData(modoDeJogoPokedoku).colunas[j];
            let respostasValidas = matriz[row][col];
            //Sorteia uma. Mas se for modo single, obtém da célula
            let idDaResposta;
            if (modoDeJogoPokedoku === "pokedoku-single")
                idDaResposta = gameData(modoDeJogoPokedoku).respostaCorreta;
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
    //Altera estatísticas
    let statsData = gameData("stats");
    statsData["jogos-concluidos"].totais += 1;
    statsData["jogos-concluidos"].pokedoku[modoDeJogoPokedoku] += 1;
    setGameData("stats", statsData);
    //Muda no localStorage
    let data = gameData(modoDeJogoPokedoku);
    data.vitoria = true;
    setGameData(modoDeJogoPokedoku, data);
    //Muda todos os textos para arco-íris
    setarCoresDoNomeDoPokemon("rainbow");
    //Mostra os ribbons
    //alternarRibbonsDeVitoria(true);
}