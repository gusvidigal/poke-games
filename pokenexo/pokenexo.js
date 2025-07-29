//Realiza uma tentativa do pokenexo
function realizarTentativa() {
    //Altera estatísticas
    let statsData = gameData("stats");
    statsData.tentativas.totais += 1;
    statsData.tentativas.pokenexo += 1;
    setGameData("stats", statsData);
    //Aumenta o número de tentativas
    atualizarTentativasPokenexo(pokenexoData(pokenexo.id).tentativas + 1);
    //Aguarda propositalmente
    setTimeout(function () {
        //Verifica se a tentativa foi válida
        let respostaCorreta = false;
        let contador = 0;
        for (; contador < 4; contador++) {
            let resposta = pokenexo.respostas[contador].pokemon;
            if (listasSaoIguais(resposta, pokenexoData(pokenexo.id).selecionados)) {
                respostaCorreta = true;
                break;
            }
        }

        //Limpa o tabuleiro
        removerCelulasSelecionadas();
        //Limpa a lista
        let data = gameData("pokenexo");
        data.jogos[String(pokenexo.id)].selecionados.length = 0;
        setGameData("pokenexo", data);

        //Se a resposta estiver incorreta, para
        if (!respostaCorreta) {
            //Adiciona na string tentativa
            atualizarResumoPokenexo("x", true);
            return;
        }
        //Se estiver correta, inativa as células
        mostrarAcerto(contador);
    }, 500);
}
//Formata o grupo de células a ser mostrado
function formatarCategoria(indiceDaCategoria) {
    let resposta = pokenexo.respostas[indiceDaCategoria];
    let textoPokemon = "";
    //Formata o texto dos pokémon
    for (let i = 0; i < 4; i++) {
        let pokemon = obterPokemonPorId(resposta.pokemon[i]);
        let nomePokemonFormatado = camelCase(pokemon.nome);
        if (pokemon.desc !== "") nomePokemonFormatado += " - " + camelCase(pokemon.desc);
        if (i < 3) nomePokemonFormatado += ", ";
        //Adiciona no texto
        textoPokemon += nomePokemonFormatado;
    }
    //Formata a cor
    let cor = "";
    switch (indiceDaCategoria) {
        case 0:
            cor = "verde";
            break;
        case 1:
            cor = "azul";
            break;
        case 2:
            cor = "laranja";
            break;
        case 3:
            cor = "vermelho";
            break;
    }
    let texto = `
<div class="categoria categoria-${pokenexoData(pokenexo.id).acertados.indexOf(indiceDaCategoria) + 1} ${cor}">
    <p class="nome-categoria bold-font-text">${resposta.desc.toUpperCase()}</p>
    <p class="pokemon-categoria font-text">${textoPokemon}</p>
</div>`
    return texto;
}

//Realiza as funções de adivinhar corretamente
function mostrarAcerto(indiceDaCategoria) {
    //Adiciona o acerto no data
    let data = gameData("pokenexo");
    data.jogos[pokenexo.id].acertados.push(indiceDaCategoria);
    setGameData("pokenexo", data);
    //Insere a categoria
    inserirCategoriaNoTabuleiro(indiceDaCategoria);
    //Adiciona na string tentativa
    atualizarResumoPokenexo(indiceDaCategoria, true);
    //Se for o último acerto
    if (pokenexoData(pokenexo.id).acertados.length === 4) {
        //Determina a vitória
        pokenexoConcluido();
    }
}
//Função a ser executada na vitória
function pokenexoConcluido() {
    //Altera estatísticas
    let statsData = gameData("stats");
    statsData["jogos-concluidos"].totais += 1;
    statsData["jogos-concluidos"].pokenexo += 1;
    //Se foi de primeira
    if (pokenexoData(pokenexo.id).tentativas === 4) {
        statsData.pokenexo["de-primeira"] += 1;
    }
    setGameData("stats", statsData);
    //Seta o jogo como completado
    let data = gameData("pokenexo");
    data.jogos[pokenexo.id].vitoria = true;
    setGameData("pokenexo", data);
}