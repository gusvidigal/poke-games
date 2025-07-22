//Dados
var focoAtual;
var modoDeJogo = "pokedoku-3x3";
var infosDoJogo = {
    "pokedoku-2x2": {
        rows: 2,
        cols: 2,
        min_tentativas: 4,
        limite_modo_dificil: 4,
        permissividade_modo_dificil: 1,
    },
    "pokedoku-3x3": {
        rows: 3,
        cols: 3,
        min_tentativas: 9,
        limite_modo_dificil: 5,
        permissividade_modo_dificil: 3,
    },
    "pokedoku-4x4": {
        rows: 4,
        cols: 4,
        min_tentativas: 16,
        limite_modo_dificil: 1,
        permissividade_modo_dificil: 5,
    },
    "pokedoku-single": {
        rows: 3,
        cols: 3,
        min_tentativas: 1,
    },
}
//Cria os cookies, caso não tenham sido criados
let modos = ["2x2", "3x3", "4x4", "single"];
let sufixos = ["jogo", "tentativas", "tabuleiro"];
modos.forEach(modo => {
    sufixos.forEach(sufixo => {
        let chave = `pokedoku-${modo}-${sufixo}`;
        if (obterCookie(chave, String) === "") {
            //Seta os cookies
            let valorInicial;
            switch (sufixo) {
                case "jogo":
                    valorInicial = false;
                    break;
                case "tentativas":
                    valorInicial = 0;
                    break;
                case "tabuleiro":
                    valorInicial = "";
                    break;
            }
            criarCookie(chave, valorInicial);
        }
    });
});
if (obterCookie("pokemon-escolhido", String) === "") {
    criarCookie("pokemon-escolhido", 0);
}

//Função ao carregar a página do jogo
function aoCarregarAPagina(tabuleiro) {
    modoDeJogo = tabuleiro;
    //Atualiza as tentativas
    atualizarTentativas();
    //Inicia um jogo se não tiver sido iniciado antes
    if (obterCookie(`${modoDeJogo}-jogo`, bool) === false)
        novoJogo();
    else {
        //Mas se já tiver um jogo iniciado, carrega
        let tab = obterCookie(`${modoDeJogo}-tabuleiro`, String).split(".");
        inserirLabelsNoTabuleiro(tab, infosDoJogo[modoDeJogo].rows);
        inserirDadosNasCelulasDoTabuleiro(tab, infosDoJogo[modoDeJogo].rows, obterCookie("pokemon-escolhido", Number));
    }
}




//FUNÇÕES BÁSICAS
//Seta as cores
function setarCorDoNomeDoPokemon(vitoria) {
    for (let i = 0; i < infosDoJogo[modoDeJogo].rows; i++) {
        for (let j = 0; j < infosDoJogo[modoDeJogo].cols; j++) {
            let corFundo;
            let corTexto;
            if (vitoria) {
                let variavel;
                if (obterCookie(`${modoDeJogo}-tentativas`, Number) === infosDoJogo[modoDeJogo].min_tentativas) {
                    variavel = "--verde";
                } else {
                    variavel = "--amarelo";
                }
                corFundo = variavelDoCSS(variavel);
                corTexto = "black";
            }
            else {
                corFundo = "black";
                corTexto = "white";
            }
            //Define as cores
            setarAtributoEmCSS(`#${modoDeJogo} .D${i + 1}${j + 1} p`, "background-color", corFundo);
            setarAtributoEmCSS(`#${modoDeJogo} .D${i + 1}${j + 1} p`, "color", corTexto);
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
    setarAtributoEmCSS(`#${modoDeJogo} .${celula} p`, "color", "white");
    //Inativa a célula
    addClasseAElemento(`#${modoDeJogo} .${celula}`, "inativo");
}

//Reseta os campos
function limparTabuleiro(limparHeaders) {
    //Reseta os campos
    setarAtributoEmHTML("#pesquisa_pokemon", "value");
    setarAtributoEmHTML(`#${modoDeJogo} p.nome-pokemon`, "innerHTML", "", true);
    setarAtributoEmCSS(`#${modoDeJogo} p.nome-pokemon`, "color", "white", true);
    setarAtributoEmHTML(`#${modoDeJogo} img.imagem-poke-celula`, "src", "", true);
    addClasseAElemento(`#${modoDeJogo} img.imagem-poke-celula`, "invisivel", true);
    //Volta as cores dos nomes
    setarCorDoNomeDoPokemon(false);
    //Ativa todas as células novamente
    delClasseDeElemento(`#${modoDeJogo} div.celula-tentativa`, "inativo", true);

    if (limparHeaders)
        setarAtributoEmHTML(`#${modoDeJogo} .celula-header`, "innerHTML", "", true);
}
//Mostra a quantidade de respostas possíveis para cada célula
function alternarDificuldade(acao) {
    let textoBotao;
    if (acao) {
        delClasseDeElemento(`#${modoDeJogo} div.dificuldade`, "invisivel", true);
        textoBotao = "Esconder"
    }
    else {
        addClasseAElemento(`#${modoDeJogo} div.dificuldade`, "invisivel", true);
        textoBotao = "Mostrar"
    }
    //Muda a função do botão
    document.getElementById("botao_dificuldade").setAttribute("onclick", `alternarDificuldade(${!acao})`);
    setarAtributoEmHTML("#botao_dificuldade", "innerHTML", `${textoBotao} Dificuldade`);
}
//Atualiza o número de tentativas
function atualizarTentativas(numero) {
    if (numero !== undefined)
        criarCookie(`${modoDeJogo}-tentativas`, numero);
    setarAtributoEmHTML(`#tentativas span`, "innerHTML", obterCookie(`${modoDeJogo}-tentativas`, String));
}
//Adiciona nomes nas linhas e colunas
function inserirLabelsNoTabuleiro(labels, nLinhas, nColunas) {
    labels = labels.map(Number);
    let nomesCols = labels.slice(nLinhas, labels.length).map(i => indexes[i]);
    for (let i = 0; i < infosDoJogo[modoDeJogo].cols; i++) {
        //Se for um tipo, põe a imagem
        let nome = nomesCols[i];
        if (Object.keys(imagensDosTipos).includes(nome)) {
            let imagem = imagensDosTipos[nome];
            setarAtributoEmHTML(`#${modoDeJogo} .C${i + 1}`, "innerHTML", `<img alt="${nome}" src=${imagem}>`);
        } else
            setarAtributoEmHTML(`#${modoDeJogo} .C${i + 1}`, "innerHTML", `<p>${nome}</p>`);
    }
    //Insere nos espaços das linhas
    let nomesRows = labels.slice(0, nLinhas).map(i => indexes[i]);
    for (let i = 0; i < infosDoJogo[modoDeJogo].rows; i++) {
        //Se for um tipo, põe a imagem
        let nome = nomesRows[i];
        if (Object.keys(imagensDosTipos).includes(nome)) {
            let imagem = imagensDosTipos[nome];
            setarAtributoEmHTML(`#${modoDeJogo} .R${i + 1}`, "innerHTML", `<img alt="${nome}" src=${imagem}>`);
        } else
            setarAtributoEmHTML(`#${modoDeJogo} .R${i + 1}`, "innerHTML", `<p>${nome}</p>`);
    }
}
//Adiciona os metadados no tabuleiro
function inserirDadosNasCelulasDoTabuleiro(labels, nLinhas, idPokeEscolhido) {
    labels = labels.map(Number);
    //Atribui o id da matriz em cada célula e insere a dificuldade
    let linhas = labels.slice(0, nLinhas);
    let colunas = labels.slice(nLinhas, labels.length);
    for (let i = 0; i < linhas.length; i++) {
        for (let j = 0; j < colunas.length; j++) {
            //Se for modo single, inclui o id da resposta
            if (modoDeJogo === "pokedoku-single")
                setarDadoEmHTML(`#${modoDeJogo} .D${i + 1}${j + 1}`, "single", idPokeEscolhido);
            else
                setarDadoEmHTML(`#${modoDeJogo} .D${i + 1}${j + 1}`, "single");
            setarDadoEmHTML(`#${modoDeJogo} .D${i + 1}${j + 1}`, "matriz", `${linhas[i]}.${colunas[j]}`);
            setarAtributoEmHTML(`#${modoDeJogo} .D${i + 1}${j + 1} div.dificuldade`, "innerHTML", matriz[linhas[i]][colunas[j]].length);
        }
    }
}



//JOGABILIDADE
//Reinicia o jogo atual
function reiniciarJogo() {
    //Reseta os campos
    limparTabuleiro(false);
    atualizarTentativas(0);
    //Volta as cores dos nomes
    setarCorDoNomeDoPokemon(false);
}

//Inicia um novo jogo
function novoJogo(modoDificil) {
    //Se nunca tiver sido iniciado antes, seta como iniciado
    if (obterCookie(`${modoDeJogo}-jogo`, bool) === false)
        criarCookie(`${modoDeJogo}-jogo`, true);

    //Limpa os campos
    atualizarTentativas(0);
    if (modoDeJogo !== "pokedoku-single")
        alternarDificuldade(false);
    limparTabuleiro(true);
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

    //Insere nos espaços das linhas e das colunas
    inserirLabelsNoTabuleiro(rows.concat(cols), rows.length);
    //Atribui o id da matriz em cada célula e insere a dificuldade
    inserirDadosNasCelulasDoTabuleiro(rows.concat(cols), rows.length, pokemonEscolhido ? pokemonEscolhido.id : 0);

    //Atribui o jogo atual nos cookies do navegador
    let texto = "";
    let lista = rows.concat(cols);
    for (let i = 0; i < lista.length; i++) {
        texto += String(lista[i]);
        if (i < lista.length - 1) texto += ".";
    }
    criarCookie(`${modoDeJogo}-tabuleiro`, texto);
    //Atribui o pokemon escolhido nos cookies do navegador
    if (pokemonEscolhido)
        criarCookie("pokemon-escolhido", pokemonEscolhido.id);
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
    //Aumenta o numero de tentativas;
    if (!chuteEmulado) atualizarTentativas(obterCookie(`${modoDeJogo}-tentativas`, Number) + 1);
    //Obtém o pokémon
    let pokemon = obterPokemonPorId(id);
    //Obtém possíveis respostas
    let [row, col] = obterMetaDadosDeHTML(`#${modoDeJogo} .${focoAtual}`, "matriz").split(".");
    let respostasValidas = matriz[row][col];
    //Se é modo single, só tem uma resposta
    let chuteValido = false;
    if (modoDeJogo === "pokedoku-single") {
        let respostaCorreta = Number(obterMetaDadosDeHTML(`#${modoDeJogo} .${focoAtual}`, "single"));
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

    //Se o chute for inválido
    if (!chuteValido) {
        //Fecha o popup
        fecharPopupDePesquisa();
        //Mostra o X no nome
        setarAtributoEmCSS(`#${modoDeJogo} .${focoAtual} p`, "color", "red");
        document.querySelector(`#${modoDeJogo} .${focoAtual}`).querySelector("p").innerHTML += "X";
        return;
    }
    //Fecha popup, coloca o pokemon na célula e a inativa
    fecharPopupDePesquisa();
    //Insere pokémon e nome
    //Se for modo single, insere em todos
    if (modoDeJogo === "pokedoku-single") {
        for (let i = 0; i < infosDoJogo[modoDeJogo].rows; i++) {
            for (let j = 0; j < infosDoJogo[modoDeJogo].cols; j++) {
                inserirPokemonNaCelula(`D${i + 1}${j + 1}`, pokemon);
            }
        }
    } else {
        inserirPokemonNaCelula(focoAtual, pokemon);
    }
    focoAtual = "";

    //Se o usuário acertou todos
    let acertouTodas = true;
    for (let i = 0; i < infosDoJogo[modoDeJogo].rows; i++) {
        for (let j = 0; j < infosDoJogo[modoDeJogo].cols; j++) {
            if (!elementoTemClasse(`#${modoDeJogo} .D${i + 1}${j + 1}`, "inativo")) acertouTodas = false;
        }
    }
    if (acertouTodas && !chuteEmulado) vitoria();
}

//Mostra um possível tabuleiro
function revelarTabuleiro() {
    //Itera sobre todas as células
    for (let i = 0; i < infosDoJogo[modoDeJogo].rows; i++) {
        for (let j = 0; j < infosDoJogo[modoDeJogo].cols; j++) {
            //Obtém as respostas válidas
            let [row, col] = obterMetaDadosDeHTML(`#${modoDeJogo} .D${i + 1}${j + 1}`, "matriz").split(".");
            let respostasValidas = matriz[row][col];
            //Sorteia uma. Mas se for modo single, obtém da célula
            let idDaResposta;
            if (modoDeJogo === "pokedoku-single")
                idDaResposta = Number(obterMetaDadosDeHTML(`#${modoDeJogo} .D${i + 1}${j + 1}`, "single"));
            else
                idDaResposta = respostasValidas[escolher(respostasValidas)].id;
            //Insere o pokémon na célula
            inserirPokemonNaCelula(`D${i + 1}${j + 1}`, obterPokemonPorId(idDaResposta));
        }
    }
    //Reseta as cores
    setarCorDoNomeDoPokemon(false);
}
//Vitória do tabuleiro - preencheu tudo
function vitoria() {
    //Muda todos os textos para verde ou amarelo ou reseta
    setarCorDoNomeDoPokemon(true);
}